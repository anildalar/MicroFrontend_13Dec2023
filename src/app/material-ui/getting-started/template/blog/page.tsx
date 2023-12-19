'use client'
// 1 Import
import { Box, Button, Container, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import NLink from 'next/link';
import MULink from '@mui/material/Link';
const themeObject = createTheme()

const MENUS = [
                { 
                  name: "A" 
                }, 
                { 
                  name: "B" 
                },
                { 
                  name: "C" 
                }
              ]; // Array of Object
//2. Function defination are
function Blog() {
  return (
    <ThemeProvider theme={themeObject}>
      <CssBaseline/>
      <Container className="a_tbdr" maxWidth="lg">
        <Box component="header">

          <Toolbar className="a_tbdr">
            <Button variant="outlined" size="small">Subscribe</Button>
            <Typography variant="h5" noWrap  align="center" sx={{ flex: 1 }}>Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1</Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">SignUp</Button>
          </Toolbar>
          <Toolbar component="nav">
            {
             MENUS.map((cv,index,arr)=>{
              return <MULink key={index} href="#" sx={{p:2}}>{cv.name}</MULink>
             }) 
            }
              
          </Toolbar>
        </Box>
        <Box component="main">main</Box>
        <Box component="footer">Footer</Box>
      </Container>
      
    </ThemeProvider>
  )
}

//Export ara
export default Blog;
