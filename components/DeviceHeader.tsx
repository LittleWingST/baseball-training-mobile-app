'use client'

import React, { useState } from 'react'

export const DeviceHeader: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true)

  return (
    <div className="flex justify-between items-center px-5 py-3">
      {/* Settings Button */}
      <button className="w-8 h-9 flex items-center justify-center btn-hover rounded-lg">
        <svg 
          className="w-5 h-5 text-white" 
          viewBox="0 0 20 20" 
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
      </button>
      
      {/* Device Connection Status */}
      <div className="flex items-center gap-2">
        <div 
          className={`h-9 px-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
            isConnected 
              ? 'bg-green-500/20 border border-green-500/30' 
              : 'bg-red-500/20 border border-red-500/30'
          }`}
        >
          <div 
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
              isConnected ? 'bg-green-500' : 'bg-gray-400'
            }`}
          >
            <div className="w-3 h-6 relative overflow-hidden">
              <svg 
                viewBox="0 0 12 24" 
                fill="white" 
                className="w-full h-full"
              >
                <rect x="4" y="2" width="4" height="20" rx="2" />
                <circle cx="6" cy="4" r="1" />
                <rect x="5" y="8" width="2" height="8" />
              </svg>
            </div>
          </div>
          
          {isConnected && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-xs font-medium">MLM DS</span>
            </div>
          )}
        </div>
        
        {/* Connection Toggle (for demo) */}
        <button 
          onClick={() => setIsConnected(!isConnected)}
          className="text-white/60 hover:text-white text-xs transition-colors duration-200"
        >
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </div>
  )
}