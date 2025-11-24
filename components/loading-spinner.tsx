import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    text?: string;
}

const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
    xl: 'h-16 w-16 border-4',
};

export function LoadingSpinner({ size = 'md', className, text }: LoadingSpinnerProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div
                className={cn(
                    'animate-spin rounded-full border-gray-300 border-t-blue-600',
                    sizeClasses[size],
                    className
                )}
                role="status"
                aria-label="Loading"
            />
            {text && (
                <p className="text-sm text-gray-600 animate-pulse">{text}</p>
            )}
            <span className="sr-only">Loading...</span>
        </div>
    );
}

// Full page loading component
export function PageLoader({ text = 'Loading...' }: { text?: string }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
            <LoadingSpinner size="lg" text={text} />
        </div>
    );
}

// Button loading state
export function ButtonSpinner({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent',
                className
            )}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
}
