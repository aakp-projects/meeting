
import MeetingTracker from '@/components/MeetingTracker';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md">
        <MeetingTracker />
      </div>
      <footer className="mt-16 text-sm text-muted-foreground text-center">
        <p>Meeting costs are calculated at the rate of 1000 NOK per participant per hour</p>
      </footer>
    </div>
  );
};

export default Index;
