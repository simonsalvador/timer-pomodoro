import React from 'react';
import Timer from './Components/Timer';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
/**
 * The main component of the Pomodoro Timer application.
 * 
 * This component renders the main layout of the application, including the timer, description of the Pomodoro Technique, and social media buttons.
 */
const App: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #FFCF81, #FDFFAB)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column', // Added to ensure proper alignment of the footer
        padding: '2rem',
      }}
    >
      {/* Main content container */}
      <Container maxWidth="md" sx={{ textAlign: 'center', flex: '1' }}>
        {/* Title */}
        <Typography variant="h2" mb={4} sx={{ color: '#af4c4c', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', letterSpacing: 2 }}>
          Pomodoro<br />Timer
        </Typography>
        {/* Timer component */}
        <Box sx={{ borderRadius: '1rem', background: '#FFB996', padding: '2rem' }}>
          <Timer />
        </Box>
        {/* Description of the Pomodoro Technique */}
        <Box mt={8} mb={4}>
          <Typography variant="h4" mb={4}>What is Pomodoro Technique?</Typography>
          <Typography variant="body1" mb={4}>
            The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. 
            It uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
          </Typography>
          <Typography variant="body1" mb={4}>
            The method is based on the idea that frequent breaks can improve mental agility and productivity. 
            It can be particularly helpful for individuals who struggle with distractions or procrastination.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
            The technique is named after the Italian word for "tomato" ("pomodoro"), 
            after the tomato-shaped kitchen timer that Cirillo used as a university student.
          </Typography>
          {/* Social media buttons */}
          <Grid container justifyContent="center">
            <Grid item>
              <Button href="https://www.linkedin.com//in/simonsalvador/" target="_blank" rel="noopener" startIcon={<LinkedInIcon />}>
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button href="https://github.com/simonsalvador" target="_blank" rel="noopener" startIcon={<GitHubIcon />}>
                GitHub
              </Button>
            </Grid>
            <Grid item>
              <Button href="mailto:salvadorsimon14@gmail.com" startIcon={<EmailIcon />}>
                Email
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* Footer */}
      <Box sx={{ background: '#fdffab', padding: '1rem', textAlign: 'center' }}>
        <Typography variant="body2">
          Developed by Simon Salvador 🚀
        </Typography>
      </Box>
    </Box>
  );
};

export default App;




