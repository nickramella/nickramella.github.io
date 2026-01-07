"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSmallScreen, setWindowSize } from '@/lib/rootSlice';
import { useEffect } from 'react';
import Link from 'next/link';

const links: Record<string, string> = {"Experience": "/work", "Demos": "/demo", "Blog": "/analytics", "Personal": "/personal"};

const MenuBar = () => {
  const isSmallScreen = useSelector(selectIsSmallScreen);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  function handleResize() {
    dispatch(setWindowSize(window.innerWidth));
  }

  useEffect(() => {
    dispatch(setWindowSize(window.innerWidth));
    window.addEventListener('resize', handleResize);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className='anim-fade'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isSmallScreen &&
            <Link
                className="mr-2 grow font-mono font-bold text-2xl"
                href="/">
                HOME
            </Link>
          }
          {isSmallScreen &&
            <>
                <Box sx={{ flexGrow: 1}}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                    {Object.keys(links).map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Link href={links[page]}>{page}</Link>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Link
                    className="mr-2 grow font-mono font-bold text-2xl"
                    href="/">
                    HOME
                </Link>
            </>
          }
          {!isSmallScreen &&
            <Box sx={{ flexGrow: 1, display: "flex" }}>
                {Object.keys(links).map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link href={links[page]}>{page}</Link>
                </Button>
                ))}
            </Box>
          }
          <Box sx={{ flexGrow: 0 }}>
              <a href="https://www.linkedin.com/in/nicholas-ramella-8b605618a" target="_blank"><i className={`fa fa-linkedin-square text-2xl`}></i></a>
              <a href="https://github.com/nickramella" target="_blank"><i className={`fa fa-github text-2xl`}></i></a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuBar;
