'use client'

import React from 'react'

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-96 min-h-screen bg-gradient-to-b from-indigo-500/20 to-neutral-100 flex flex-col items-center justify-center gap-6">
      {/* App Logo/Icon */}
      <div className="relative">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <div className="text-4xl">⚾</div>
        </div>
        
        {/* Spinning Border */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-2xl animate-spin" />
      </div>
      
      {/* App Title */}
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold font-roboto-condensed">
          MLM DS
        </h1>
        <p className="text-white/80 text-sm font-medium font-barlow mt-1">
          Baseball Training App
        </p>
      </div>
      
      {/* Loading Animation */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
        
        <span className="text-white/60 text-sm font-medium">
          Loading your stats...
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full animate-pulse w-3/4 transition-all duration-1000" />
      </div>
      
      {/* Version Info */}
      <div className="absolute bottom-8 text-center">
        <p className="text-white/40 text-xs font-medium">
          Version 2.1.0
        </p>
      </div>
    </div>
  )
}