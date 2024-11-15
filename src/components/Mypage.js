import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Mypage = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container maxWidth='lg' sx={{ height: '1024px', position: 'relative' }}>
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: 296,
            left: '50%',
            transform: 'translateX(-50%)',
            p: 3,
            width: 272,
          }}
        >
          <Grid container spacing={2}>
            {['Email', 'Nickname', 'Password'].map((label) => (
              <Grid item xs={12} key={label}>
                <Typography variant='body1'>{label}</Typography>
                <TextField fullWidth variant='outlined' defaultValue='Value' />
                <Button fullWidth variant='contained' color='primary'>
                  Duplicate Check
                </Button>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                sx={{ mb: 1 }}
              >
                Register
              </Button>

              <Button variant='contained' color='primary' fullWidth>
                Delete Account
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <AppBar position='static' color='default' sx={{ boxShadow: 1 }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='logo'>
              <img
                src='https://c.animaapp.com/MO0zgR1z/img/figma.svg'
                alt='Figma'
                style={{ width: 40 }}
              />
            </IconButton>
            <Box
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
            >
              {[
                'Theme',
                'Team',
                'Tool',
                'UR&WBS',
                'Backend',
                'Frontend',
                'Result',
              ].map((text) => (
                <Button key={text} sx={{ mx: 1 }}>
                  {text}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant='outlined'>Sign in</Button>
              <Button variant='contained' color='primary'>
                Register
              </Button>
              <Button variant='outlined'>Modify</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Mypage;
