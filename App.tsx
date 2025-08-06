import React from 'react';
import MobileBaseballApp from './MobileBaseballApp';

// Example usage component
const App: React.FC = () => {
  // Custom data can be passed as props
  const customPlayer = {
    name: "SARAH JOHNSON",
    position: "C / 1B",
    avatar: "https://placehold.co/144x144",
    hitCounter: 892,
    swingStreak: 12,
    batThrow: "R/R"
  };

  const customStats = [
    { label: "Consistency", value: 91, unit: "%" },
    { label: "Avg. Bat Speed", value: 68, unit: "MPH" },
    { label: "Avg. Exit Velo", value: 85, unit: "mph" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Default usage */}
      <MobileBaseballApp />
      
      {/* Or with custom props */}
      {/* 
      <MobileBaseballApp 
        player={customPlayer}
        quickStats={customStats}
      />
      */}
    </div>
  );
};

export default App;