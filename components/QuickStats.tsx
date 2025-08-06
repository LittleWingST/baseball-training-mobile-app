'use client'

import React from 'react'
import { QuickStat } from './MobileBaseballApp'

interface QuickStatsProps {
  stats: QuickStat[]
}

export const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <section className="px-5 pt-5 flex flex-col gap-3">
      <h2 className="text-neutral-900 text-base font-medium font-barlow">Quick Stats</h2>
      
      {/* Rotated Stats Container */}
      <div className="h-80 flex justify-center items-center overflow-hidden">
        <div className="rotate-90 flex gap-1">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="w-16 px-2 py-3 -rotate-90 bg-white shadow-card flex flex-col gap-2 overflow-hidden transition-all duration-300 hover:shadow-lg rotate-stats"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <span className="text-neutral-900 text-xs font-semibold uppercase tracking-wide text-center font-barlow leading-tight">
                {stat.label}
              </span>
              
              <div className="flex items-end justify-center gap-1">
                <span className="text-neutral-900 text-4xl font-bold uppercase font-roboto leading-none">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide font-barlow pb-1">
                  {stat.unit}
                </span>
              </div>
              
              {/* Progress indicator based on value */}
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${Math.min(100, (stat.value / (stat.unit === '%' ? 100 : 100)) * 100)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Performance Indicators */}
      <div className="flex justify-center gap-4 mt-2">
        {stats.map((stat, index) => {
          const percentage = stat.unit === '%' ? stat.value : Math.min(100, (stat.value / 100) * 100)
          const getColor = (value: number) => {
            if (value >= 80) return 'text-green-500'
            if (value >= 60) return 'text-yellow-500'
            return 'text-red-500'
          }
          
          return (
            <div key={index} className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${getColor(percentage).replace('text-', 'bg-')}`} />
              <span className={`text-xs font-medium ${getColor(percentage)}`}>
                {stat.label.split(' ')[0]}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}