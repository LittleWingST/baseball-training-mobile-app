'use client'

import React, { useState, useEffect } from 'react'

export const StatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false 
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative h-7 w-full overflow-hidden glass-effect">
      <div className="absolute inset-0 flex items-center justify-between px-5">
        {/* Time */}
        <div className="text-white text-sm font-medium">
          {currentTime || '9:41'}
        </div>
        
        {/* Signal & Battery */}
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <div className="flex items-end gap-0.5">
            {[2, 3, 4, 5].map((height, index) => (
              <div 
                key={index}
                className={`w-1 bg-white rounded-sm transition-all duration-300`}
                style={{ height: `${height * 2}px` }}
              />
            ))}
          </div>
          
          {/* WiFi */}
          <div className="w-4 h-3 relative mx-1">
            <svg 
              viewBox="0 0 16 12" 
              fill="none" 
              className="w-full h-full text-white"
            >
              <path 
                d="M8 2C10.76 2 13.26 3.05 15.17 4.95L13.76 6.36C12.31 4.9 10.23 4 8 4C5.77 4 3.69 4.9 2.24 6.36L0.83 4.95C2.74 3.05 5.24 2 8 2Z" 
                fill="currentColor"
                fillOpacity="0.8"
              />
            </svg>
          </div>
          
          {/* Battery */}
          <div className="w-6 h-3 relative bg-white/30 rounded-sm border border-white/50">
            <div className="w-5 h-2 absolute top-0.5 left-0.5 bg-white rounded-[1px]" />
            <div className="w-0.5 h-1 absolute top-1 -right-1 bg-white/50 rounded-r-sm" />
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
    </header>
  )
}