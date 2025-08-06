import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MLM DS - Baseball Training App',
  description: 'Professional baseball training and analytics mobile application',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#6366f1',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MLM DS" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 antialiased">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="mobile-app">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}