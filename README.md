# 👟 SneakersTop - E-commerce de Calzado Premium

¡Bienvenido a **SneakersTop**! Una plataforma de comercio electrónico moderna y de alto rendimiento dedicada a los amantes de las zapatillas. Este proyecto combina un diseño inspirado en la cultura del baloncesto (Jordan Brand) con una arquitectura de software robusta y escalable.

---

## 📝 Descripción
SneakersTop es una aplicación web de una sola página (SPA) que ofrece una experiencia de compra fluida para zapatillas de marcas icónicas como Nike, Jordan y Adidas. El proyecto se centra en la velocidad, una interfaz de usuario visualmente impactante y una navegación intuitiva, permitiendo a los usuarios explorar leyendas del deporte y gestionar sus productos favoritos.

## 🚀 Características Principales
* **Interfaz Premium:** Diseño oscuro con acentos en "Rojo Jordan", utilizando Material UI para una estética moderna y profesional.
* **Catálogo Dinámico:** Filtrado y visualización de artículos con animaciones de entrada suaves.
* **Carrito de Compras:** Gestión completa de productos con persistencia de datos mediante `localStorage`.
* **Diseño Responsivo:** Optimizado para dispositivos móviles, tablets y computadoras de escritorio.
* **Navegación Fluida:** Implementación de `react-router-dom` para transiciones sin recargas de página.
* **Perfil de Usuario:** Sección dedicada para gestionar pedidos, favoritos e información personal.

## 🎨 Interfaz Gráfica
La interfaz utiliza una paleta de colores basada en el lujo y la energía deportiva:
* **Colores:** Negro Premium (`#0a0a0a`), Rojo Jordan (`#e63946`) y Blanco Puro.
* **Componentes:** Uso intensivo de **Material UI (MUI)** para botones, contenedores y tipografía.
* **Animaciones:** Efectos de *hover* en tarjetas de productos, transiciones de escala y animaciones de carga personalizadas en CSS.

## 🏗️ Arquitectura del Proyecto
El proyecto sigue una estructura basada en **Features (Funcionalidades)** para facilitar el mantenimiento y la escalabilidad:

```text
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables globales
├── features/        # Módulos principales del negocio
│   ├── Home/        # Landing page y leyendas
│   ├── articles/    # Catálogo de zapatillas
│   ├── cart/        # Lógica y vista del carrito
│   └── aout/        # Sección informativa
├── hooks/           # Lógica compartida (useCart, useLocalStorage)
├── layouts/         # Estructuras de página (MainLayout)
├── App.jsx          # Enrutador principal y componentes base
└── index.css        # Variables de diseño y estilos globales
