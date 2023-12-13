'use client'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

let themeObject = createTheme()

export default function page() {
  //console.log(x);
  return (
    <ThemeProvider theme={themeObject}>
      <Container>
        <CssBaseline />
        Anil
      </Container>
    </ThemeProvider>
  )
}
