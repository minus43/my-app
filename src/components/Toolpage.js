import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f2f2f2",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows,
  padding: theme.spacing(2),
}));

const Toolpage = () => {
  return (
    <Container maxWidth="lg">
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
        justifyContent="center"
        style={{ marginTop: 20 }}
      >
        <Grid item xs={6}>
          <StyledPaper>
            <Typography variant="h4" align="center" gutterBottom>
              Tool
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {["유형(형상관리,프론트,백엔드)", "이름", "버전", "확인"].map(
                (text) => (
                  <Grid item key={text}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e7e7e7" }}
                    >
                      {text}
                    </Button>
                  </Grid>
                ),
              )}
            </Grid>
            <Box mt={4} />
            <Grid container spacing={2} justifyContent="center">
              {["수정", "저장"].map((text) => (
                <Grid item key={text}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#e7e7e7" }}
                  >
                    {text}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>
            <Typography variant="h4" align="center" gutterBottom>
              댓글
            </Typography>
            <Box mt={4} p={2} bgcolor="#fffbfb" borderRadius={1} boxShadow={2}>
              <Typography variant="h6" align="center">
                댓글 입력창
              </Typography>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Toolpage;