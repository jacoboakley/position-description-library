import { Box } from '@material-ui/core'

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Box
        alignItems="center"
        display="flex"
        height="10vh"
        justifyContent="center"
        maxWidth="xl"
      >
        <p>&copy; {year}</p>
      </Box>
    </footer>
  )
}

export default Footer
