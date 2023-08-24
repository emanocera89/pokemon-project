import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className='bg-yellow-400 fixed shadow-sm z-50'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon className='text-slate-900' />
          </IconButton>
          <Typography variant='h6' color='inherit' component='div' className='text-slate-900'>
            Pokémon App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}