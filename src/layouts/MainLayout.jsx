import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, IconButton, Drawer, List, ListItem, ListItemText, Badge } from '@mui/material';
import { Outlet, Link, useLocation } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import GitHubSection from '../components/GitHubSection';

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Marcas', path: '/articulos' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 900, color: '#e63946' }}>
          MENU
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: '#fff',
              fontWeight: 700,
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(230, 57, 70, 0.1)',
                color: '#e63946',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem
          component={Link}
          to="/carrito"
          onClick={handleDrawerToggle}
          sx={{
            color: '#e63946',
            fontWeight: 700,
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: 'rgba(230, 57, 70, 0.1)',
            },
          }}
        >
          <ListItemText primary={`🛒 Mi Carrito (${getTotalItems()})`} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* NAVBAR MEJORADA */}
      <AppBar position="sticky" elevation={0} className="nav-bar-main">
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            {/* LOGO CON ANIMACIÓN */}
            <Box
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                animation: 'slideInLeft 0.6s ease-out',
              }}
            >
              <Typography variant="h4" className="logo-brand">
                SNEAKERS<span>TOP</span>
              </Typography>
            </Box>

            {/* NAVEGACIÓN DESKTOP */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  className="btn-nav"
                  sx={{
                    opacity: location.pathname === item.path ? 1 : 0.8,
                    '&:focus': {
                      outline: 'none',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                className="btn-cart-red"
                startIcon={
                  <Badge badgeContent={getTotalItems()} color="success">
                    <LocalMallIcon />
                  </Badge>
                }
                component={Link}
                to="/carrito"
                sx={{
                  animation: 'scaleIn 0.6s ease-out 0.2s both',
                }}
              >
                Carrito
              </Button>
            </Stack>

            {/* BOTÓN MENÚ MOBILE */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'var(--negro-premium)',
            color: '#fff',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* CONTENIDO PRINCIPAL CON ANIMACIÓN */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: '100%',
          animation: 'fadeInUp 0.6s ease-out',
        }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>

      <GitHubSection />

      {/* FOOTER MEJORADO */}
      <Box
        component="footer"
        sx={{
          py: 6,
          borderTop: '1px solid #333',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 2,
              mb: 1,
              background: 'linear-gradient(90deg, #fff 0%, #e63946 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SNEAKERSTOP
          </Typography>
          <Typography sx={{ color: '#999', fontSize: '0.9rem', mb: 2 }}>
            La cultura deportiva en tus pies. Zapatillas auténticas, historias reales.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3, flexWrap: 'wrap' }}>
          <Button sx={{ color: '#e63946', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Contacto
          </Button>
          <Button sx={{ color: '#e63946', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Devoluciones
          </Button>
          <Button sx={{ color: '#e63946', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Política de Privacidad
          </Button>
        </Stack>

        <Typography variant="caption" sx={{ letterSpacing: 1, color: '#666', textTransform: 'uppercase' }}>
          © 2026 <b>SNEAKERSTOP</b> | BY EMANUEL OCAMPO
        </Typography>
      </Box>
    </Box>
  );
};

export default MainLayout;