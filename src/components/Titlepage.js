import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows,
  padding: theme.spacing(2),
  position: 'relative',
}));

const CommentBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#fffbfb',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows,
  padding: theme.spacing(2),
  textAlign: 'center',
}));


const Titlepage = () => {
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
        <Grid container spacing={2} justifyContent='center' sx={{ mt: 2 }}>
            <Grid item xs={6}>
            <StyledPaper>
                <Typography variant='h4' align='center' gutterBottom>
                Theme
                </Typography>
                <Typography variant='body1' align='left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                tincidunt eget nullam non. Quis hendrerit dolor magna eget est
                lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet
                massa. Commodo odio aenean sed adipiscing diam donec adipiscing
                tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor
                augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus
                arcu felis. Egestas integer eget aliquet nibh praesent. In hac
                habitasse platea dictumst quisque sagittis purus. Pulvinar
                elementum integer enim neque volutpat ac. Senectus et netus et
                malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada
                proin. Neque convallis a cras semper auctor. Libero id faucibus
                nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus
                vestibulum sed arcu non odio euismod lacinia. In tellus integer
                feugiat scelerisque. Feugiat in fermentum posuere urna nec
                tincidunt praesent. Porttitor rhoncus dolor purus non enim
                praesent elementum facilisis.
                </Typography>
                <Box display='flex' justifyContent='space-between' mt={2}>
                <Button variant='contained'>수정</Button>
                <Button variant='contained'>저장</Button>
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
                <Box width='90%' height={91} bgcolor='#d9d9d9' borderRadius={1} />
                <Box width='90%' height={91} bgcolor='#d9d9d9' borderRadius={1} />
                <Box width='90%' height={91} bgcolor='#d9d9d9' borderRadius={1} />
                <Box width='90%' height={91} bgcolor='#d9d9d9' borderRadius={1} />
                </Box>
                <CommentBox mt={4}>
                <Typography variant='h5'>댓글 입력창</Typography>
                </CommentBox>
            </StyledPaper>
            </Grid>
        </Grid>
    </Container>
  );
};

export default Titlepage;
