import { Send,  } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Teampage = () => {
  return (
    <Container maxWidth='lg' sx={{ height: '1024px', position: 'relative' }}>
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

      <Grid 
        sx={{
          width: 1200,
          height: 800,
          position: 'absolute',
          top: 100,
          left: 0,
          bgcolor: '#f2f2f2',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Avatar
          src='/3d-avatar-22.png'
          sx={{
            width: 264,
            height: 264,
            position: 'absolute',
            top: 249,
            left: 186,
          }}
        />
        <Typography
          variant='h2'
          component='div'
          sx={{
            width: 500,
            height: 100,
            position: 'absolute',
            top: 125,
            left: 68,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Team
        </Typography>
        <Box
          sx={{
            width: 556,
            height: 50,
            position: 'absolute',
            top: 569,
            left: 71,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            variant='outlined'
            fullWidth
            placeholder='이메일 입력칸'
            sx={{
              bgcolor: '#d9d9d9',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                height: 50,
                fontSize: '1.5rem',
              },
            }}
          />
          <Button
            variant='contained'
            sx={{
              width: 56,
              height: 50,
              minWidth: 0,
              ml: 1,
            }}
          >
            <Send />
          </Button>
        </Box>
        <Box
          sx={{
            width: 400,
            height: 250,
            position: 'absolute',
            top: 263,
            left: 711,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {['팀원1', '팀원1', '팀원1'].map((text, index) => (
            <TextField
              key={index}
              variant='outlined'
              fullWidth
              placeholder={text}
              sx={{
                bgcolor: '#d9d9d9',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  height: 50,
                  fontSize: '1.5rem',
                },
              }}
            />
          ))}
        </Box>
      </Grid>
    </Container>
  );
};

export default Teampage;
