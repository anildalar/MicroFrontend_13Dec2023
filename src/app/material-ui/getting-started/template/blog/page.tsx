'use client'
// 1 Import
import { Box, Button, Container, CssBaseline, Divider, Grid, IconButton, Link, Paper, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
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
        <Stack>
              <Link href="#">Active</Link>
              <Link href="#">Link</Link>
              <Link href="#">Link</Link>
              <Link href="#">Disable</Link>
        </Stack>
      </Container>
      
    </ThemeProvider>
  )
}

//Export ara
export default Blog;
