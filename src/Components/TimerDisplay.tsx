// TimerDisplay.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface TimerDisplayProps {
  time: number;
  isActive: boolean;
}
/**
 * TimerDisplay component displays the current time remaining and the status of the timer.
 * @param {number} time - The time remaining in seconds.
 * @param {boolean} isActive - Indicates whether the timer is active or paused.
 * @returns {ReactNode} The TimerDisplay component.
 */
const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, isActive }) => {
  /**
   * Calculate minutes and seconds from the total time remaining.
   */
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Timer display */}
      <Box
        sx={{
          position: 'relative',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#d9edbf',
          border: '2px solid #ca3c3c', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          margin: '0 auto', 
        }}
      >
        {/* Format and display time */}
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </Box>
      {/* Timer status */}
      <Typography variant="body1" sx={{marginTop: '0.5rem', color: isActive ? '#4caf50' : '#f44336'  }}>
        {isActive ? "Timer is active" : "Timer is paused"}
      </Typography>
    </Box>
  );
};

export default TimerDisplay;








