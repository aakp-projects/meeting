
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ParticipantInputProps {
  participants: number;
  setParticipants: (value: number) => void;
  isRunning: boolean;
}

const ParticipantInput: React.FC<ParticipantInputProps> = ({ 
  participants, 
  setParticipants,
  isRunning
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setParticipants(value);
    }
  };

  return (
    <div className="space-y-2 w-full max-w-xs">
      <Label htmlFor="participants">Number of Participants</Label>
      <Input
        id="participants"
        type="number"
        min="1"
        value={participants}
        onChange={handleChange}
        className="text-lg"
      />
      <p className="text-xs text-muted-foreground">
        Each participant costs 1000 NOK per hour
      </p>
    </div>
  );
};

export default ParticipantInput;
