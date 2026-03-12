import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Datos de las leyendas con rutas correctas de imágenes
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
  const navigate = useNavigate();  // ✅ AGREGA ESTA LÍNEA

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* SECCIÓN HERO CON FONDO DINÁMICO */}
      <Box
        sx={{
          mb: 10,
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fondo decorativo */}
        <Box
          sx={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(230, 57, 70, 0.1) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          {/* HEADLINE PRINCIPAL */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: -2,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              animation: 'slideInLeft 0.8s ease-out',
              textTransform: 'uppercase',
              lineHeight: 1.2,
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
              fontSize: { xs: '1rem', md: '1.15rem' },
              fontWeight: 500,
              lineHeight: 1.7,
              animation: 'slideInRight 0.8s ease-out 0.2s both',
              mb: 4,
            }}
          >
            En <strong style={{ color: '#e63946' }}>SneakersTop</strong> no solo vendemos zapatos,
            curamos <strong>piezas de historia</strong>. Únete a la élite del streetwear global.
          </Typography>

          {/* CTA BOTONES */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'scaleIn 0.8s ease-out 0.4s both',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#e63946',
                color: 'white',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: 1,
                padding: '14px 40px',
                borderRadius: '50px',
                fontSize: '0.95rem',
                boxShadow: '0 8px 25px rgba(230, 57, 70, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#d62828',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 35px rgba(230, 57, 70, 0.4)',
                },
              }}
              onClick={() => navigate('/articulos')}  // ✅ AGREGA ESTA LÍNEA
            >
              EXPLORAR CATÁLOGO
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#e63946',
                borderColor: '#e63946',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: 1,
                padding: '14px 40px',
                borderRadius: '50px',
                fontSize: '0.95rem',
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
      </Box>

      {/* SEPARADOR VISUAL */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
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

      {/* TÍTULO DE SECCIÓN */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontSize: { xs: '1.5rem', md: '2.2rem' },
            animation: 'slideInLeft 0.8s ease-out 0.4s both',
          }}
        >
          LLEVADOS POR <span style={{ color: '#e63946' }}>LEYENDAS</span>
        </Typography>
        <Typography
          sx={{
            color: '#999',
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            letterSpacing: 1,
            animation: 'slideInRight 0.8s ease-out 0.5s both',
          }}
        >
          Historias de atletas icónicos y sus siluetas inmortales
        </Typography>
      </Box>

      {/* CONTENEDOR DE TARJETAS CON GRID RESPONSIVO */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: 3, md: 4 },
          px: { xs: 1, md: 0 },
          mb: 8,
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
              }}
            >
              {/* IMAGEN CON OVERLAY */}
              <Box sx={{ position: 'relative', overflow: 'hidden', flex: 'none' }}>
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="artist-img-home"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '450px',
                    objectFit: 'cover',
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
                      fontSize: '0.85rem',
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
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
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
                      fontSize: '0.75rem',
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
                      fontSize: '0.9rem',
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
                  }}
                >
                  {artist.shoe}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* SECCIÓN CTA FINAL */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          borderRadius: '16px',
          padding: { xs: '40px 20px', md: '60px 40px' },
          textAlign: 'center',
          mb: 4,
          animation: 'slideInUp 0.8s ease-out 0.6s both',
          border: '1px solid rgba(230, 57, 70, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 900,
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          ¿LISTO PARA UNIRTE?
        </Typography>
        <Typography sx={{ color: '#999', mb: 3, fontSize: '1.05rem' }}>
          Descubre nuestra colección exclusiva de sneakers auténticas
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#e63946',
            color: 'white',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: 1,
            padding: '14px 40px',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#d62828',
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 35px rgba(230, 57, 70, 0.4)',
            },
          }}
          onClick={() => navigate('/articulos')}  // ✅ AGREGA ESTA LÍNEA TAMBIÉN
        >
          VER CATÁLOGO COMPLETO
        </Button>
      </Box>

      {/* SCROLL INDICATOR */}
      <Box
        sx={{
          textAlign: 'center',
          animation: 'bounce 2s ease-in-out infinite',
          mb: 4,
          opacity: 0.5,
        }}
      >
        <ArrowDownIcon sx={{ color: '#e63946', fontSize: '2rem' }} />
      </Box>

      {/* ESTILOS DE ANIMACIONES ADICIONALES */}
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
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </Box>
  );
};

export default Home;