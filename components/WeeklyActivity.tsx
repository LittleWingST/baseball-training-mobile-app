'use client'

import React, { useState } from 'react'
import { WeeklyData } from './MobileBaseballApp'

interface WeeklyActivityProps {
  data: WeeklyData[]
}

export const WeeklyActivity: React.FC<WeeklyActivityProps> = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const maxValue = Math.max(...data.map(d => d.value))
  const totalSwings = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <section className="px-5 pt-5 flex flex-col gap-3">
      <h2 className="text-neutral-900 text-base font-medium font-barlow">Weekly Activity</h2>
      
      <div className="px-4 py-4 bg-white shadow-card flex flex-col gap-6 rounded-xl">
        {/* Header with Daily Goal */}
        <div className="flex justify-between items-start">
          <div className="flex-1 flex flex-col gap-3">
            <span className="text-gray-500 text-sm font-semibold font-barlow">Daily Swing Goal</span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-900 text-2xl font-bold uppercase font-roboto">120</span>
                <span className="text-gray-400 text-lg font-bold uppercase font-roboto">/ 150</span>
              </div>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-wide font-barlow btn-hover px-3 py-1 rounded-lg">
            View All
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Bar Chart */}
        <div className="flex justify-between items-end gap-2 h-24">
          {data.map((day, index) => {
            const height = Math.max(8, (day.value / maxValue) * 80)
            const isSelected = selectedDay === day.shortDay
            
            return (
              <button
                key={index}
                onClick={() => setSelectedDay(isSelected ? null : day.shortDay)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 hover:transform hover:scale-105 ${
                  isSelected ? 'scale-105' : ''
                }`}
              >
                <div className="relative">
                  <div 
                    className={`w-4 bg-gradient-to-t transition-all duration-500 chart-bar ${
                      isSelected 
                        ? 'from-blue-500 to-blue-400 shadow-lg' 
                        : 'from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600'
                    }`}
                    style={{ 
                      height: `${height}px`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                  
                  {/* Value tooltip */}
                  {isSelected && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg">
                      {day.value}
                    </div>
                  )}
                </div>
                
                <div className="w-1 h-1 bg-white rounded-full" />
                <span className={`text-xs font-semibold uppercase text-center font-barlow transition-colors duration-200 ${
                  isSelected ? 'text-blue-600' : 'text-stone-900'
                }`}>
                  {day.value}
                </span>
                <span className={`text-xs font-semibold uppercase text-center font-barlow transition-colors duration-200 ${
                  isSelected ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {day.shortDay}
                </span>
              </button>
            )
          })}
        </div>
        
        {/* Activity Summary */}
        <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 text-sm font-medium">
              Total Week: <span className="text-gray-900 font-semibold">{totalSwings.toLocaleString()}</span>
            </div>
            <div className="text-gray-600 text-sm font-medium">
              Avg/Day: <span className="text-gray-900 font-semibold">{Math.round(totalSwings / 7)}</span>
            </div>
          </div>
          
          {/* Training vs Gaming Distribution */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 h-2 rounded-full overflow-hidden">
              <div className="flex-1 bg-indigo-400 h-full rounded-l-full" style={{ flex: '0.68' }} />
              <div className="flex-1 bg-amber-300 h-full rounded-r-full" style={{ flex: '0.32' }} />
            </div>
            
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-400 rounded-sm" />
                <span className="text-gray-500 text-sm font-semibold uppercase tracking-wide font-barlow">
                  68% Training
                </span>
              </div>
              
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-300 rounded-sm" />
                <span className="text-gray-500 text-sm font-semibold uppercase tracking-wide font-barlow">
                  32% Gaming
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}