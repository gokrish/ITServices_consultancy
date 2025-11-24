import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create a new ratelimiter that allows 5 requests per 60 seconds
let ratelimit: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, '60 s'),
        analytics: true,
        prefix: '@upstash/ratelimit',
    });
}

// In-memory fallback for development
const requests = new Map<string, number[]>();

function cleanupOldRequests(key: string, windowMs: number) {
    const now = Date.now();
    const timestamps = requests.get(key) || [];
    const recentTimestamps = timestamps.filter(ts => now - ts < windowMs);

    if (recentTimestamps.length > 0) {
        requests.set(key, recentTimestamps);
    } else {
        requests.delete(key);
    }

    return recentTimestamps;
}

export async function rateLimit(identifier: string, limit: number = 5, windowMs: number = 60000) {
    // Use Upstash if available
    if (ratelimit) {
        const result = await ratelimit.limit(identifier);
        return {
            success: result.success,
            limit: result.limit,
            remaining: result.remaining,
            reset: result.reset,
        };
    }

    // Fallback to in-memory rate limiting
    const now = Date.now();
    const recentRequests = cleanupOldRequests(identifier, windowMs);

    if (recentRequests.length >= limit) {
        const oldestRequest = recentRequests[0];
        const resetTime = new Date(oldestRequest + windowMs);

        return {
            success: false,
            limit,
            remaining: 0,
            reset: resetTime,
        };
    }

    recentRequests.push(now);
    requests.set(identifier, recentRequests);

    return {
        success: true,
        limit,
        remaining: limit - recentRequests.length,
        reset: new Date(now + windowMs),
    };
}

// Get IP address from request
export function getIP(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    if (realIp) {
        return realIp.trim();
    }

    return 'unknown';
}
