// Buttons.tsx
import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

interface ButtonsProps {
  onStart: () => void;
  onStop: () => void;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * Buttons component renders buttons for controlling the timer and setting time intervals.
 * @param {Function} onStart - Function to start the timer.
 * @param {Function} onStop - Function to stop the timer.
 * @param {Function} setTime - Function to set the time for the timer.
 * @returns {ReactNode} The Buttons component.
 */
const Buttons: React.FC<ButtonsProps> = ({ onStart, onStop, setTime }) => {
  /**
   * Handle button click event to set the time and start the timer.
   * @param {number} newTime - The new time to set for the timer.
   */
  const handleButtonClick = (newTime: number) => {
    setTime(newTime);
    onStart();
  };

  return (
    <Stack direction="column" spacing={2} sx={{ width: '100%', '@media (min-width:600px)': { direction: 'row' } }}>
      {/* Button for setting work time */}
      <Button 
        onClick={() => handleButtonClick(1500)} 
        sx={{ width: '100%', bgcolor: '#f3a0a0', color: '#4e3e3e', fontFamily: 'Poppins', fontWeight: 'bold' }}
      >
        <Typography variant="button">Work Time (25 mins)</Typography>
      </Button>
      {/* Button for setting break time */}
      <Button 
        onClick={() => handleButtonClick(300)} 
        sx={{ width: '100%', bgcolor: '#fadcb4', color: '#4e3e3e', fontFamily: 'Poppins', fontWeight: 'bold' }}
      >
        <Typography variant="button">Break Time (5 mins)</Typography>
      </Button>
      {/* Button for setting long break time */}
      <Button 
        onClick={() => handleButtonClick(900)} 
        sx={{ width: '100%', bgcolor: '#c4e0c4', color: '#4e3e3e', fontFamily: 'Poppins', fontWeight: 'bold' }}
      >
        <Typography variant="button">Long Break (15 mins)</Typography>
      </Button>
    </Stack>
  );
};

export default Buttons;











