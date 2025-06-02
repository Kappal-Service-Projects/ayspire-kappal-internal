"use client";

import React from "react";

interface LoadingProps {
  variant?: "page" | "component" | "skeleton" | "minimal";
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  variant = "component",
  size = "md",
  text = "Loading...",
  className = "",
}) => {
  const renderPageLoading = () => (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full animate-spin border-t-primary-600 dark:border-t-primary-400" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-secondary/50" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 animate-pulse">
          {text}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Preparing your experience...
        </p>
        <div className="mt-6 w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-secondary rounded-full animate-shimmer" />
        </div>
      </div>
    </div>
  );

  const renderComponentLoading = () => (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="text-center">
        <div
          className={`${getSizeClasses(size)} border-4 border-primary-200 dark:border-primary-800 rounded-full animate-spin border-t-primary-600 dark:border-t-primary-400 mx-auto mb-4`}
        />
        <p className="text-gray-600 dark:text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );

  const renderSkeletonLoading = () => (
    <div className={`animate-pulse space-y-4 ${className}`}>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
      </div>
      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="flex space-x-4">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1" />
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1" />
      </div>
    </div>
  );

  const renderMinimalLoading = () => (
    <div className={`inline-flex items-center ${className}`}>
      <div
        className={`${getSizeClasses(size)} border-2 border-primary-600 dark:border-primary-400 rounded-full animate-spin border-t-transparent mr-2`}
      />
      <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
    </div>
  );

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "md":
        return "w-8 h-8";
      case "lg":
        return "w-12 h-12";
      default:
        return "w-8 h-8";
    }
  };

  switch (variant) {
    case "page":
      return renderPageLoading();
    case "skeleton":
      return renderSkeletonLoading();
    case "minimal":
      return renderMinimalLoading();
    default:
      return renderComponentLoading();
  }
};

// Skeleton components for specific use cases
export const BlogCardSkeleton: React.FC = () => (
  <div className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
    <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4" />
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4" />
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24" />
  </div>
);

export const ServicesSectionSkeleton: React.FC = () => (
  <div className="py-20 px-4 animate-pulse">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-4" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
      </div>
    </div>
  </div>
);

export default Loading;
