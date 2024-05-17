"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NAVMENU } from '@/constant/menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/system'
import { useStyles } from '@/components/Navigation/styled.navigation'

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <AppBar position="sticky" style={{ background: '#0a1931' }}>
      {isMatch ? (
        <>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <Link href="/">
                <Image
                  src="/jc.png"
                  height={75}
                  width={70}
                  alt="logo"
                />
              </Link>
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="end" spacing={3}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon fontSize="large" style={{ color: '#00f900' }} />
              </IconButton>
            </Stack>
          </Toolbar>


          {isDrawerOpen && (
            <Box className={classes.drawer}>
              <Box className={classes.drawerClose}>
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon fontSize="large" style={{ color: 'white' }} />
                </IconButton>
              </Box>
              <Box className={classes.drawerBox}>
                {NAVMENU.map((menu) => (
                  <Link key={menu.name} href={menu.path}>
                    <Typography variant="h4"><span style={{ marginRight: "2px", color: "#00f900" }}>{menu.number}</span></Typography>
                    <Typography variant="h4" pb={3}>{menu.name}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          )}
        </>
        // end mobile navBar
      ) : (
        // desktop navBar
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image
                src="/jc.png"
                height={75}
                width={70}
                alt="logo"
              />
            </Link>
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="end" spacing={3}>
            {NAVMENU.map((menu) => (
              <Link key={menu.name} href={menu.path}>
                <Typography variant="subtitle2"><span style={{ marginRight: "2px", color: "#00f900" }}>{menu.number}</span> {menu.name}</Typography>
              </Link>
            ))}
          </Stack>
        </Toolbar>
        // end desktop navBar
      )}
    </AppBar>
  )
}

export default NavBar;