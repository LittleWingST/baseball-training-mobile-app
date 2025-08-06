'use client'

import React, { useState, useEffect } from 'react'
import { StatusBar } from './StatusBar'
import { DeviceHeader } from './DeviceHeader'
import { PlayerProfile } from './PlayerProfile'
import { QuickStats } from './QuickStats'
import { WeeklyActivity } from './WeeklyActivity'
import { DrillCard } from './DrillCard'
import { SessionCard } from './SessionCard'
import { BottomNavigation } from './BottomNavigation'
import { LoadingSpinner } from './LoadingSpinner'

// Types for component props
export interface PlayerStats {
  name: string
  position: string
  avatar: string
  hitCounter: number
  swingStreak: number
  batThrow: string
}

export interface QuickStat {
  label: string
  value: number
  unit: string
}

export interface WeeklyData {
  day: string
  value: number
  shortDay: string
}

export interface Drill {
  id: string
  title: string
  category: string
  difficulty: string
  duration: string
  image: string
}

export interface Session {
  id: string
  title: string
  swings: number
  participants: string[]
  date: string
  duration: string
}

interface AppProps {
  player?: PlayerStats
  quickStats?: QuickStat[]
  weeklyActivity?: WeeklyData[]
  drills?: Drill[]
  sessions?: Session[]
}

// Main Mobile Baseball App Component
const MobileBaseballApp: React.FC<AppProps> = ({
  player = {
    name: "BRIAN PAGE",
    position: "SP / OF",
    avatar: "https://placehold.co/144x144",
    hitCounter: 1250,
    swingStreak: 7,
    batThrow: "L/L"
  },
  quickStats = [
    { label: "Consistency", value: 84, unit: "%" },
    { label: "Avg. Bat Speed", value: 72, unit: "MPH" },
    { label: "Avg. Exit Velo", value: 87, unit: "mph" }
  ],
  weeklyActivity = [
    { day: "Sunday", value: 12, shortDay: "Sun" },
    { day: "Monday", value: 34, shortDay: "Mon" },
    { day: "Tuesday", value: 5, shortDay: "Tue" },
    { day: "Wednesday", value: 125, shortDay: "Wed" },
    { day: "Thursday", value: 675, shortDay: "Thu" },
    { day: "Friday", value: 14, shortDay: "Fri" },
    { day: "Saturday", value: 142, shortDay: "Sat" }
  ],
  drills = [
    {
      id: "1",
      title: "Launch Angle",
      category: "Game Situations",
      difficulty: "Beginner",
      duration: "15 min",
      image: "https://placehold.co/120x120"
    },
    {
      id: "2",
      title: "Game Sim Challenge",
      category: "Game Situations",
      difficulty: "Beginner",
      duration: "15 min",
      image: "https://placehold.co/120x120"
    },
    {
      id: "3",
      title: "Power Hitting",
      category: "Strength Training",
      difficulty: "Advanced",
      duration: "20 min",
      image: "https://placehold.co/120x120"
    }
  ],
  sessions = [
    {
      id: "1",
      title: "Free Practice",
      swings: 124,
      participants: ["Alex T.", "Jamie R.", "Taylor S."],
      date: "June 21 2025",
      duration: "12 min 35 sec"
    },
    {
      id: "2",
      title: "Velocity Ladder",
      swings: 43,
      participants: ["Alex T."],
      date: "June 21 2025",
      duration: "12 min 35 sec"
    },
    {
      id: "3",
      title: "Team Scrimmage",
      swings: 89,
      participants: ["Alex T.", "Jamie R."],
      date: "June 20 2025",
      duration: "25 min 12 sec"
    }
  ]
}) => {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="w-96 min-h-screen bg-neutral-100 flex flex-col overflow-hidden relative">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-indigo-500/20 to-indigo-500/10 flex flex-col gap-7">
        <StatusBar />
        <DeviceHeader />
        <PlayerProfile player={player} />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-2 overflow-y-auto">
        <QuickStats stats={quickStats} />
        <WeeklyActivity data={weeklyActivity} />
        
        {/* Recommended Practice */}
        <section className="px-5 pt-5 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-neutral-900 text-base font-medium">Recommended Practice</h2>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {drills.map((drill) => (
              <DrillCard key={drill.id} drill={drill} />
            ))}
          </div>
        </section>

        {/* Recent Sessions */}
        <section className="px-5 pt-5 pb-5 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-neutral-900 text-base font-medium">Recent Sessions</h2>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default MobileBaseballApp