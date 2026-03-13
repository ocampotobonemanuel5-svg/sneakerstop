import { Box, Typography, Button, Container, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const GitHubSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #efefef 100%)',
        py: { xs: 6, md: 8 },
        borderTop: '3px solid #e63946',
        borderBottom: '3px solid #e63946',
        my: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            animation: 'slideInUp 0.8s ease-out',
          }}
        >
          {/* ICONO DECORATIVO */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 3,
              animation: 'scaleIn 0.6s ease-out',
            }}
          >
            <CodeIcon
              sx={{
                fontSize: { xs: '3rem', md: '4rem' },
                color: '#e63946',
              }}
            />
          </Box>

          {/* TÍTULO */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.8rem' },
              textTransform: 'uppercase',
              letterSpacing: { xs: 0.5, md: 1.5 },
              color: '#0a0a0a',
              animation: 'slideInLeft 0.8s ease-out',
              lineHeight: 1.2,
            }}
          >
            Explora el código de{' '}
            <span style={{ color: '#e63946' }}>SNEAKERSTOP</span>
          </Typography>

          {/* DESCRIPCIÓN */}
          <Typography
            sx={{
              color: '#666',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8,
              fontWeight: 500,
              animation: 'slideInRight 0.8s ease-out 0.2s both',
              px: { xs: 2, md: 0 },
            }}
          >
            <strong style={{ color: '#e63946' }}>SneakersTop</strong> es un
            e-commerce moderno de zapatillas desarrollado con{' '}
            <strong>React 18</strong>, <strong>Material UI</strong> y{' '}
            <strong>Custom Hooks</strong>. Explora el código, aprende la
            estructura del proyecto y úsalo como referencia para tus propios
            proyectos.
          </Typography>

          {/* TECNOLOGÍAS */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 4, animation: 'slideInUp 0.8s ease-out 0.3s both' }}
            useFlexGap
          >
            <Chip
              icon={<AutoAwesomeIcon />}
              label="React 18"
              sx={{
                backgroundColor: '#e63946',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            />
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Material UI"
              sx={{
                backgroundColor: '#0a0a0a',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            />
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Vite"
              sx={{
                backgroundColor: '#646cff',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            />
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Custom Hooks"
              sx={{
                backgroundColor: '#e63946',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            />
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Responsive"
              sx={{
                backgroundColor: '#0a0a0a',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            />
          </Stack>

          {/* BOTÓN PRINCIPAL */}
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/ocampotobonemanuel5-svg/sneakerstop"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#0a0a0a',
              color: 'white',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              padding: { xs: '12px 32px', md: '16px 48px' },
              fontSize: { xs: '0.8rem', md: '1rem' },
              borderRadius: '50px',
              boxShadow: '0 12px 30px rgba(10, 10, 10, 0.3)',
              transition: 'all 0.3s ease',
              animation: 'scaleIn 0.8s ease-out 0.4s both',
              '&:hover': {
                backgroundColor: '#e63946',
                transform: 'translateY(-4px)',
                boxShadow: '0 16px 40px rgba(230, 57, 70, 0.4)',
                letterSpacing: 2,
              },
            }}
          >
            Ver Repositorio en GitHub
          </Button>

          {/* CARACTERÍSTICAS DEL PROYECTO */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 2, md: 3 },
              mt: 8,
              mb: 2,
            }}
          >
            {/* FEATURE 1 */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                animation: 'slideInUp 0.8s ease-out 0.5s both',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.2)',
                  borderColor: '#e63946',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  color: '#e63946',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                ✅ E-Commerce Completo
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                Carrito funcional, favoritos y persistencia con localStorage
              </Typography>
            </Box>

            {/* FEATURE 2 */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                animation: 'slideInUp 0.8s ease-out 0.6s both',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.2)',
                  borderColor: '#e63946',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  color: '#e63946',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                ✅ 100% Responsivo
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                Optimizado para mobile, tablet y desktop con Media Queries
              </Typography>
            </Box>

            {/* FEATURE 3 */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                animation: 'slideInUp 0.8s ease-out 0.7s both',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.2)',
                  borderColor: '#e63946',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  color: '#e63946',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                ✅ Custom Hooks
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                useCart, useFavorites y useLocalStorage para lógica reutilizable
              </Typography>
            </Box>

            {/* FEATURE 4 */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                animation: 'slideInUp 0.8s ease-out 0.8s both',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.2)',
                  borderColor: '#e63946',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  color: '#e63946',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                ✅ Animaciones Premium
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                Transiciones suaves y efectos hover interactivos en todos lados
              </Typography>
            </Box>

            {/* FEATURE 5 */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                animation: 'slideInUp 0.8s ease-out 0.9s both',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.2)',
                  borderColor: '#e63946',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  color: '#e63946',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                ✅ Rutas Dinámicas
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                React Router con navegación fluida entre páginas y componentes
              </Typography>
            </Box>

            {/* FEATURE 6 */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                animation: 'slideInUp 0.8s ease-out 1s both',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.2)',
                  borderColor: '#e63946',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  color: '#e63946',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                ✅ Deployado en Vercel
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                Sitio en vivo, compilación automática y CI/CD integrado
              </Typography>
            </Box>
          </Box>

          {/* INFORMACIÓN ADICIONAL */}
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, md: 4 },
              backgroundColor: '#0a0a0a',
              borderRadius: '12px',
              color: 'white',
              animation: 'slideInUp 0.8s ease-out 1.1s both',
              border: '1px solid #e63946',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              <strong style={{ color: '#e63946' }}>Desarrollado por:</strong>{' '}
              Emanuel Ocampo
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              <strong style={{ color: '#e63946' }}>Tecnologías:</strong> React
              18, Material UI, Vite, React Router, Custom Hooks, localStorage
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                color: '#ccc',
              }}
            >
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* ANIMACIONES */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
};

export default GitHubSection;