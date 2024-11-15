import { CheckBox as CheckBoxIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Loginpage = () => {
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
            <Grid item xs={12}>
              <Typography variant='body1'>Email</Typography>
              <TextField fullWidth variant='outlined' defaultValue='Value' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1'>Password</Typography>
              <TextField fullWidth variant='outlined' defaultValue='Value' />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxIcon />}
                    checkedIcon={<CheckBoxIcon />}
                  />
                }
                label='AutoSignIn'
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant='contained' color='primary'>
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Button fullWidth variant='contained' color='primary'>
                    Naver
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button fullWidth variant='contained' color='primary'>
                    Kakao
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button fullWidth variant='contained' color='primary'>
                    Github
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Link href='#' underline='hover'>
                Forgot password?
              </Link>
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

export default Loginpage;
