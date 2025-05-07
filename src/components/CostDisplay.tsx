
import React from 'react';
import { formatCurrency } from '@/utils/costCalculator';
import { Card, CardContent } from "@/components/ui/card";

interface CostDisplayProps {
  cost: number;
  time: number; // seconds
}

const CostDisplay: React.FC<CostDisplayProps> = ({ cost, time }) => {
  // Format the time as HH:MM:SS
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');
  };
  
  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-muted-foreground">Current Meeting Cost</h3>
          <div className="text-5xl font-bold text-primary tracking-tight">
            {formatCurrency(cost)}
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Meeting Time: <span className="font-mono">{formatTime(time)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostDisplay;
