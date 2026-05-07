'use client';

import Lottie from 'lottie-react';
import { cn } from '@/utils/cn';

interface LoadingProps {
  className?: string;
  size?: number;
  animationData?: any;
}

export function Loading({ className, size = 200, animationData }: LoadingProps) {
  // In a real app, you would import a JSON animation file
  // For now, we'll provide a fallback UI or a sample animation URL
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {animationData ? (
        <Lottie
          animationData={animationData}
          style={{ width: size, height: size }}
          loop={true}
        />
      ) : (
        <div 
          className="animate-spin rounded-full border-4 border-pacul-primary/20 border-t-pacul-primary"
          style={{ width: size / 4, height: size / 4 }}
        />
      )}
      <p className="mt-4 text-sm font-medium text-pacul-primary animate-pulse">
        Menyiapkan Aksi Lingkungan...
      </p>
    </div>
  );
}
