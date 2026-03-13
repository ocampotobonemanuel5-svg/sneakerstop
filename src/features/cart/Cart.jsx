import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';
import { useCart } from '../../hooks/useCart';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useFavorites } from '../../hooks/useFavorites';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice, clearCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const sneakers = [
    { id: 1, name: "Air Jordan 1 Retro High", brand: "JORDAN", price: 1200, img: "air-jordan.jpg" },
    { id: 2, name: "Air Jordan 4 Military Black", brand: "JORDAN", price: 1800, img: "air-jordan-4.jpg" },
    { id: 3, name: "Nike Dunk Low Panda", brand: "NIKE", price: 650, img: "dumk.jpg" },
    { id: 4, name: "Yeezy Boost 350 V2 Onyx", brand: "ADIDAS", price: 1500, img: "yezy.jpg" },
    { id: 5, name: "Air Force 1 Low '07 White", brand: "NIKE", price: 550, img: "nike.jpg" },
    { id: 6, name: "New Balance 550 White Grey", brand: "NEW BALANCE", price: 780, img: "tenis-new-balance.jpg" },
  ];

  const getProductInfo = (productId) => sneakers.find(s => s.id === productId) || { name: "Producto", price: 0 };

  const subtotal = getTotalPrice();
  const impuesto = Math.round(subtotal * 0.19);
  const total = subtotal + impuesto;

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! Sistema de pagos en desarrollo.');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <Box sx={{ width: '100%', minHeight: '80vh' }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: { xs: 8, md: 12 } }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Tu carrito está vacío
          </Typography>
          <Typography sx={{ color: '#999', mb: 4 }}>Agrega zapatillas a tu carrito</Typography>
          <Button href="/articulos" variant="contained" sx={{ backgroundColor: '#e63946', color: 'white', fontWeight: 800, textTransform: 'uppercase', borderRadius: '50px', '&:hover': { backgroundColor: '#d62828' } }}>
            Ir al Catálogo
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', minHeight: '85vh', background: '#ffffff', py: { xs: 3, md: 4 } }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box sx={{ mb: { xs: 3, md: 4 }, px: { xs: 1, md: 0 } }}>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 0.5 }}>
            MI <span style={{ color: '#e63946' }}>CARRITO</span>
          </Typography>
          <Typography sx={{ color: '#666', fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
            {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {/* TABLA - DESKTOP / TARJETAS - MOBILE */}
          <Grid item xs={12} md={8} sx={{ px: { xs: 1, md: 0 } }}>
            {/* TARJETAS - MOBILE */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              {cartItems.map((item, index) => {
                const product = getProductInfo(item.id);
                const totalPrice = product.price * item.quantity;

                return (
                  <Card key={index} elevation={0} sx={{ mb: 2, border: '1px solid #e0e0e0', borderRadius: '12px' }}>
                    <CardContent sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <img src={product.img} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                        <Box sx={{ flex: 1 }}>
                          <Typography sx={{ fontWeight: 900, fontSize: '0.95rem', color: '#0a0a0a' }}>{product.name}</Typography>
                          <Typography sx={{ color: '#999', fontSize: '0.75rem', fontWeight: 600 }}>{product.brand}</Typography>
                          <Typography sx={{ color: '#e63946', fontWeight: 700, fontSize: '0.9rem', mt: 0.5 }}>${product.price}</Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, p: 1, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <IconButton size="small" onClick={() => decreaseQuantity(item.id)} sx={{ color: '#999', p: 0.5 }}>
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography sx={{ minWidth: '30px', textAlign: 'center', fontWeight: 700 }}>{item.quantity}</Typography>
                          <IconButton size="small" onClick={() => increaseQuantity(item.id)} sx={{ color: '#999', p: 0.5 }}>
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        <Typography sx={{ fontWeight: 900, color: '#e63946' }}>${totalPrice}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                        <Button fullWidth variant="outlined" onClick={() => toggleFavorite(item.id)} sx={{ borderColor: '#ddd', color: isFavorite(item.id) ? '#e63946' : '#999' }}>
                          {isFavorite(item.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </Button>
                        <Button fullWidth variant="outlined" onClick={() => removeFromCart(item.id)} sx={{ borderColor: '#ddd', color: '#d32f2f' }}>
                          <DeleteIcon />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>

            {/* TABLA - TABLET Y DESKTOP */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#0a0a0a' }}>
                      <TableCell sx={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', py: 2 }}>Producto</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'center' }}>Precio</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'center' }}>Cantidad</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'right' }}>Total</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'center' }}>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item, index) => {
                      const product = getProductInfo(item.id);
                      const totalPrice = product.price * item.quantity;

                      return (
                        <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f9f9f9' }, borderBottom: '1px solid #e0e0e0' }}>
                          <TableCell sx={{ py: 2.5 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <img src={product.img} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                              <Box>
                                <Typography sx={{ fontWeight: 900, fontSize: '0.9rem', color: '#0a0a0a' }}>{product.name}</Typography>
                                <Typography sx={{ color: '#999', fontSize: '0.75rem', fontWeight: 600 }}>{product.brand}</Typography>
                              </Box>
                            </Box>
                          </TableCell>

                          <TableCell sx={{ textAlign: 'center', fontWeight: 700, color: '#e63946', fontSize: '0.9rem' }}>
                            ${product.price}
                          </TableCell>

                          <TableCell sx={{ textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                              <IconButton size="small" onClick={() => decreaseQuantity(item.id)} sx={{ color: '#999', p: 0.5 }}>
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                              <Typography sx={{ minWidth: '30px', textAlign: 'center', fontWeight: 700 }}>{item.quantity}</Typography>
                              <IconButton size="small" onClick={() => increaseQuantity(item.id)} sx={{ color: '#999', p: 0.5 }}>
                                <AddIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>

                          <TableCell sx={{ textAlign: 'right', fontWeight: 900, color: '#e63946', fontSize: '0.95rem' }}>
                            ${totalPrice}
                          </TableCell>

                          <TableCell sx={{ textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                              <IconButton size="small" onClick={() => toggleFavorite(item.id)} sx={{ color: isFavorite(item.id) ? '#e63946' : '#999', p: 0.5 }}>
                                {isFavorite(item.id) ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                              </IconButton>
                              <IconButton size="small" onClick={() => removeFromCart(item.id)} sx={{ color: '#d32f2f', p: 0.5 }}>
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>

          {/* RESUMEN */}
          <Grid item xs={12} md={4} sx={{ px: { xs: 1, md: 0 } }}>
            <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: { xs: 2.5, md: 3 }, position: { xs: 'relative', md: 'sticky' }, top: { md: 20 } }}>
              <Typography sx={{ fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.2rem' }, mb: 2, textTransform: 'uppercase' }}>
                Resumen del Pedido
              </Typography>

              {/* Detalles */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
                  <Typography sx={{ color: '#666', fontWeight: 600, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>Subtotal:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#333', fontSize: { xs: '0.9rem', md: '0.95rem' } }}>${subtotal}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
                  <Typography sx={{ color: '#666', fontWeight: 600, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>Envío:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#e63946', textTransform: 'uppercase', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>GRATIS</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
                  <Typography sx={{ color: '#666', fontWeight: 600, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>Impuesto:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#333', fontSize: { xs: '0.9rem', md: '0.95rem' } }}>${impuesto}</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 1.5 }} />

              {/* Total */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2.5 }}>
                <Typography sx={{ fontWeight: 900, fontSize: { xs: '1rem', md: '1.1rem' }, textTransform: 'uppercase' }}>TOTAL:</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: { xs: '1.2rem', md: '1.3rem' }, color: '#e63946' }}>${total}</Typography>
              </Box>

              {/* Botones */}
              <Button
                fullWidth
                variant="contained"
                onClick={handleCheckout}
                sx={{
                  backgroundColor: '#e63946',
                  color: 'white',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  py: { xs: 1.25, md: 1.5 },
                  mb: 1.5,
                  borderRadius: '8px',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  '&:hover': { backgroundColor: '#d62828' },
                }}
              >
                Proceder a Pagar
              </Button>

              <Button
                fullWidth
                variant="outlined"
                href="/articulos"
                sx={{
                  color: '#333',
                  borderColor: '#ddd',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  py: { xs: 1.25, md: 1.5 },
                  mb: 2,
                  borderRadius: '8px',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              >
                Seguir Comprando
              </Button>

              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Button
                  onClick={clearCart}
                  sx={{
                    color: '#e63946',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Vaciar Carrito
                </Button>
              </Box>

              <Divider sx={{ my: 1.5 }} />

              {/* Beneficios */}
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#27ae60', fontSize: { xs: '1rem', md: '1.1rem' }, flexShrink: 0, mt: 0.2 }} />
                  <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, color: '#666', lineHeight: 1.3 }}>
                    Envío gratis en compras mayores a $100
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#27ae60', fontSize: { xs: '1rem', md: '1.1rem' }, flexShrink: 0, mt: 0.2 }} />
                  <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, color: '#666', lineHeight: 1.3 }}>
                    Devoluciones gratuitas en 30 días
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#27ae60', fontSize: { xs: '1rem', md: '1.1rem' }, flexShrink: 0, mt: 0.2 }} />
                  <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, color: '#666', lineHeight: 1.3 }}>
                    Garantía de autenticidad en todos los productos
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;