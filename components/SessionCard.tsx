'use client'

import React from 'react'
import { Session } from './MobileBaseballApp'

interface SessionCardProps {
  session: Session
}

export const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const getSessionTypeIcon = (title: string) => {
    if (title.toLowerCase().includes('practice')) return '🏋️'
    if (title.toLowerCase().includes('velocity')) return '⚡'
    if (title.toLowerCase().includes('scrimmage')) return '⚾'
    return '🎯'
  }

  const getSessionTypeColor = (title: string) => {
    if (title.toLowerCase().includes('practice')) return 'bg-blue-100 text-blue-600'
    if (title.toLowerCase().includes('velocity')) return 'bg-yellow-100 text-yellow-600'
    if (title.toLowerCase().includes('scrimmage')) return 'bg-green-100 text-green-600'
    return 'bg-gray-100 text-gray-600'
  }

  return (
    <div className="w-72 p-4 bg-white shadow-card flex flex-col gap-4 overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-102 btn-hover">
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${getSessionTypeColor(session.title)}`}>
            {getSessionTypeIcon(session.title)}
          </div>
          
          <div className="flex-1">
            <h3 className="text-neutral-900 text-base font-semibold font-barlow leading-tight">
              {session.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600 text-xs font-medium">Completed</span>
            </div>
          </div>
        </div>
        
        {/* Swing Count */}
        <div className="text-right">
          <div className="flex items-baseline gap-1">
            <span className="text-neutral-900 text-3xl font-bold uppercase font-roboto leading-none">
              {session.swings}
            </span>
          </div>
          <span className="text-gray-500 text-xs font-medium uppercase font-barlow">
            swings
          </span>
        </div>
      </div>
      
      {/* Participants */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-500 text-xs font-medium uppercase tracking-wide font-barlow">
          Participants ({session.participants.length})
        </span>
        
        <div className="flex gap-2 overflow-x-auto">
          {session.participants.map((participant, index) => {
            const initials = participant.split(' ').map(n => n[0]).join('')
            const colors = [
              'bg-blue-500',
              'bg-green-500', 
              'bg-purple-500',
              'bg-pink-500',
              'bg-indigo-500'
            ]
            
            return (
              <div key={index} className="flex flex-col items-center gap-1 min-w-fit">
                <div className={`w-10 h-10 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white text-sm font-semibold shadow-sm`}>
                  {initials}
                </div>
                <span className="text-gray-600 text-xs font-medium text-center font-barlow whitespace-nowrap">
                  {participant}
                </span>
              </div>
            )
          })}
          
          {/* Add more participants indicator */}
          {session.participants.length > 3 && (
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-semibold">
                +{session.participants.length - 3}
              </div>
              <span className="text-gray-400 text-xs font-medium">more</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Session Meta */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1.5 1.5 0 00-1.5 1.5v9A1.5 1.5 0 004 14h8a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012 2H4zm0 1h8a.5.5 0 01.5.5v1H3.5v-1A.5.5 0 014 3zm0 3h8v7.5a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 text-xs font-medium font-barlow">
              {session.date}
            </span>
          </div>
          
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zM8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 text-xs font-medium font-barlow">
              {session.duration}
            </span>
          </div>
        </div>
        
        {/* View Details Button */}
        <button className="text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors duration-200">
          Details →
        </button>
      </div>
    </div>
  )
}