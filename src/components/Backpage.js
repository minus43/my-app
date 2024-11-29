import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#d9d9d9',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 4px #00000040',
  width: '100px',
  height: '50px',
  fontFamily: 'Inter-Regular, Helvetica',
  textAlign: 'center',
  lineHeight: 'normal',
  color: theme.palette,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 4px #00000040',
  padding: theme.spacing(2),
  position: 'relative',
}));

const Backpage = () => {
  return (
    <Container maxWidth='lg'>
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
        container
        spacing={2}
        justifyContent='center'
        style={{ marginTop: '2rem' }}
      >
        <Grid item xs={6}>
          <StyledPaper>
            <Box display='flex' justifyContent='space-between' padding={2}>
              <StyledButton>ERD</StyledButton>
              <StyledButton>API 명세서</StyledButton>
            </Box>
            <Box
              sx={{
                backgroundColor: '#d9d9d9',
                borderRadius: 1,
                height: '600px',
                margin: '0 2rem',
              }}
            />
            <Box
              display='flex'
              justifyContent='space-between'
              padding={2}
              marginTop='auto'
            >
              <StyledButton>수정</StyledButton>
              <StyledButton>저장</StyledButton>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>
            <Typography variant='h4' align='center' gutterBottom>
              댓글
            </Typography>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              gap={2}
            >
              <Box
                component='img'
                src='https://via.placeholder.com/408x91'
                alt='Rectangle'
                width='408px'
                height='91px'
              />
              <Box
                component='img'
                src='https://via.placeholder.com/408x91'
                alt='Rectangle'
                width='408px'
                height='91px'
              />
              <Box
                component='img'
                src='https://via.placeholder.com/408x91'
                alt='Rectangle'
                width='408px'
                height='91px'
              />
              <Box
                component='img'
                src='https://via.placeholder.com/408x91'
                alt='Rectangle'
                width='408px'
                height='91px'
              />
            </Box>
            <Box
              sx={{
                backgroundColor: '#fffbfb',
                borderRadius: 1,
                boxShadow: '0px 4px 4px #00000040',
                padding: 2,
                marginTop: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant='h4'>댓글 입력창</Typography>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Backpage;
