import { useMemo } from 'react'
import { lightTheme } from './Themes/lightTheme'
import { darkTheme } from './Themes/darkTheme'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Box } from '@material-ui/core'

export const SiteLayout = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const useTheme = useMemo(() => {
    return prefersDarkMode ? darkTheme : lightTheme
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={useTheme}>
      <CssBaseline />
      <Box minHeight="100vh" width="100vw">
        <Header />
        <main style={{ minHeight: '80vh' }}>{children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default SiteLayout
