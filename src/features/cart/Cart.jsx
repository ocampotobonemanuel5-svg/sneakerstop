import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Card,
  CardContent,
  Stack,
  IconButton,
  Chip,
  Paper,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  const { toggleFavorite, isFavorite } = useFavorites();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  // Estado vacío
  if (cartItems.length === 0) {
    return (
      <Box sx={{ py: 12, textAlign: 'center' }}>
        <ShoppingBagIcon sx={{ fontSize: '80px', color: '#e63946', mb: 2 }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 2,
            textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          TU CARRITO ESTÁ <span style={{ color: '#e63946' }}>VACÍO</span>
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1.1rem', mb: 4 }}>
          ¡Comienza a explorar nuestro catálogo de zapatillas!
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
            },
          }}
          href="/articulos"
        >
          Ver Catálogo
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      {/* HEADER */}
      <Box sx={{ mb: 6, animation: 'slideInLeft 0.6s ease-out' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          MI <span style={{ color: '#e63946' }}>CARRITO</span>
        </Typography>
        <Typography sx={{ color: '#666', fontSize: '1.1rem' }}>
          {totalItems} {totalItems === 1 ? 'producto' : 'productos'} en tu carrito
        </Typography>
      </Box>

      {/* CONTENEDOR PRINCIPAL */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 4,
        }}
      >
        {/* TABLA DE PRODUCTOS */}
        <Box sx={{ animation: 'slideInLeft 0.8s ease-out 0.1s both' }}>
          <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: '#0a0a0a',
                    '& th': {
                      color: 'white',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    },
                  }}
                >
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => {
                  const price = parseFloat(item.price.replace('$', '').replace(',', ''));
                  const itemTotal = price * item.quantity;

                  return (
                    <TableRow
                      key={item.id}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f9f9f9',
                        },
                        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      {/* PRODUCTO */}
                      <TableCell>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              backgroundColor: '#f5f5f5',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              src={item.img}
                              alt={item.name}
                              style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                              {item.name}
                            </Typography>
                            <Typography sx={{ fontSize: '0.8rem', color: '#999' }}>
                              {item.brand}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>

                      {/* PRECIO */}
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: 700, color: '#e63946' }}>
                          {item.price}
                        </Typography>
                      </TableCell>

                      {/* CANTIDAD */}
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ justifyContent: 'center', alignItems: 'center' }}
                        >
                          <IconButton
                            size="small"
                            onClick={() => decreaseQuantity(item.id)}
                            sx={{
                              backgroundColor: '#f5f5f5',
                              '&:hover': { backgroundColor: '#e63946', color: 'white' },
                            }}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography sx={{ fontWeight: 700, minWidth: '30px', textAlign: 'center' }}>
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() => increaseQuantity(item.id)}
                            sx={{
                              backgroundColor: '#f5f5f5',
                              '&:hover': { backgroundColor: '#e63946', color: 'white' },
                            }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </TableCell>

                      {/* TOTAL */}
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', color: '#e63946' }}>
                          ${itemTotal.toFixed(2)}
                        </Typography>
                      </TableCell>

                      {/* ACCIONES */}
                      <TableCell align="center">
                        <Stack direction="row" spacing={0.5} sx={{ justifyContent: 'center' }}>
                          <IconButton
                            size="small"
                            onClick={() => toggleFavorite(item.id)}
                            sx={{
                              color: isFavorite(item.id) ? '#e63946' : '#999',
                              transition: 'all 0.3s ease',
                              '&:hover': { color: '#e63946' },
                            }}
                          >
                            {isFavorite(item.id) ? (
                              <FavoriteIcon fontSize="small" />
                            ) : (
                              <FavoriteBorderIcon fontSize="small" />
                            )}
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => removeFromCart(item.id)}
                            sx={{
                              color: '#999',
                              transition: 'all 0.3s ease',
                              '&:hover': { color: '#e63946' },
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* RESUMEN DEL CARRITO */}
        <Box sx={{ animation: 'slideInRight 0.8s ease-out 0.1s both' }}>
          <Card elevation={0} sx={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 4 }}>
              {/* TÍTULO */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  mb: 3,
                }}
              >
                Resumen del Pedido
              </Typography>

              <Divider sx={{ mb: 3 }} />

              {/* DETALLES */}
              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#666' }}>Subtotal:</Typography>
                  <Typography sx={{ fontWeight: 700 }}>${totalPrice.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#666' }}>Envío:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#e63946' }}>GRATIS</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#666' }}>Impuesto:</Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    ${(totalPrice * 0.08).toFixed(2)}
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ mb: 3 }} />

              {/* TOTAL */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Total:
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    color: '#e63946',
                  }}
                >
                  ${(totalPrice * 1.08).toFixed(2)}
                </Typography>
              </Box>

              {/* BOTONES */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#e63946',
                    color: 'white',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    padding: '12px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#d62828',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Proceder a Pagar
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: '#0a0a0a',
                    borderColor: '#ddd',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#e63946',
                      color: '#e63946',
                    },
                  }}
                  href="/articulos"
                >
                  Seguir Comprando
                </Button>
              </Stack>

              <Divider sx={{ my: 3 }} />

              {/* LIMPIAR CARRITO */}
              <Button
                fullWidth
                size="small"
                sx={{
                  color: '#e63946',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  '&:hover': { backgroundColor: 'rgba(230, 57, 70, 0.1)' },
                }}
                onClick={clearCart}
              >
                Vaciar Carrito
              </Button>
            </CardContent>
          </Card>

          {/* INFORMACIÓN ADICIONAL */}
          <Card elevation={0} sx={{ borderRadius: '12px', border: '1px solid #e0e0e0', mt: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography sx={{ fontSize: '0.9rem', color: '#666', mb: 1 }}>
                ✅ Envío gratis en compras mayores a $100
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#666', mb: 1 }}>
                ✅ Devoluciones gratuitas en 30 días
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                ✅ Garantía de autenticidad en todos los productos
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* ESTILOS DE ANIMACIÓN */}
      <style>{`
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
      `}</style>
    </Box>
  );
};

export default Cart;