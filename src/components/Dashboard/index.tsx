import React from 'react';
import { MainHeader } from './MainHeader';
import { StatsCards } from './StatsCards';
import { BookCarousel } from './BookCarousel';
import BookCalendar from './Calendar';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-[94.5vw] p-0">
      <MainHeader />
      <StatsCards />
      <div className="flex flex-row h-full w-full p-0">
        <div className="w-1/2 p-4">
          <BookCarousel />
        </div>
        <div className="w-1/2 p-4 flex items-center justify-center">
          <BookCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
