import React, { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import Buttons from './Buttons';
import { Container, Box, Button, ButtonGroup, Grid } from '@mui/material';

/**
 * Timer component displays a countdown timer.
 * @returns {ReactNode} The Timer component.
 */
const Timer: React.FC = () => {
  /**
   * State variable to store the time remaining in seconds.
   */
  const [time, setTime] = useState<number>(1500); // 25 minutes in seconds

  /**
   * State variable to track whether the timer is active or not.
   */
  const [isActive, setIsActive] = useState<boolean>(false);

  /**
   * Reference to the audio element used to play a sound when the timer finishes.
   */
  const audioRef = React.createRef<HTMLAudioElement>(); 

  /**
   * useEffect hook to handle the timer logic.
   */
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleTimer = () => {
      if (isActive) {
        intervalId = setInterval(() => {
          setTime(prevTime => {
            if (prevTime === 0) {
              setIsActive(false);
              clearInterval(intervalId);
              if (audioRef.current) {
                audioRef.current.play(); 
              }
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
    };

    handleTimer();

    return () => clearInterval(intervalId);
  }, [audioRef, isActive]);

  /**
   * Function to handle the click event for starting the timer.
   */
  const handleStartClick = () => {
    setIsActive(true);
  };

  /**
   * Function to handle the click event for stopping the timer.
   */
  const handleStopClick = () => {
    setIsActive(false);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      {/* Timer buttons */}
      <Box mt={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <ButtonGroup variant="contained" aria-label="timer buttons">
              <Button onClick={handleStartClick} sx={{ bgcolor: '#4caf50', color: 'white' }}>Start</Button>
              <Button onClick={handleStopClick} sx={{ bgcolor: '#f44336', color: 'white' }}>Stop</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
      {/* Timer display */}
      <Box mt={4}>
        <TimerDisplay time={time} isActive={isActive} />
      </Box>
      {/* Timer control buttons */}
      <Box mt={4}>
        <Buttons onStart={handleStartClick} onStop={handleStopClick} setTime={setTime} />
      </Box>
      {/* Audio element for playing sound */}
      <audio ref={audioRef} src="sounds/soundTimer.wav" preload="auto" />
    </Container>
  );
};

export default Timer;











