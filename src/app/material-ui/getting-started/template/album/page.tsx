import ThemeProvider2 from '@/component/Theme'
import { CameraIndoor } from '@mui/icons-material'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata  = { 
    title:"MUI: A popular React UI framework",
    description:"MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design.",
}

//const themeObject = createTheme()

export default function page() {
  return (
    <ThemeProvider2>
        <AppBar>
          <Toolbar>
              <CameraIndoor />
              <Typography sx={{ml:2}} component="h1" variant="h5">Album Layout</Typography>

          </Toolbar>
        </AppBar>
        <Container component="main">
            <Box></Box>
        </Container>
    </ThemeProvider2>
  )
}
