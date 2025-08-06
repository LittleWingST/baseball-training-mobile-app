'use client'

import React from 'react'
import { Drill } from './MobileBaseballApp'

interface DrillCardProps {
  drill: Drill
}

export const DrillCard: React.FC<DrillCardProps> = ({ drill }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'text-green-600 bg-green-100'
      case 'intermediate':
        return 'text-yellow-600 bg-yellow-100'
      case 'advanced':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return '⭐'
      case 'intermediate':
        return '⭐⭐'
      case 'advanced':
        return '⭐⭐⭐'
      default:
        return '⭐'
    }
  }

  return (
    <div className="w-72 bg-white shadow-card flex gap-3 overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-102 btn-hover">
      {/* Image Section */}
      <div className="relative w-28 h-32 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
          src={drill.image} 
          alt={drill.title}
          loading="lazy"
        />
        
        {/* Difficulty Badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(drill.difficulty)}`}>
          {getDifficultyIcon(drill.difficulty)}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex-1 p-3 flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wide font-barlow">
                DRILL
              </span>
              <h3 className="text-neutral-900 text-base font-semibold font-barlow leading-tight">
                {drill.title}
              </h3>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-gray-600 text-sm font-medium font-barlow">
              {drill.category}
            </span>
          </div>
        </div>
        
        {/* Meta Information */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${getDifficultyColor(drill.difficulty)}`}>
                <div className="w-2 h-2 bg-current rounded-full" />
              </div>
              <span className="text-gray-600 text-xs font-medium font-barlow">
                {drill.difficulty}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zM8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600 text-xs font-medium font-barlow">
                {drill.duration}
              </span>
            </div>
          </div>
          
          {/* Start Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-colors duration-200">
            Start
          </button>
        </div>
      </div>
    </div>
  )
}