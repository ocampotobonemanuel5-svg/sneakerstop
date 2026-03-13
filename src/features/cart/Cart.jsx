import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  TextField,
  Divider,
  Grid,
} from '@mui/material';
import { useCart } from '../../hooks/useCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice, clearCart } = useCart();

  const sneakers = [
    { id: 1, name: "Air Jordan 1 Retro High", brand: "JORDAN", price: 1200 },
    { id: 2, name: "Air Jordan 4 Military Black", brand: "JORDAN", price: 1800 },
    { id: 3, name: "Nike Dunk Low Panda", brand: "NIKE", price: 650 },
    { id: 4, name: "Yeezy Boost 350 V2 Onyx", brand: "ADIDAS", price: 1500 },
    { id: 5, name: "Air Force 1 Low '07 White", brand: "NIKE", price: 550 },
    { id: 6, name: "New Balance 550 White Grey", brand: "NEW BALANCE", price: 780 },
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
      <Box sx={{ width: '100%', overflow: 'hidden', minHeight: '80vh' }}>
        <Box sx={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', color: 'white', py: { xs: 4, md: 6 }, borderBottom: '3px solid #e63946' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ShoppingCartIcon sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#e63946' }} />
              <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.8rem', md: '2.5rem' }, textTransform: 'uppercase', letterSpacing: 1 }}>
                Mi Carrito
              </Typography>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 } }}>
            <ShoppingCartIcon sx={{ fontSize: { xs: '5rem', md: '7rem' }, color: '#e63946', mb: 3, opacity: 0.3 }} />
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' }, textTransform: 'uppercase' }}>
              Tu carrito está vacío
            </Typography>
            <Typography sx={{ color: '#999', mb: 4, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
              Agrega zapatillas a tu carrito para ver el resumen aquí
            </Typography>
            <Button
              variant="contained"
              href="/articulos"
              sx={{
                backgroundColor: '#e63946',
                color: 'white',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: 1,
                padding: { xs: '12px 32px', md: '14px 48px' },
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                borderRadius: '50px',
                boxShadow: '0 8px 25px rgba(230, 57, 70, 0.3)',
                '&:hover': {
                  backgroundColor: '#d62828',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 35px rgba(230, 57, 70, 0.4)',
                },
              }}
            >
              Ir al Catálogo
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', minHeight: '85vh', background: '#fafafa' }}>
      {/* HEADER PREMIUM */}
      <Box sx={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', color: 'white', py: { xs: 4, md: 6 }, borderBottom: '3px solid #e63946' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <ShoppingCartIcon sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#e63946' }} />
            <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.8rem', md: '2.5rem' }, textTransform: 'uppercase', letterSpacing: 1 }}>
              Mi Carrito
            </Typography>
          </Box>
          <Typography sx={{ color: '#ccc', fontSize: { xs: '0.9rem', md: '1rem' } }}>
            {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {/* PRODUCTOS - MOBILE */}
          <Grid item xs={12} md={8} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Box>
              {cartItems.map((item, index) => {
                const product = getProductInfo(item.id);
                const totalPrice = product.price * item.quantity;

                return (
                  <Card
                    key={index}
                    elevation={0}
                    sx={{
                      mb: 2,
                      border: '1px solid #e0e0e0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 20px rgba(230, 57, 70, 0.15)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                      {/* Producto */}
                      <Box sx={{ mb: 2.5 }}>
                        <Typography sx={{ fontWeight: 900, fontSize: { xs: '1.05rem', sm: '1.15rem' }, color: '#0a0a0a', textTransform: 'uppercase', mb: 0.5 }}>
                          {product.name}
                        </Typography>
                        <Typography sx={{ color: '#e63946', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                          {product.brand}
                        </Typography>
                      </Box>

                      {/* Cantidad */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, p: 1.5, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                        <Typography sx={{ fontWeight: 700, color: '#666', fontSize: '0.9rem', flex: 1 }}>Cantidad:</Typography>
                        <IconButton
                          size="small"
                          onClick={() => decreaseQuantity(item.id)}
                          sx={{
                            color: '#e63946',
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            '&:hover': { backgroundColor: '#ffe0e0', borderColor: '#e63946' },
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <TextField
                          type="number"
                          value={item.quantity}
                          InputProps={{ readOnly: true }}
                          sx={{
                            width: '50px',
                            '& .MuiOutlinedInput-root': { height: '32px' },
                            '& input': { textAlign: 'center', fontWeight: 800, fontSize: '0.95rem' },
                          }}
                          size="small"
                        />
                        <IconButton
                          size="small"
                          onClick={() => increaseQuantity(item.id)}
                          sx={{
                            color: '#e63946',
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            '&:hover': { backgroundColor: '#ffe0e0', borderColor: '#e63946' },
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      {/* Precios */}
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2.5, p: 1.5, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                        <Box>
                          <Typography sx={{ color: '#999', fontSize: '0.8rem', fontWeight: 600, mb: 0.5 }}>Unitario</Typography>
                          <Typography sx={{ fontWeight: 700, color: '#333', fontSize: '1rem' }}>${product.price}</Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ color: '#999', fontSize: '0.8rem', fontWeight: 600, mb: 0.5 }}>Subtotal</Typography>
                          <Typography sx={{ fontWeight: 900, color: '#e63946', fontSize: '1.1rem' }}>${totalPrice}</Typography>
                        </Box>
                      </Box>

                      {/* Botón eliminar */}
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          color: '#d32f2f',
                          borderColor: '#d32f2f',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          fontSize: '0.8rem',
                          '&:hover': {
                            backgroundColor: '#ffebee',
                            borderColor: '#d32f2f',
                          },
                        }}
                      >
                        Eliminar
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Grid>

          {/* PRODUCTOS - DESKTOP */}
          <Grid item xs={12} md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden' }}>
              {/* Header Tabla */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                  color: 'white',
                  p: 2.5,
                  display: 'grid',
                  gridTemplateColumns: '2fr 1.2fr 1fr 0.8fr',
                  gap: 2,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  letterSpacing: 0.5,
                }}
              >
                <Box>Producto</Box>
                <Box sx={{ textAlign: 'center' }}>Cantidad</Box>
                <Box sx={{ textAlign: 'right' }}>Precio</Box>
                <Box sx={{ textAlign: 'center' }}>Acción</Box>
              </Box>

              {/* Filas */}
              {cartItems.map((item, index) => {
                const product = getProductInfo(item.id);
                const totalPrice = product.price * item.quantity;

                return (
                  <Box
                    key={index}
                    sx={{
                      p: 2.5,
                      display: 'grid',
                      gridTemplateColumns: '2fr 1.2fr 1fr 0.8fr',
                      gap: 2,
                      alignItems: 'center',
                      borderBottom: index !== cartItems.length - 1 ? '1px solid #e0e0e0' : 'none',
                      '&:hover': {
                        backgroundColor: '#f9f9f9',
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    {/* Producto */}
                    <Box>
                      <Typography sx={{ fontWeight: 900, color: '#0a0a0a', fontSize: '0.95rem' }}>{product.name}</Typography>
                      <Typography sx={{ color: '#e63946', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', mt: 0.5 }}>
                        {product.brand}
                      </Typography>
                    </Box>

                    {/* Cantidad */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                      <IconButton
                        size="small"
                        onClick={() => decreaseQuantity(item.id)}
                        sx={{
                          color: '#e63946',
                          backgroundColor: 'white',
                          border: '1px solid #e0e0e0',
                          '&:hover': { backgroundColor: '#ffe0e0' },
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <TextField
                        type="number"
                        value={item.quantity}
                        InputProps={{ readOnly: true }}
                        sx={{
                          width: '45px',
                          '& .MuiOutlinedInput-root': { height: '32px' },
                          '& input': { textAlign: 'center', fontWeight: 800 },
                        }}
                        size="small"
                      />
                      <IconButton
                        size="small"
                        onClick={() => increaseQuantity(item.id)}
                        sx={{
                          color: '#e63946',
                          backgroundColor: 'white',
                          border: '1px solid #e0e0e0',
                          '&:hover': { backgroundColor: '#ffe0e0' },
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    {/* Precio */}
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography sx={{ fontWeight: 900, color: '#e63946', fontSize: '1.05rem' }}>${totalPrice}</Typography>
                    </Box>

                    {/* Eliminar */}
                    <Box sx={{ textAlign: 'center' }}>
                      <IconButton
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          color: '#d32f2f',
                          backgroundColor: '#ffebee',
                          '&:hover': { backgroundColor: '#ffcdd2' },
                        }}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                );
              })}
            </Card>
          </Grid>

          {/* RESUMEN */}
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
                border: '2px solid #e63946',
                borderRadius: '12px',
                p: { xs: 3, md: 3.5 },
                position: { xs: 'relative', md: 'sticky' },
                top: { md: 20 },
              }}
            >
              <Typography sx={{ fontWeight: 900, fontSize: { xs: '1.3rem', md: '1.4rem' }, mb: 3, textTransform: 'uppercase', color: '#0a0a0a', textAlign: 'center' }}>
                Resumen del Pedido
              </Typography>

              <Box sx={{ mb: 3, p: 2, backgroundColor: 'white', borderRadius: '8px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography sx={{ color: '#666', fontWeight: 600 }}>Subtotal</Typography>
                  <Typography sx={{ fontWeight: 800, color: '#333' }}>${subtotal}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography sx={{ color: '#666', fontWeight: 600 }}>Envío</Typography>
                  <Typography sx={{ fontWeight: 800, color: '#27ae60' }}>Gratis</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#666', fontWeight: 600 }}>Impuestos (19%)</Typography>
                  <Typography sx={{ fontWeight: 800, color: '#333' }}>${impuesto}</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2.5, backgroundColor: '#e0e0e0' }} />

              <Box sx={{ p: 2, backgroundColor: '#ffe0e0', borderRadius: '8px', mb: 3, textAlign: 'center' }}>
                <Typography sx={{ color: '#666', fontSize: '0.85rem', fontWeight: 600, mb: 0.5, textTransform: 'uppercase' }}>Total a Pagar</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '1.8rem', color: '#e63946' }}>${total}</Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={handleCheckout}
                sx={{
                  background: 'linear-gradient(135deg, #e63946 0%, #d62828 100%)',
                  color: 'white',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  padding: '14px',
                  fontSize: '0.95rem',
                  borderRadius: '50px',
                  mb: 2,
                  boxShadow: '0 8px 20px rgba(230, 57, 70, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 30px rgba(230, 57, 70, 0.4)',
                  },
                }}
              >
                Proceder al Pago
              </Button>

              <Button
                fullWidth
                variant="outlined"
                onClick={clearCart}
                sx={{
                  color: '#999',
                  borderColor: '#ddd',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: '#999',
                  },
                }}
              >
                Vaciar Carrito
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          body { font-size: 14px; }
        }
      `}</style>
    </Box>
  );
};

export default Cart;