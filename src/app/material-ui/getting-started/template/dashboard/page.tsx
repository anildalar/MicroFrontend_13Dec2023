'use client'
//1. import
//import { NamedImport1,NamedImport2,.... } from 'somelibary'
  import { AppBar, Box, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react'


//2. Function defination area
function Dashboard() {
  //2.1
  //2.2
  //This funciton will return some JS object
  const themeObject = createTheme(); //predefined functinon of MUI Functionn calling

  //2.3 Every function return something
  return (
    <ThemeProvider theme={themeObject}>
        <CssBaseline />
        <AppBar>Anil</AppBar>
        <Typography sx={{mt:4}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
    </ThemeProvider>
  )
}


//3. Export area
export default Dashboard;
