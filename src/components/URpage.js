import { AppBar, Box, Button, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { Container, styled } from '@mui/system';
import React from 'react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows,
  padding: theme.spacing(2),
}));

const URpage = () => {
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
          <StyledPaper
            sx={{
              width: 700,
              height: 800,
              position: 'absolute',
              
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 715,
                left: 552,
                width: 100,
                height: 51,
              }}
            >
              <Button
                variant='contained'
                sx={{
                  width: 100,
                  height: 50,
                  backgroundColor: '#e7e7e7',
                  boxShadow: 2,
                }}
              >
                저장
              </Button>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 715,
                left: 431,
                width: 100,
                height: 51,
              }}
            >
              <Button
                variant='contained'
                sx={{
                  width: 100,
                  height: 50,
                  backgroundColor: '#e7e7e7',
                  boxShadow: 2,
                }}
              >
                수정
              </Button>
            </Box>

            <Typography
              variant='h3'
              component='div'
              sx={{
                position: 'absolute',
                top: 50,
                left: 71,
                width: 525,
                textAlign: 'center',
              }}
            >
              UR&amp;WBS
            </Typography>

            <Box
              sx={{
                position: 'absolute',
                top: 301,
                left: 38,
                width: 612,
                height: 390,
                backgroundColor: 'white',
                borderRadius: 1,
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 151,
                left: 38,
                width: 612,
                height: 100,
                backgroundColor: 'white',
                borderRadius: 1,
              }}
            >
              <Grid container spacing={2} sx={{ padding: 2 }}>
                {[
                  '연동화면',
                  '요구사항 이름',
                  '요구사항 내용',
                  '기한',
                  '담당자',
                  '확인',
                ].map((text, index) => (
                  <Grid item key={index}>
                    <Button
                      variant='contained'
                      sx={{
                        width: 88,
                        height: 50,
                        backgroundColor: '#e7e7e7',
                      }}
                    >
                      {text}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper
            sx={{
              width: 500,
              height: 800,
              position: 'absolute',
            
            }}
          >
            <Typography
              variant='h4'
              component='div'
              sx={{
                position: 'absolute',
                top: 3,
                left: 13,
                width: 62,
                height: 78,
                textAlign: 'center',
              }}
            >
              댓글
            </Typography>

            <Box
              sx={{
                position: 'absolute',
                top: 105,
                left: 31,
                width: 386,
                height: 100,
              }}
            >
              <img
                src='https://via.placeholder.com/341x91'
                alt='Rectangle'
                style={{ position: 'absolute', top: 0, left: 12 }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 228,
                left: 83,
                width: 341,
                height: 91,
              }}
            >
              <img
                src='https://via.placeholder.com/341x91'
                alt='Rectangle'
                style={{ position: 'absolute', top: 0, left: -1 }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 334,
                left: 31,
                width: 386,
                height: 100,
              }}
            >
              <img
                src='https://via.placeholder.com/341x91'
                alt='Rectangle'
                style={{ position: 'absolute', top: 0, left: 12 }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 434,
                left: 88,
                width: 341,
                height: 91,
              }}
            >
              <img
                src='https://via.placeholder.com/341x91'
                alt='Rectangle'
                style={{ position: 'absolute', top: 0, left: -1 }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 640,
                left: 7,
                width: 438,
                height: 104,
                backgroundColor: '#fffbfb',
                borderRadius: 1,
                boxShadow: 2,
              }}
            >
              <Typography
                variant='h4'
                component='div'
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 47,
                  width: 347,
                  height: 44,
                  textAlign: 'center',
                }}
              >
                댓글 입력창
              </Typography>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default URpage;
