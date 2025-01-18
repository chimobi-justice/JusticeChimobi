"use client"

import { useState } from 'react'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Avatar } from '@mui/material'
import { NAVMENU } from '@/constant/menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, useTheme } from '@mui/system'
import {
  DrawerContainer,
  DrawerClose,
  DrawerBox
} from '@/components/Navigation/styled.navigation'

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <AppBar position="sticky" style={{ background: '#0a1931' }} sx={{ padding: "10px" }}>
      {isMatch ? (
        <>
          <Toolbar>
            <Link href="/">
              <Avatar
                alt="Justice Chimobi"
                src="/about-img.jpg"
                sx={{ width: 46, height: 46 }}
              />
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" justifyContent="center" alignItems="end" spacing={3}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon fontSize="large" style={{ color: 'var(--primary-base-color)' }} />
              </IconButton>
            </Stack>
          </Toolbar>


          {isDrawerOpen && (
            <DrawerContainer>
              <DrawerClose>
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon fontSize="large" style={{ color: 'white' }} />
                </IconButton>
              </DrawerClose>
              <DrawerBox>
                {NAVMENU.map((menu) => (
                  <Link key={menu.name} href={menu.path}>
                    <Typography variant="h4"><span style={{ marginRight: "2px", color: 'var(--primary-base-color)' }}>{menu.icon}</span></Typography>
                    <Typography variant="h4" pb={3}>{menu.name}</Typography>
                  </Link>
                ))}
              </DrawerBox>
            </DrawerContainer>
          )}
        </>
        // end mobile navBar
      ) : (
        // desktop navBar
        <Toolbar sx={{ width: "80%", margin: "0px auto" }}>
          <Link href="/">
            <Avatar
              alt="Justice Chimobi"
              src="/about-img.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" justifyContent="center" alignItems="end" spacing={3}>
            {NAVMENU.map((menu) => (
              <Link key={menu.name} href={menu.path}>
                <Typography variant="subtitle2"><span style={{ marginRight: "2px", color: 'var(--primary-base-color)' }}>{menu.i}</span> {menu.name}</Typography>
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