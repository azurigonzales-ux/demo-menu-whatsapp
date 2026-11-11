// ============================================================================
// CONFIGURACIÓN DEL NEGOCIO Y CATÁLOGO (Adaptable en 2 minutos para clientes)
// ============================================================================
const CONFIG = {
  negocio: {
    nombre: "La Brasa Urbana - Burgers & Grill",
    eslogan: "Smash burgers artesanales al carbón, boneless crujientes y sabor callejero premium",
    telefonoWhatsApp: "5215512345678",
    costoEnvio: 35,
    envioGratisDesde: 350,
    tiempoEntrega: "30 min",
    estadoAbierto: true,
    textoEstado: "Abierto ahora • Envío 30 min",
    horarios: "Mar - Dom: 1:00 PM a 11:30 PM",
    direccion: "Av. Insurgentes Sur 1450, Col. Del Valle, CDMX",
    moneda: "MXN",
    logoUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
  },
  categorias: [
    "Todo",
    "Hamburguesas",
    "Boneless & Alitas",
    "Papas & Extras",
    "Bebidas"
  ],
  productos: [
    {
      id: "prod-1",
      nombre: "La Doble Brasa Trufada",
      categoria: "Hamburguesas",
      descripcion: "Doble carne smash de res Certified Angus (200g), queso cheddar inglés fundido, cebolla caramelizada al bourbon, tocino ahumado crujiente y mayonesa de trufa negra en pan brioche artesanal tostado con mantequilla.",
      precio: 185,
      imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Más Vendida",
      popular: true
    },
    {
      id: "prod-2",
      nombre: "Crispy Bacon & Cheddar Melt",
      categoria: "Hamburguesas",
      descripcion: "Carne jugosa a la parrilla con costra crujiente de queso monterey jack, doble porción de tocino grueso glaseado en maple, pepinillos de la casa, aros de cebolla crujientes y salsa secreta Smoky BBQ.",
      precio: 169,
      imagen: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Favorita del Chef",
      popular: true
    },
    {
      id: "prod-3",
      nombre: "Guacamole & Jalapeño Smash",
      categoria: "Hamburguesas",
      descripcion: "Doble carne smash a la parrilla, queso pepper jack derretido, guacamole rústico recién hecho, chiles jalapeños toreados con limón, cebolla morada encurtida y aderezo chipotle cremoso.",
      precio: 175,
      imagen: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Picante Medio",
      popular: false
    },
    {
      id: "prod-4",
      nombre: "Boneless Mango Habanero Crunch (300g)",
      categoria: "Boneless & Alitas",
      descripcion: "Trozos de pechuga 100% pollo marinados en suero de leche y empanizados al momento, bañados en nuestro glaseado artesanal de mango dulce con toque ardiente de habanero. Incluye bastones de apio y aderezo Ranch casero.",
      precio: 159,
      imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Top Crunch",
      popular: true
    },
    {
      id: "prod-5",
      nombre: "Alitas Ahumadas al Carbón (10 pzas)",
      categoria: "Boneless & Alitas",
      descripcion: "Alitas jumbo ahumadas lentamente en leña de mezquite y terminadas a la brasa. Bañadas a elegir en salsa Buffalo Clásica o BBQ Miel Ahumada, acompañadas de aderezo Blue Cheese cremoso.",
      precio: 165,
      imagen: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Al Carbón",
      popular: false
    },
    {
      id: "prod-6",
      nombre: "Papas Brasa Loaded con Pulled Pork",
      categoria: "Papas & Extras",
      descripcion: "Cama generosa de papas corte rústico con piel y sazonador Cajun, bañadas en salsa de queso cheddar caliente, pulled pork ahumado por 8 horas, trocitos de tocino, crema ácida y cebollín fresco.",
      precio: 125,
      imagen: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Para Compartir",
      popular: true
    },
    {
      id: "prod-7",
      nombre: "Aros de Cebolla en Cerveza Artesanal",
      categoria: "Papas & Extras",
      descripcion: "Crujientes aros de cebolla blanca gigante rebosados en tempura de cerveza oscura artesanal, espolvoreados con parmesano y perejil. Acompañados de dip de ajo rostizado y chipotle.",
      precio: 89,
      imagen: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Extra Crispy",
      popular: false
    },
    {
      id: "prod-8",
      nombre: "Malteada Artesanal Oreo & Salted Caramel",
      categoria: "Bebidas",
      descripcion: "Elaborada con helado premium de vainilla de Madagascar, leche entera fría, galletas Oreo trituradas, espiral de caramelo salado artesanal y coronada con crema batida y media galleta.",
      precio: 95,
      imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
      etiqueta: "Dulce Antojo",
      popular: true
    }
  ]
};

// ============================================================================
// LÓGICA REACTIVA DE LA APLICACIÓN (Alpine.js)
// ============================================================================
document.addEventListener("alpine:init", () => {
  Alpine.data("menuApp", () => ({
    config: CONFIG.negocio,
    categorias: CONFIG.categorias,
    productos: CONFIG.productos,

    // Estado de filtrado y búsqueda en tiempo real
    categoriaActiva: "Todo",
    busqueda: "",

    // Estado del carrito: { [productoId]: cantidad }
    carrito: {},

    // Estado visual de feedback / animación de pulso en barra inferior
    animarCarrito: false,
    ultimoProductoModificado: null,

    init() {
      // Recuperar carrito previo de localStorage si existe
      try {
        const guardado = localStorage.getItem("brasa_urbana_carrito_v1");
        if (guardado) {
          this.carrito = JSON.parse(guardado);
        }
      } catch (e) {
        console.warn("No se pudo leer localStorage:", e);
      }
    },

    // Filtrado reactivo por categoría y término de búsqueda
    get productosFiltrados() {
      const termino = this.busqueda.trim().toLowerCase();
      return this.productos.filter((producto) => {
        const coincideCategoria =
          this.categoriaActiva === "Todo" ||
          producto.categoria === this.categoriaActiva;

        const coincideBusqueda =
          !termino ||
          producto.nombre.toLowerCase().includes(termino) ||
          producto.descripcion.toLowerCase().includes(termino) ||
          producto.categoria.toLowerCase().includes(termino) ||
          (producto.etiqueta && producto.etiqueta.toLowerCase().includes(termino));

        return coincideCategoria && coincideBusqueda;
      });
    },

    // Obtener cantidad actual de un producto en el carrito
     obtenerCantidad(productoId) {
      return this.carrito[productoId] || 0;
    },

    // Agregar o incrementar producto
    incrementar(productoId) {
      const actual = this.carrito[productoId] || 0;
      this.carrito = {
        ...this.carrito,
        [productoId]: actual + 1
      };
      this.dispararFeedback(productoId);
      this.guardarCarrito();
    },

    // Decrementar o eliminar producto del carrito
    decrementar(productoId) {
      const actual = this.carrito[productoId] || 0;
      if (actual <= 0) return;

      const nuevoCarrito = { ...this.carrito };
      if (actual === 1) {
        delete nuevoCarrito[productoId];
      } else {
        nuevoCarrito[productoId] = actual - 1;
      }
      this.carrito = nuevoCarrito;
      this.dispararFeedback(productoId);
      this.guardarCarrito();
    },

    // Animación suave en el control del producto y en la barra flotante
    dispararFeedback(productoId) {
      this.ultimoProductoModificado = productoId;
      this.animarCarrito = true;
      setTimeout(() => {
        this.animarCarrito = false;
      }, 300);
      setTimeout(() => {
        if (this.ultimoProductoModificado === productoId) {
          this.ultimoProductoModificado = null;
        }
      }, 350);
    },

    guardarCarrito() {
      try {
        localStorage.setItem("brasa_urbana_carrito_v1", JSON.stringify(this.carrito));
      } catch (e) {
        // Ignorar errores de cuota/privacidad
      }
    },

    // Total de piezas en el carrito
    get totalArticulos() {
      return Object.values(this.carrito).reduce((acc, cant) => acc + cant, 0);
    },

    // Subtotal en MXN
    get subtotalCarrito() {
      return Object.entries(this.carrito).reduce((total, [id, cant]) => {
        const prod = this.productos.find((p) => p.id === id);
        return total + (prod ? prod.precio * cant : 0);
      }, 0);
    },

    // Formateador de moneda en MXN
    formatearPrecio(monto) {
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(monto);
    },

    // Conteo de productos por categoría para mostrar badge sutil
    contarPorCategoria(categoria) {
      if (categoria === "Todo") return this.productos.length;
      return this.productos.filter((p) => p.categoria === categoria).length;
    },

    // Acción del botón "Ver mi pedido" (preparado para conectar con modal de checkout en Iteración 2)
    abrirPedido() {
      // Dispara un evento personalizado o scroll suave; en la Iteración 1 brinda feedback inmediato
      window.dispatchEvent(new CustomEvent("abrir-pedido", {
        detail: {
          articulos: this.totalArticulos,
          subtotal: this.subtotalCarrito
        }
      }));
    }
  }));
});
