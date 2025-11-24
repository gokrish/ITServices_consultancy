"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-gray-200 dark:bg-gray-800", className)}
            {...props}
        />
    )
}

// Predefined skeleton components for common use cases
export function ServiceCardSkeleton() {
    return (
        <div className="border rounded-xl p-6 space-y-4">
            <Skeleton className="h-12 w-12 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-10 w-32 mt-4" />
        </div>
    );
}

export function BlogCardSkeleton() {
    return (
        <div className="border rounded-xl overflow-hidden">
            <Skeleton className="h-48 w-full rounded-none" />
            <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex gap-2 mt-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                </div>
            </div>
        </div>
    );
}

export function TestimonialSkeleton() {
    return (
        <div className="border rounded-xl p-6 space-y-4">
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-5 w-5" />
                ))}
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex items-center gap-3 mt-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                </div>
            </div>
        </div>
    );
}

export function PageHeaderSkeleton() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-5 w-1/2" />
        </div>
    );
}

export { Skeleton }
