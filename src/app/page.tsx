'use client'
import { Copyright } from '@mui/icons-material';
//1 Import Area
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"


let x = createTheme()//createTheme function will return something and i will catch in x variable
//2. Function defination Area
function Home() {

  //Every function return something
  return (
    <ThemeProvider theme={x}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          marginTop:8,
          display:'flex',
          flexDirection:'column',
          alignItems: 'center'
        }}>
          <Avatar sx={{bgcolor:'secondary.main', m: 1}}>
            <LockOutlinedIcon color="primary"/>
          </Avatar>
          <Typography component="h1" variant="h4">Sign In</Typography>
          <Box component="form" sx={{mt:2}}>
            <TextField autoComplete="email" autoFocus margin="normal" fullWidth id="anil" label="Enter your name" name="firstName" required/>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel  control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button  variant="contained" fullWidth type="submit" sx={{ mt:3,mb:2}}>sign in</Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> 
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> 
            </Grid>
          </Box>
          <Typography align="center">Copyright <Copyright /> Your website 2023</Typography>
        </Box> 
      </Container>
    </ThemeProvider>
  )
}

//3. Export 
export default Home