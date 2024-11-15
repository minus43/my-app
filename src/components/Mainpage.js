import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

export const Mainpge = () => {
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
        <Typography
          variant='h1'
          align='center'
          sx={{
            position: 'absolute',
            top: '370px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '300px',
            fontFamily: "'Inter', Helvetica",
            fontWeight: 'bold',
            color: 'text.primary',
            fontSize: '40px',
          }}
        >
          GIRA
          <br />
          ...
          <br />
          쉬운 웹 프로젝트 <br />
          문서관리 시스템
        </Typography>

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

export default Mainpge;
