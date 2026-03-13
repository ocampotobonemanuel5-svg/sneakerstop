import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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

  // Datos de prueba de productos (para mostrar info del carrito)
  const sneakers = [
    { id: 1, name: "Air Jordan 1 Retro High", brand: "JORDAN", price: "$1,200", img: "air-jordan.jpg" },
    { id: 2, name: "Air Jordan 4 Military Black", brand: "JORDAN", price: "$1,800", img: "air-jordan-4.jpg" },
    { id: 3, name: "Nike Dunk Low Panda", brand: "NIKE", price: "$650", img: "dumk.jpg" },
    { id: 4, name: "Yeezy Boost 350 V2 Onyx", brand: "ADIDAS", price: "$1,500", img: "yezy.jpg" },
    { id: 5, name: "Air Force 1 Low '07 White", brand: "NIKE", price: "$550", img: "nike.jpg" },
    { id: 6, name: "New Balance 550 White Grey", brand: "NEW BALANCE", price: "$780", img: "tenis-new-balance.jpg" },
  ];

  // Obtener info del producto
  const getProductInfo = (productId) => {
    return sneakers.find(s => s.id === productId) || { name: "Producto", price: "$0" };
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! Sistema de pagos en desarrollo.');
    clearCart();
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', minHeight: '80vh' }}>
      {/* HEADER */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          color: 'white',
          py: { xs: 3, md: 5 },
          px: { xs: 2, md: 0 },
          mb: { xs: 3, md: 4 },
          borderBottom: '3px solid #e63946',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <ShoppingCartIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#e63946' }} />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Mi Carrito
            </Typography>
          </Box>
          <Typography sx={{ color: '#999', fontSize: { xs: '0.9rem', md: '1rem' } }}>
            {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* SI EL CARRITO ESTÁ VACÍO */}
        {cartItems.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 6, md: 10 },
              px: { xs: 2, md: 0 },
            }}
          >
            <ShoppingCartIcon
              sx={{
                fontSize: { xs: '4rem', md: '6rem' },
                color: '#e63946',
                mb: 2,
                opacity: 0.5,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
                textTransform: 'uppercase',
              }}
            >
              Tu carrito está vacío
            </Typography>
            <Typography sx={{ color: '#666', mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Agrega zapatillas a tu carrito para ver el resumen aquí
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#e63946',
                color: 'white',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: 1,
                padding: { xs: '10px 24px', md: '12px 40px' },
                fontSize: { xs: '0.8rem', md: '0.95rem' },
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#d62828',
                },
              }}
              href="/articulos"
            >
              Ir al Catálogo
            </Button>
          </Box>
        ) : (
          // SI HAY PRODUCTOS EN EL CARRITO
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ mb: { xs: 4, md: 6 }, px: { xs: 1, md: 0 } }}
          >
            {/* TABLA DE PRODUCTOS - DESKTOP */}
            <Grid item xs={12} md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
              <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 900, textTransform: 'uppercase' }}>Producto</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                        Cantidad
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                        Precio
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                        Acción
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item, index) => {
                      const product = getProductInfo(item.id);
                      const itemPrice = parseInt(product.price.replace('$', '').replace(',', ''));
                      const totalPrice = itemPrice * item.quantity;

                      return (
                        <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                          <TableCell sx={{ fontWeight: 700, color: '#333' }}>
                            {product.name}
                          </TableCell>
                          <TableCell align="center">
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                              <IconButton
                                size="small"
                                onClick={() => decreaseQuantity(item.id)}
                                sx={{ color: '#e63946', '&:hover': { backgroundColor: '#ffe0e0' } }}
                              >
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                              <TextField
                                type="number"
                                value={item.quantity}
                                InputProps={{ readOnly: true }}
                                sx={{
                                  width: '50px',
                                  '& input': { textAlign: 'center', fontWeight: 700 },
                                }}
                                size="small"
                              />
                              <IconButton
                                size="small"
                                onClick={() => increaseQuantity(item.id)}
                                sx={{ color: '#e63946', '&:hover': { backgroundColor: '#ffe0e0' } }}
                              >
                                <AddIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                          <TableCell align="right" sx={{ fontWeight: 700, color: '#e63946' }}>
                            ${totalPrice}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              onClick={() => removeFromCart(item.id)}
                              sx={{
                                color: '#d32f2f',
                                '&:hover': { backgroundColor: '#ffebee' },
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* TARJETAS DE PRODUCTOS - MOBILE Y TABLET */}
            <Grid item xs={12} md={8} sx={{ display: { xs: 'block', md: 'none' } }}>
              {cartItems.map((item, index) => {
                const product = getProductInfo(item.id);
                const itemPrice = parseInt(product.price.replace('$', '').replace(',', ''));
                const totalPrice = itemPrice * item.quantity;

                return (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      border: '1px solid #e0e0e0',
                      borderRadius: '12px',
                      '&:hover': { boxShadow: '0 4px 12px rgba(230, 57, 70, 0.15)' },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                      {/* Nombre del producto */}
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          mb: 2,
                          textTransform: 'uppercase',
                          color: '#333',
                        }}
                      >
                        {product.name}
                      </Typography>

                      {/* Controles de cantidad */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, color: '#666', fontSize: '0.9rem' }}>
                          Cantidad:
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => decreaseQuantity(item.id)}
                          sx={{ color: '#e63946' }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <TextField
                          type="number"
                          value={item.quantity}
                          InputProps={{ readOnly: true }}
                          sx={{
                            width: '50px',
                            '& input': { textAlign: 'center', fontWeight: 700 },
                          }}
                          size="small"
                        />
                        <IconButton
                          size="small"
                          onClick={() => increaseQuantity(item.id)}
                          sx={{ color: '#e63946' }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      {/* Precio */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography sx={{ color: '#666', fontSize: '0.9rem' }}>
                          Unitario: ${itemPrice}
                        </Typography>
                        <Typography sx={{ fontWeight: 900, color: '#e63946', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                          Total: ${totalPrice}
                        </Typography>
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
            </Grid>

            {/* RESUMEN DEL CARRITO - SIDEBAR */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={0}
                sx={{
                  border: '2px solid #e63946',
                  borderRadius: '12px',
                  position: { xs: 'relative', md: 'sticky' },
                  top: { md: 20 },
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    mb: 3,
                    textTransform: 'uppercase',
                    color: '#0a0a0a',
                  }}
                >
                  Resumen
                </Typography>

                {/* Detalles */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography sx={{ color: '#666', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Subtotal
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      ${getTotalPrice()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography sx={{ color: '#666', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Envío
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Gratis
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography sx={{ color: '#666', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Impuestos
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      ${Math.round(getTotalPrice() * 0.19)}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

                {/* Total */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      textTransform: 'uppercase',
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      color: '#e63946',
                    }}
                  >
                    ${Math.round(getTotalPrice() * 1.19)}
                  </Typography>
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
                    letterSpacing: 1,
                    padding: { xs: '12px', md: '14px' },
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    borderRadius: '50px',
                    mb: 2,
                    '&:hover': {
                      backgroundColor: '#d62828',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(230, 57, 70, 0.3)',
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
                    color: '#666',
                    borderColor: '#ddd',
                    fontWeight: 700,
                    textTransform: 'uppercase',
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
        )}
      </Container>

      {/* ESTILOS DE ANIMACIONES */}
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

        @media (max-width: 600px) {
          body { font-size: 14px; }
        }
      `}</style>
    </Box>
  );
};

export default Cart;