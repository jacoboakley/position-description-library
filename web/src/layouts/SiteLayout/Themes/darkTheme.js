import { createMuiTheme } from '@material-ui/core/styles'

export const darkTheme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#636e72',
      default: '#2d3436',
    },
    primary: {
      main: 'rgba(21, 65, 150, 1)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(246, 121, 0, 1)',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
  },
})
