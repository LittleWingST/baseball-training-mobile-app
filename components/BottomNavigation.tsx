'use client'

import React from 'react'

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab, 
  onTabChange 
}) => {
  const tabs: TabItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    },
    {
      id: 'practice',
      label: 'Practice',
      badge: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    },
    {
      id: 'games',
      label: 'Games',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ]

  return (
    <nav className="bg-white border-t border-neutral-100 backdrop-blur-sm">
      <div className="flex justify-center items-center gap-8 px-6 py-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center gap-1 transition-all duration-200 ${
                isActive 
                  ? 'text-blue-600 transform scale-105' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-6 h-6 flex items-center justify-center relative transition-all duration-200 ${
                isActive ? 'scale-110' : ''
              }`}>
                {tab.icon}
                
                {/* Badge */}
                {tab.badge && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {tab.badge}
                  </div>
                )}
              </div>
              
              {/* Label */}
              <span className={`text-xs font-medium transition-all duration-200 ${
                isActive ? 'font-semibold' : ''
              }`}>
                {tab.label}
              </span>
              
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          )
        })}
      </div>
      
      {/* Home Indicator */}
      <div className="p-2.5 flex justify-center">
        <div className="w-36 h-1 bg-stone-900 rounded-xl" />
      </div>
    </nav>
  )
}