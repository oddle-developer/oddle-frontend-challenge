import { Favorite, Home, Menu, Search } from '@mui/icons-material'
import { AppBar, BottomNavigation, BottomNavigationAction, Grid, IconButton, Paper, Stack, Switch, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setDarkMode, store } from '../store/global_state';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box } from '@mui/system';

export default function DetailsLayout(props) {
  const router = useRouter()
  const pathName = router.pathname
  const mode = store.getState().dark_mode
  const [value, setValue] = React.useState(pathName);
  const [isDarkMode, setIsDarkMode] = React.useState(mode);
  // console.log('DetailsLayout router.query = ', router.query)


  useEffect(() => {
    console.log('BaseLayout: useEffect : ' + props.title)
    console.log('BaseLayout: useEffect : path name : ' + pathName)
  }, [])

  useEffect(() => {
    console.log('isDarkMode : ' + isDarkMode)
    store.dispatch(setDarkMode(isDarkMode))
  }, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="flex flex-1 justify-center w-full h-auto min-h-screen bg-gray-200">
        <Stack className="flex 2xl:w-1/4 xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-full w-full h-full">
          <div className=''>
            <AppBar position="static">
              <Toolbar variant="dense" >
                <div className='w-full'>
                  <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => router.push('/')}>
                    <Home />
                  </IconButton>
                </div>
                <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} color='secondary' />
              </Toolbar>
            </AppBar>
          </div>
          <div className=''>
            <main className={isDarkMode ? 'flex flex-1 bg-trueGray-600' : 'flex bg-white'}>
              {props.children}
            </main>
          </div>
        </Stack>
      </div>
    </ThemeProvider>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#007ef5',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: 'rgba(0, 0, 0, 0.87)',
        }
      }
    }
  }
});

const styles = theme => ({
  disabledButton: {
    backgroundColor: 'red'
  }
});