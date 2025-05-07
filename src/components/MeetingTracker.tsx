
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ParticipantInput from './ParticipantInput';
import CostDisplay from './CostDisplay';
import { calculateCost } from '@/utils/costCalculator';
import { Clock, Users } from "lucide-react";

const MeetingTracker: React.FC = () => {
  const [participants, setParticipants] = useState<number>(5);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  
  // Update the cost and elapsed time while the tracker is running
  useEffect(() => {
    let timer: number | null = null;
    
    if (isRunning) {
      timer = window.setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
        setCost(prevCost => prevCost + calculateCost(participants, 1));

      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, participants]);
  
  const handleStart = () => {
    if (participants <= 0) return;
    setIsRunning(true);
  };
  
  const handlePause = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setCost(0);
  };
  
  return (
    <div className="space-y-8 w-full max-w-md">
      <div className="flex items-center space-x-2">
        <Users className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Meeting Cost Tracker</h2>
      </div>
      
      <ParticipantInput 
        participants={participants} 
        setParticipants={setParticipants} 
        isRunning={isRunning}
      />
      
      <CostDisplay cost={cost} time={elapsedTime} />
      
      <div className="flex items-center justify-center space-x-4">
        {!isRunning ? (
          <Button 
            size="lg" 
            onClick={handleStart}
            disabled={participants <= 0}
            className="px-8"
          >
            <Clock className="mr-2 h-4 w-4" />
            Start Meeting
          </Button>
        ) : (
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handlePause}
            className="px-8"
          >
            Pause
          </Button>
        )}
        <Button 
          size="lg" 
          variant="ghost" 
          onClick={handleReset}
          disabled={elapsedTime === 0}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default MeetingTracker;
