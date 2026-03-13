import { Typography, Card, CardContent, Box, Button, Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubSection from '../../components/GitHubSection';

// Datos de las leyendas
const artists = [
  {
    name: "Michael Jordan",
    shoe: "Air Jordan 11 Concord",
    img: "jordan.jpg",
    era: "1990 - 2003",
    description: "El GOAT. 23 veces campeón de su era."
  },
  {
    name: "Travis Scott",
    shoe: "Jordan 1 Retro High OG",
    img: "travis.jpg",
    era: "2014 - Presente",
    description: "Cactus Jack. Donde la música y el deporte se encuentran."
  },
  {
    name: "LeBron James",
    shoe: "Nike LeBron 21",
    img: "lebron.jpg",
    era: "2003 - Presente",
    description: "The King. Talento sin límite, legado eterno."
  }
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', background: '#ffffff' }}>
      {/* ============================================ */}
      {/* SECCIÓN HERO CON FONDO DINÁMICO */}
      {/* ============================================ */}
      <Box
        sx={{
          mb: { xs: 6, md: 10 },
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 0 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fondo decorativo */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: -100, md: -200 },
            right: { xs: -100, md: -200 },
            width: { xs: 200, md: 400 },
            height: { xs: 200, md: 400 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(230, 57, 70, 0.1) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
            }}
          >
            {/* HEADLINE PRINCIPAL */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                letterSpacing: { xs: -1, md: -2 },
                mb: 2,
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                animation: 'slideInLeft 0.8s ease-out',
                textTransform: 'uppercase',
                lineHeight: 1.2,
                color: '#0a0a0a',
              }}
            >
              LA CULTURA EN TUS{' '}
              <Box
                component="span"
                sx={{
                  color: '#e63946',
                  display: 'block',
                  textShadow: '0 10px 40px rgba(230, 57, 70, 0.3)',
                  marginTop: '0.2em',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              >
                PIES
              </Box>
            </Typography>

            {/* DESCRIPCIÓN */}
            <Typography
              sx={{
                color: '#666',
                maxWidth: 800,
                margin: '0 auto',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.15rem' },
                fontWeight: 500,
                lineHeight: 1.7,
                animation: 'slideInRight 0.8s ease-out 0.2s both',
                mb: { xs: 3, md: 4 },
                px: { xs: 1, md: 0 },
              }}
            >
              En <strong style={{ color: '#e63946' }}>SneakersTop</strong> no solo vendemos
              zapatos, curamos <strong>piezas de historia</strong>. Únete a la élite del
              streetwear global.
            </Typography>

            {/* CTA BOTONES */}
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1, md: 2 },
                justifyContent: 'center',
                flexWrap: 'wrap',
                animation: 'scaleIn 0.8s ease-out 0.4s both',
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#e63946',
                  color: 'white',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  padding: { xs: '12px 24px', md: '14px 40px' },
                  borderRadius: '50px',
                  fontSize: { xs: '0.8rem', md: '0.95rem' },
                  boxShadow: '0 8px 25px rgba(230, 57, 70, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#d62828',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 35px rgba(230, 57, 70, 0.4)',
                  },
                }}
                onClick={() => navigate('/articulos')}
              >
                EXPLORAR CATÁLOGO
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: '#e63946',
                  borderColor: '#e63946',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  padding: { xs: '12px 24px', md: '14px 40px' },
                  borderRadius: '50px',
                  fontSize: { xs: '0.8rem', md: '0.95rem' },
                  border: '2px solid #e63946',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#e63946',
                    color: 'white',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                CONOCER MÁS
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ============================================ */}
      {/* SEPARADOR VISUAL */}
      {/* ============================================ */}
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          animation: 'slideInLeft 0.8s ease-out 0.6s both',
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            height: 2,
            width: 60,
            background: 'linear-gradient(90deg, transparent, #e63946, transparent)',
            mb: 4,
          }}
        />
      </Box>

      {/* ============================================ */}
      {/* TÍTULO DE SECCIÓN */}
      {/* ============================================ */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: { xs: 1, md: 2 },
              fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem' },
              animation: 'slideInLeft 0.8s ease-out 0.4s both',
              color: '#0a0a0a',
            }}
          >
            LLEVADOS POR <span style={{ color: '#e63946' }}>LEYENDAS</span>
          </Typography>
          <Typography
            sx={{
              color: '#999',
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              textTransform: 'uppercase',
              letterSpacing: 1,
              animation: 'slideInRight 0.8s ease-out 0.5s both',
            }}
          >
            Historias de atletas icónicos y sus siluetas inmortales
          </Typography>
        </Box>

        {/* ============================================ */}
        {/* GRID DE TARJETAS RESPONSIVO */}
        {/* ============================================ */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 2, sm: 3, md: 4 },
            px: { xs: 2, md: 0 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {artists.map((artist, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                animation: `slideInUp 0.8s ease-out ${0.2 + index * 0.15}s both`,
              }}
            >
              <Card
                className="artist-card"
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                }}
              >
                {/* IMAGEN CON OVERLAY */}
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    flex: 'none',
                    paddingBottom: '100%',
                  }}
                >
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="artist-img-home"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* OVERLAY CON ERA */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: hoveredCard === index
                        ? 'linear-gradient(135deg, rgba(230, 57, 70, 0.2) 0%, rgba(10, 10, 10, 0.3) 100%)'
                        : 'transparent',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '20px',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        opacity: hoveredCard === index ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      {artist.era}
                    </Typography>
                  </Box>
                </Box>

                {/* CONTENIDO DE TARJETA */}
                <CardContent
                  className="card-content-main"
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: { xs: '16px', md: '20px' },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        mb: 1,
                        letterSpacing: 1,
                        fontSize: { xs: '1rem', md: '1.3rem' },
                        color: 'white',
                      }}
                    >
                      {artist.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#e63946',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        mb: 1,
                      }}
                    >
                      ICONO DEPORTIVO
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#ccc',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        fontStyle: 'italic',
                      }}
                    >
                      {artist.description}
                    </Typography>
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      color: '#e63946',
                      fontWeight: 900,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      mt: 2,
                      display: 'block',
                      fontSize: { xs: '0.75rem', md: '0.8rem' },
                    }}
                  >
                    {artist.shoe}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* ============================================ */}
        {/* SECCIÓN CTA FINAL */}
        {/* ============================================ */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            borderRadius: '16px',
            padding: { xs: '30px 20px', md: '60px 40px' },
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            animation: 'slideInUp 0.8s ease-out 0.6s both',
            border: '1px solid rgba(230, 57, 70, 0.2)',
            mx: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 900,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: { xs: 1, md: 2 },
              fontSize: { xs: '1.3rem', md: '2rem' },
            }}
          >
            ¿LISTO PARA UNIRTE?
          </Typography>
          <Typography
            sx={{
              color: '#999',
              mb: 3,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.6,
            }}
          >
            Descubre nuestra colección exclusiva de sneakers auténticas
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#e63946',
              color: 'white',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: 1,
              padding: { xs: '12px 24px', md: '14px 40px' },
              borderRadius: '50px',
              fontSize: { xs: '0.8rem', md: '0.95rem' },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#d62828',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 35px rgba(230, 57, 70, 0.4)',
              },
            }}
            onClick={() => navigate('/articulos')}
          >
            VER CATÁLOGO COMPLETO
          </Button>
        </Box>

        {/* ============================================ */}
        {/* SCROLL INDICATOR */}
        {/* ============================================ */}
        <Box
          sx={{
            textAlign: 'center',
            animation: 'bounce 2s ease-in-out infinite',
            mb: 4,
            opacity: 0.5,
          }}
        >
          <ArrowDownIcon
            sx={{
              color: '#e63946',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          />
        </Box>
      </Container>

      {/* ============================================ */}
      {/* SECCIÓN DE GITHUB - SOLO EN HOME */}
      {/* ============================================ */}
      <GitHubSection />

      {/* ============================================ */}
      {/* ESTILOS DE ANIMACIONES */}
      {/* ============================================ */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* RESPONSIVO: Mejora para pantallas muy pequeñas */
        @media (max-width: 480px) {
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </Box>
  );
};

export default Home;