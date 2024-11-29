import { AppBar, Box, Button, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  boxShadow: "0px 4px 4px #00000040",
}));

const Resultpage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: 1440,
          height: 1024,
          position: "relative",
        }}
      >
        <Paper
          sx={{
            width: 1200,
            height: 800,
            position: "absolute",
            top: 100,
            left: 120,
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
            boxShadow: "0px 4px 4px #00000040",
          }}
        >
          <Paper
            sx={{
              width: 1000,
              height: 600,
              position: "absolute",
              top: 100,
              left: 107,
              backgroundColor: "#d9d9d9",
              borderRadius: 2,
            }}
          />
          <Box sx={{ position: "absolute", top: 711, left: 1007 }}>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "#d9d9d9" }}
            >
              저장
            </StyledButton>
          </Box>
          <Box sx={{ position: "absolute", top: 711, left: 885 }}>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "#d9d9d9" }}
            >
              수정
            </StyledButton>
          </Box>
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              top: 23,
              left: 10,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Result
          </Typography>
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
      </Box>
    </Box>
  );
};

export default Resultpage;