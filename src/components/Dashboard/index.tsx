import { StatsCards } from './StatsCards';
import { BookCarousel } from './BookCarousel';
import BookStats from './BookStats';

const Dashboard = () => {
  return (
    <div className={`flex flex-col h-full w-[calc(100vw-80px)] p-0`}>
      <StatsCards />
      <div className="flex flex-row h-full w-full p-0">
        <div className="w-1/2 p-4">
          <BookCarousel />
        </div>
        <div className="w-1/2 p-4 flex items-center justify-center">
          <BookStats />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
