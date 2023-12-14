'use client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

const themeObject = createTheme({
  palette: {
    primary: {
      main: "#800080"
    }
  }
})
export default function ThemeProvider2(props:any) {
  return (
    <ThemeProvider theme={themeObject}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
  )
}
