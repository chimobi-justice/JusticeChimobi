import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function NotFound() {
  return (
    <Box textAlign="center" justifyContent="center" pt={2} pb={2}>
      <Typography variant="h1" pt={4} pb={3}>
        404
      </Typography>

      <Typography variant="h5" pt={4} pb={3}>
        Sorry the page you looking for does not exit or might be move out, thanks
      </Typography>
    </Box>
  )
}