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
  boxShadow: '0px 4px 4px #00000040',
  borderRadius: theme.shape.borderRadius,
  width: '100px',
  height: '50px',
  fontFamily: 'Inter-Regular, Helvetica',
  fontSize: '16px',
  textAlign: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  boxShadow: '0px 4px 4px #00000040',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const Frontpage = () => {
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
      <Grid container spacing={2} justifyContent='center' sx={{ mt: 4 }}>
        <Grid item xs={6}>
          <StyledPaper>
            <Typography variant='h3' align='center' gutterBottom>
              WireFrame
            </Typography>
            <Box
              sx={{
                width: '500px',
                height: '600px',
                backgroundColor: '#d9d9d9',
                borderRadius: 1,
                boxShadow: '0px 4px 4px #00000040',
                mx: 'auto',
              }}
            />
            <Box display='flex' justifyContent='center' gap={2} mt={2}>
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
              sx={{
                width: '526px',
                height: '104px',
                backgroundColor: '#fffbfb',
                borderRadius: 1,
                boxShadow: '0px 4px 4px #00000040',
                mx: 'auto',
                mt: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h5'>댓글 입력창</Typography>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Frontpage;
