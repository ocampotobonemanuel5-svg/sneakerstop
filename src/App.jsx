import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import Home from './features/Home/Home';
import Articles from './features/articles/Articles';
import Cart from './features/cart/Cart';

// Componente Cuenta mejorado y completo
const Cuenta = () => (
  <Box sx={{ minHeight: '600px', py: 8 }}>
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      {/* HEADER */}
      <Box sx={{ mb: 6, textAlign: 'center', animation: 'slideInDown 0.6s ease-out' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3rem' },
            animation: 'slideInLeft 0.8s ease-out',
          }}
        >
          MI <span style={{ color: '#e63946' }}>CUENTA</span>
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1.1rem', fontWeight: 500 }}>
          Gestiona tu perfil y pedidos en SneakersTop
        </Typography>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          borderRadius: '16px',
          p: { xs: 3, md: 5 },
          border: '1px solid #e0e0e0',
          animation: 'scaleIn 0.8s ease-out 0.2s both',
        }}
      >
        {/* SECCIÓN DE USUARIO */}
        <Box sx={{ mb: 6, pb: 4, borderBottom: '2px solid #e63946' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 3,
              color: '#0a0a0a',
            }}
          >
            👤 Información del Usuario
          </Typography>
          <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: '12px' }}>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                Nombre
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                Emanuel Ocampo Tobon
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                Email
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                usuario@email.com
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                Miembro desde
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                2026
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* SECCIÓN DE PEDIDOS */}
        <Box sx={{ mb: 6, pb: 4, borderBottom: '2px solid #e63946' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 3,
              color: '#0a0a0a',
            }}
          >
            📦 Mis Pedidos
          </Typography>
          <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: '12px', textAlign: 'center' }}>
            <Typography sx={{ color: '#999', fontStyle: 'italic' }}>
              Aún no tienes pedidos. ¡Comienza a comprar ahora!
            </Typography>
          </Box>
        </Box>

        {/* SECCIÓN DE FAVORITOS */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 3,
              color: '#0a0a0a',
            }}
          >
            ❤️ Mis Favoritos
          </Typography>
          <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: '12px', textAlign: 'center' }}>
            <Typography sx={{ color: '#999', fontStyle: 'italic' }}>
              Aún no has guardado ningún producto favorito.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* SECCIÓN DE AYUDA */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography sx={{ color: '#999', mb: 2 }}>
          ¿Necesitas ayuda? Contáctanos en support@sneakerstop.com
        </Typography>
      </Box>
    </Box>

    {/* Estilos de animación */}
    <style>{`
      @keyframes slideInDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `}</style>
  </Box>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* El MainLayout envuelve todo para mantener Header y Footer siempre visibles */}
        <Route path="/" element={<MainLayout />}>
          
          {/* RUTA DE INICIO: Muestra las Leyendas */}
          <Route index element={<Home />} />
          
          {/* RUTA DE ARTÍCULOS: Catálogo con filtros */}
          <Route path="articulos" element={<Articles />} />

          {/* RUTA DE CARRITO: Compras y favoritos */}
          <Route path="carrito" element={<Cart />} />
          
          {/* RUTA DE CUENTA: Perfil del usuario */}
          <Route path="cuenta" element={<Cuenta />} />
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
