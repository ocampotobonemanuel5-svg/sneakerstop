import { Typography, Grid, Card, CardMedia, CardContent, Box, Button, Chip, Stack } from '@mui/material';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';

const sneakers = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High",
    brand: "JORDAN",
    category: "Basketball",
    price: "$1,200",
    originalPrice: "$1,500",
    img: "air-jordan.jpg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "Air Jordan 4 Military Black",
    brand: "JORDAN",
    category: "Basketball",
    price: "$1,800",
    originalPrice: "$2,200",
    img: "air-jordan-4.jpg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Nike Dunk Low Panda",
    brand: "NIKE",
    category: "Casual",
    price: "$650",
    originalPrice: "$850",
    img: "dumk.jpg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    name: "Yeezy Boost 350 V2 Onyx",
    brand: "ADIDAS",
    category: "Lifestyle",
    price: "$1,500",
    originalPrice: "$1,800",
    img: "yezy.jpg",
    rating: 4.9,
    inStock: false,
  },
  {
    id: 5,
    name: "Air Force 1 Low '07 White",
    brand: "NIKE",
    category: "Casual",
    price: "$550",
    originalPrice: "$700",
    img: "nike.jpg",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 6,
    name: "New Balance 550 White Grey",
    brand: "NEW BALANCE",
    category: "Casual",
    price: "$780",
    originalPrice: "$1,000",
    img: "tenis-new-balance.jpg",
    rating: 4.8,
    inStock: true,
  },
];

const BRANDS = ['TODOS', 'JORDAN', 'NIKE', 'ADIDAS', 'NEW BALANCE'];
const CATEGORIES = ['TODOS', 'Basketball', 'Casual', 'Lifestyle'];

const Articles = () => {
  const [selectedBrand, setSelectedBrand] = useState('TODOS');
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  
  // 🎯 USAR LOS HOOKS
  const { addToCart, getProductQuantity } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const filteredSneakers = sneakers.filter(shoe => {
    const brandMatch = selectedBrand === 'TODOS' || shoe.brand === selectedBrand;
    const categoryMatch = selectedCategory === 'TODOS' || shoe.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  const calculateDiscount = (original, current) => {
    const discount = Math.round(((parseFloat(original) - parseFloat(current)) / parseFloat(original)) * 100);
    return discount;
  };

  return (
    <Box sx={{ py: 8, width: '100%' }}>
      {/* SECCIÓN HERO DEL CATÁLOGO */}
      <Box sx={{ mb: 10, textAlign: 'center', animation: 'fadeInUp 0.8s ease-out' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 2,
            textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3rem' },
            animation: 'slideInLeft 0.8s ease-out',
            lineHeight: 1.2,
          }}
        >
          NUESTRO <span style={{ color: '#e63946', textShadow: '0 10px 40px rgba(230, 57, 70, 0.3)' }}>CATÁLOGO</span>
        </Typography>
        <Typography
          sx={{
            color: '#666',
            maxWidth: 800,
            margin: '0 auto',
            fontSize: { xs: '1rem', md: '1.15rem' },
            px: 2,
            fontWeight: 500,
            lineHeight: 1.7,
            animation: 'slideInRight 0.8s ease-out 0.2s both',
          }}
        >
          En <strong style={{ color: '#e63946' }}>SneakersTop</strong> curamos las siluetas más
          icónicas del mundo. Cada zapato cuenta una historia.
        </Typography>
      </Box>

      {/* FILTROS PREMIUM */}
      <Box
        sx={{
          mb: 10,
          p: { xs: 2, md: 4 },
          backgroundColor: '#f9f9f9',
          borderRadius: '16px',
          border: '1px solid #e0e0e0',
          animation: 'scaleIn 0.6s ease-out 0.3s both',
        }}
      >
        {/* FILTRO DE MARCAS */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 2,
              color: '#0a0a0a',
            }}
          >
            Filtrar por Marca
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {BRANDS.map(brand => (
              <Chip
                key={brand}
                label={brand}
                onClick={() => setSelectedBrand(brand)}
                sx={{
                  fontWeight: brand === selectedBrand ? 900 : 600,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  backgroundColor: brand === selectedBrand ? '#e63946' : '#fff',
                  color: brand === selectedBrand ? '#fff' : '#0a0a0a',
                  border: brand === selectedBrand ? 'none' : '1px solid #ddd',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: brand === selectedBrand ? '#d62828' : '#f0f0f0',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* FILTRO DE CATEGORÍAS */}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 2,
              color: '#0a0a0a',
            }}
          >
            Filtrar por Categoría
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {CATEGORIES.map(category => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  fontWeight: category === selectedCategory ? 900 : 600,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  backgroundColor: category === selectedCategory ? '#e63946' : '#fff',
                  color: category === selectedCategory ? '#fff' : '#0a0a0a',
                  border: category === selectedCategory ? 'none' : '1px solid #ddd',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: category === selectedCategory ? '#d62828' : '#f0f0f0',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>

      {/* CONTADOR DE RESULTADOS */}
      <Typography
        variant="body2"
        sx={{
          mb: 4,
          color: '#666',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        Mostrando {filteredSneakers.length} de {sneakers.length} productos
      </Typography>

      {/* GRID DE PRODUCTOS */}
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {filteredSneakers.map((shoe, index) => {
          const cartQuantity = getProductQuantity(shoe.id);

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={shoe.id}
              sx={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <Card
                className="artist-card"
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* CONTENEDOR DE IMAGEN */}
                <Box
                  className="card-img-container"
                  sx={{
                    position: 'relative',
                    flex: 'none',
                    height: '280px',
                  }}
                >
                  {/* BADGE DE DESCUENTO */}
                  {shoe.originalPrice && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: '#e63946',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontWeight: 900,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                        zIndex: 10,
                        boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
                      }}
                    >
                      -{calculateDiscount(shoe.originalPrice, shoe.price)}%
                    </Box>
                  )}

                  {/* BOTÓN FAVORITO */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#e63946',
                        transform: 'scale(1.1)',
                      },
                      '&:hover svg': {
                        color: 'white',
                      },
                    }}
                    onClick={() => toggleFavorite(shoe.id)}
                  >
                    {isFavorite(shoe.id) ? (
                      <FavoriteIcon sx={{ color: '#e63946', fontSize: '1.3rem' }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ color: '#e63946', fontSize: '1.3rem', transition: 'color 0.3s' }} />
                    )}
                  </Box>

                  {/* BADGE DE CANTIDAD EN CARRITO */}
                  {cartQuantity > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        backgroundColor: '#e63946',
                        color: 'white',
                        borderRadius: '50%',
                        width: 35,
                        height: 35,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.9rem',
                        zIndex: 10,
                        boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
                      }}
                    >
                      {cartQuantity}
                    </Box>
                  )}

                  {/* BADGE DE STOCK */}
                  {!shoe.inStock && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        zIndex: 5,
                      }}
                    >
                      <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '1.2rem', textTransform: 'uppercase' }}>
                        Agotado
                      </Typography>
                    </Box>
                  )}

                  {/* IMAGEN DEL PRODUCTO */}
                  <CardMedia
                    component="img"
                    image={shoe.img}
                    alt={shoe.name}
                    sx={{
                      maxHeight: '100%',
                      width: 'auto',
                      objectFit: 'contain',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </Box>

                {/* CONTENIDO DE LA TARJETA */}
                <CardContent
                  className="card-content-main"
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 2,
                  }}
                >
                  {/* INFORMACIÓN DEL PRODUCTO */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#e63946',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      {shoe.brand}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        mb: 1,
                        color: 'white',
                        lineHeight: 1.3,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        minHeight: '2.6em',
                      }}
                    >
                      {shoe.name}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                      <Chip
                        label={shoe.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(230, 57, 70, 0.2)',
                          color: '#e63946',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          fontSize: '0.7rem',
                          letterSpacing: 0.5,
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          fontSize: '0.8rem',
                          color: '#ffc107',
                        }}
                      >
                        ⭐ {shoe.rating}
                      </Box>
                    </Stack>
                  </Box>

                  {/* PRECIOS Y CTA */}
                  <Box>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, alignItems: 'center' }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 900,
                          color: '#e63946',
                        }}
                      >
                        {shoe.price}
                      </Typography>
                      {shoe.originalPrice && (
                        <Typography
                          sx={{
                            textDecoration: 'line-through',
                            color: '#999',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                          }}
                        >
                          {shoe.originalPrice}
                        </Typography>
                      )}
                    </Stack>

                    <Button
                      variant="outlined"
                      fullWidth
                      className="btn-details"
                      disabled={!shoe.inStock}
                      startIcon={<ShoppingBagIcon />}
                      onClick={() => addToCart(shoe)}
                      sx={{
                        opacity: shoe.inStock ? 1 : 0.5,
                        cursor: shoe.inStock ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {shoe.inStock ? 'AGREGAR AL CARRITO' : 'NO DISPONIBLE'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* ESTADO VACÍO */}
      {filteredSneakers.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: '#666' }}>
            No hay productos que coincidan con los filtros
          </Typography>
          <Button
            onClick={() => {
              setSelectedBrand('TODOS');
              setSelectedCategory('TODOS');
            }}
            sx={{
              color: '#e63946',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Limpiar Filtros
          </Button>
        </Box>
      )}

      {/* ESTILOS DE ANIMACIÓN */}
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default Articles;