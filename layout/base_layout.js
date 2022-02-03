import { Favorite, Menu, Search } from '@mui/icons-material'
import { AppBar, BottomNavigation, BottomNavigationAction, IconButton, Paper, Switch, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setDarkMode, store } from '../store/global_state';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function BaseLayout(props) {
  const router = useRouter()
  const pathName = router.pathname
  const mode = store.getState().dark_mode
  const [value, setValue] = React.useState(pathName);
  const [isDarkMode, setIsDarkMode] = React.useState(mode);
  const arrTabPages = ['/', '/favorite']
  // const { username } = router.query


  useEffect(() => {
    console.log('BaseLayout: useEffect : ' + props.title)
    console.log('BaseLayout: useEffect : path name : ' + pathName)

  }, [])

  useEffect(() => {
    console.log('BaseLayout: useEffect value : ' + value)

    router.push(value)
  }, [value])

  useEffect(() => {
    console.log('isDarkMode : ' + isDarkMode)
    store.dispatch(setDarkMode(isDarkMode))
  }, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="flex justify-center w-full h-screen bg-gray-200">
        <div className="flex flex-col 2xl:w-1/4 xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-full w-full h-full">
          <AppBar position="static">
            <Toolbar variant="dense" >
              <Title title={props.title} />
              <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} color='secondary' />
            </Toolbar>
          </AppBar>
          <main className={isDarkMode ? 'flex h-full bg-trueGray-600' : 'flex h-full bg-white'}>
            {props.children}
          </main>
          <Paper elevation={3}>
            <BottomNavigation
              className='justify-around'
              showLabels
              value={value}
              onChange={(event, newValue) => {
                console.log('BaseLayout: newValue : ' + newValue)
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Search" icon={<Search />} value="/" />
              <BottomNavigationAction label="Favorites" icon={<Favorite />} value="/liked" />
            </BottomNavigation>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  )
}

const Title = ({ title }) => {
  return (
    <Typography variant="h6" color="inherit" component="div" className='w-full'>
      {title}
    </Typography>
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