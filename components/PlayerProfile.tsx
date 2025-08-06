'use client'

import React from 'react'
import { PlayerStats } from './MobileBaseballApp'

interface PlayerProfileProps {
  player: PlayerStats
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({ player }) => {
  return (
    <div className="flex flex-col items-center gap-5 pb-6">
      <div className="w-40 flex flex-col items-center gap-3">
        {/* Profile Image with animated border */}
        <div className="relative profile-border">
          <img 
            className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 hover:scale-105" 
            src={player.avatar} 
            alt={player.name}
            loading="lazy"
          />
          
          {/* Online status indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold uppercase tracking-wide font-roboto-condensed">
            {player.name}
          </h1>
          <p className="text-white/90 text-sm font-semibold uppercase tracking-wide font-barlow mt-1">
            {player.position}
          </p>
        </div>
      </div>
      
      {/* Statistics Grid */}
      <div className="grid grid-cols-3 gap-5 w-full max-w-sm">
        {/* Hit Counter */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-white/80 text-xs font-semibold uppercase tracking-wide font-barlow">
            Hit Counter
          </span>
          <div className="flex flex-col items-center">
            <span className="text-white text-3xl font-bold uppercase font-roboto leading-tight">
              {player.hitCounter.toLocaleString()}
            </span>
            <span className="text-white/70 text-xs font-medium font-barlow">
              swings
            </span>
          </div>
        </div>
        
        {/* Swing Streak */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-white/80 text-xs font-semibold uppercase tracking-wide font-barlow">
            Swing Streak
          </span>
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-white text-3xl font-bold uppercase font-roboto leading-tight">
                {player.swingStreak}
              </span>
              <span className="text-white/60 text-lg font-medium">🔥</span>
            </div>
            <span className="text-white/70 text-xs font-medium font-barlow">
              days
            </span>
          </div>
        </div>
        
        {/* Bat/Throw */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-white/80 text-xs font-semibold uppercase tracking-wide font-barlow">
            Bat/Throw
          </span>
          <div className="flex flex-col items-center">
            <span className="text-white text-3xl font-bold uppercase font-roboto leading-tight">
              {player.batThrow}
            </span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="w-20 h-0.5 bg-white/40 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-3/4 transition-all duration-1000 ease-out" />
        </div>
        <span className="text-white/60 text-xs font-medium">
          Today's Progress: 75%
        </span>
      </div>
    </div>
  )
}