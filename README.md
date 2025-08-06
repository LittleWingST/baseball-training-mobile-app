# Baseball Training Mobile App

A comprehensive mobile application for baseball training with practice drills, performance tracking, and ladder-based skill progression.

## Features

### 🏠 **Home Dashboard**
- **Player Profile**: Display player stats, ranking, and swing metrics
- **Quick Stats**: Real-time performance metrics (Exit Velocity, Swing Speed, Contact %, Launch Angle)
- **Weekly Activity**: Progress tracking with visual charts
- **Recommended Practice**: Horizontal scrolling drill cards
- **Recent Sessions**: Session history with participant details

### 🎯 **Practice Page**
- **Drills Tab**: Individual practice exercises with difficulty levels
- **Ladders Tab**: Step-by-step skill progression programs
  - Hitting Fundamentals (5 steps)
  - Power Development (4 steps)
  - Plate Discipline (6 steps)
  - Game Situations (5 steps)

### 📱 **Mobile-First Design**
- **iPhone 13-14 Mockup**: Realistic device frame
- **iOS-style Navigation**: Sticky bottom nav with blur effects
- **Horizontal Scrolling**: Smooth card-based interactions
- **Responsive Layout**: Optimized for mobile viewing

## Technology Stack

- **Frontend**: React with Hooks (useState, useEffect)
- **Styling**: Tailwind CSS with custom configurations
- **Icons**: PNG icon assets
- **Fonts**: Inter (as Acumin substitute), Barlow
- **Build**: Single HTML file with CDN dependencies

## Project Structure

```
├── index.html              # Main application file
├── public/
│   ├── Profile.jpg         # Player profile image
│   └── icons/              # PNG icon assets
│       ├── home.png
│       ├── practice.png
│       ├── game.png
│       ├── performance.png
│       ├── settings.png
│       ├── device connection.png
│       ├── Clock Icon.png
│       └── Calendar Icon.png
└── README.md               # Project documentation
```

## Getting Started

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Or serve with a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Browser Compatibility
- Chrome (recommended)
- Safari
- Firefox
- Edge

## Features in Detail

### Quick Stats
- **Real-time Metrics**: Exit velocity, swing speed, contact percentage, launch angle
- **Performance Indicators**: Color-coded progress bars
- **Navigation**: "View All" button links to Performance tab

### Practice Ladders
Each ladder contains progressive steps with:
- **Step Tracking**: Completed/Current/Locked status
- **Time Estimates**: Individual step and total duration
- **Visual Progress**: Step indicators and progress counters
- **Smart Unlocking**: Next step revealed upon completion

### Navigation
- **Home**: Dashboard overview
- **Practice**: Drills and ladders
- **Games**: Game-related features
- **Performance**: Detailed analytics

## Design System

### Colors
- **Primary Blue**: #2563eb
- **Success Green**: #16a34a
- **Background**: #f5f5f5
- **Text**: #1f2937

### Typography
- **Headers**: Font Acumin (Inter fallback)
- **Body**: Font Barlow
- **Weights**: thin, extralight, light, normal, medium, semibold, bold, extrabold, black

### Components
- **Cards**: Subtle shadows with rounded corners (removed for angular design)
- **Buttons**: Hover effects with smooth transitions
- **Progress Bars**: Animated growth effects
- **Navigation**: iOS-style blur and sticky positioning

## Development Notes

- **Single File Architecture**: All components in one HTML file for easy deployment
- **CDN Dependencies**: React and Tailwind loaded via CDN
- **Icon Management**: PNG assets for consistent rendering
- **Responsive Design**: Mobile-first approach with fixed dimensions
- **Performance**: Optimized for smooth scrolling and interactions

## Future Enhancements

- [ ] Add backend API integration
- [ ] Implement user authentication
- [ ] Add data persistence
- [ ] Create additional drill categories
- [ ] Implement push notifications
- [ ] Add social features and leaderboards

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile devices
5. Submit a pull request

## License

This project is licensed under the MIT License.# baseball-training-mobile-app
