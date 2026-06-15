const navPages = [
  { id: "home", title: "Home", href: "index.html" },
  { id: "electronica", title: "Electronica", href: "pages/electronica.html" },
  { id: "indumentaria", title: "Indumentaria", href: "pages/indumentaria.html" },
  { id: "hogar", title: "Hogar", href: "pages/hogar.html" },
  { id: "carrito", title: "Carrito", href: "pages/carrito.html" },
];

const PRODUCTS_URL = "data/productos.json";
const USER_STORAGE_KEY = "novaUser";
const CART_STORAGE_KEY = "novaCart";

function getBasePath() {
  return document.body.dataset.basePath || ".";
}

function resolvePath(path) {
  const basePath = getBasePath();
  return basePath === "." ? `./${path}` : `${basePath}/${path}`;
}

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

function readJsonStorage(storage, key, fallback) {
  try {
    return JSON.parse(storage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function getLoggedUser() {
  return readJsonStorage(sessionStorage, USER_STORAGE_KEY, null);
}

function isLoggedIn() {
  return Boolean(getLoggedUser());
}

function getCart() {
  return readJsonStorage(localStorage, CART_STORAGE_KEY, []);
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}

function getCartTotalItems() {
  return getCart().reduce((total, item) => total + item.cantidad, 0);
}

function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = String(getCartTotalItems());
  });
}

function buildNavbar() {
  const header = document.getElementById("site-header");
  if (!header) {
    return;
  }

  const currentPage = document.body.dataset.page;
  const user = getLoggedUser();
  const links = navPages
    .map((page) => {
      const isActive = page.id === currentPage ? "nav-link-active" : "";
      const cartCount =
        page.id === "carrito"
          ? ` <span class="cart-count" data-cart-count>${getCartTotalItems()}</span>`
          : "";

      return `<a class="${isActive}" href="${resolvePath(page.href)}">${page.title}${cartCount}</a>`;
    })
    .join("");

  header.innerHTML = `
    <nav class="navbar">
      <a class="brand" href="${resolvePath("index.html")}" aria-label="Ir al inicio de Tienda Nova">
        <span class="brand-icon">TN</span>
        <span>Tienda Nova</span>
      </a>
      <div class="nav-links">
        ${links}
      </div>
      <div class="session-actions">
        <span class="user-chip">${user?.nombre || "Usuario"}</span>
        <button class="button button-secondary button-logout" type="button" id="logout-button">Cerrar sesion</button>
      </div>
    </nav>
  `;

  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      sessionStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem("novaLoggedIn");
      window.location.href = resolvePath("pages/login.html");
    });
  }
}

async function fetchProducts() {
  const response = await fetch(resolvePath(PRODUCTS_URL));

  if (!response.ok) {
    throw new Error("No se pudo cargar la fuente de productos.");
  }

  return response.json();
}

function getProductsForCurrentPage(products) {
  const currentPage = document.body.dataset.page;

  if (currentPage === "home") {
    return products;
  }

  return products.filter((product) => product.categoria === currentPage);
}

function renderProductCard(product) {
  const previousPrice = product.precioAnterior
    ? `<span>${formatPrice(product.precioAnterior)}</span>`
    : "";

  return `
    <article class="product-card" data-product-card data-product-id="${product.id}">
      <div class="product-media ${product.tono}">
        <img class="product-image" src="${product.imagen}" alt="${product.titulo}">
        <div class="product-media-overlay">
          <span class="product-media-label">${product.etiqueta}</span>
          <strong>${product.tituloMedia}</strong>
        </div>
      </div>
      <div class="product-body">
        <span class="card-tag">${product.categoriaNombre} / ${product.rubro}</span>
        <h3 class="product-title">${product.titulo}</h3>
        <p class="product-description">${product.descripcion}</p>
        <div class="product-meta">
          ${product.detalle.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="product-footer">
          <div class="product-price">
            <strong>${formatPrice(product.precio)}</strong>
            ${previousPrice}
          </div>
        </div>
        <div class="product-actions">
          <div class="quantity-selector" data-quantity-selector>
            <span class="quantity-label">Cantidad</span>
            <div class="quantity-controls">
              <button class="quantity-button" type="button" data-action="decrease" aria-label="Restar unidad de ${product.titulo}">-</button>
              <span class="quantity-value" data-quantity-value>1</span>
              <button class="quantity-button" type="button" data-action="increase" aria-label="Sumar unidad de ${product.titulo}">+</button>
            </div>
          </div>
          <button class="button button-small" type="button" data-add-to-cart>Agregar al carrito</button>
        </div>
      </div>
    </article>
  `;
}

function addProductToCart(product, quantity) {
  const cart = getCart();
  const currentItem = cart.find((item) => item.id === product.id);

  if (currentItem) {
    currentItem.cantidad += quantity;
  } else {
    cart.push({
      id: product.id,
      titulo: product.titulo,
      categoriaNombre: product.categoriaNombre,
      rubro: product.rubro,
      precio: product.precio,
      imagen: product.imagen,
      cantidad: quantity,
    });
  }

  saveCart(cart);
}

function setupProductGridActions(products) {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) {
    return;
  }

  grid.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-button");
    const productCard = event.target.closest("[data-product-card]");

    if (!productCard) {
      return;
    }

    const quantityValue = productCard.querySelector("[data-quantity-value]");

    if (quantityButton && quantityValue) {
      const currentValue = Number(quantityValue.textContent);
      const nextValue =
        quantityButton.dataset.action === "increase"
          ? currentValue + 1
          : Math.max(1, currentValue - 1);

      quantityValue.textContent = String(nextValue);
      return;
    }

    const addButton = event.target.closest("[data-add-to-cart]");
    if (!addButton || !quantityValue) {
      return;
    }

    const product = products.find((item) => item.id === productCard.dataset.productId);
    const quantity = Number(quantityValue.textContent);

    if (!product || quantity < 1) {
      return;
    }

    addProductToCart(product, quantity);
    addButton.textContent = "Agregado";
    window.setTimeout(() => {
      addButton.textContent = "Agregar al carrito";
    }, 1200);
  });
}

async function renderProductCards() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) {
    return;
  }

  grid.innerHTML = `<p class="state-message">Cargando productos...</p>`;

  try {
    const products = await fetchProducts();
    const visibleProducts = getProductsForCurrentPage(products);

    if (!visibleProducts.length) {
      grid.innerHTML = `<p class="state-message">No hay productos cargados para esta categoria.</p>`;
      return;
    }

    grid.innerHTML = visibleProducts.map(renderProductCard).join("");
    setupProductGridActions(visibleProducts);
  } catch (error) {
    grid.innerHTML = `<p class="state-message state-message-error">${error.message}</p>`;
  }
}

function setupLogin() {
  const loginForm = document.getElementById("login-form");
  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get("email").trim();
    const userName = email.split("@")[0] || "Usuario";

    sessionStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify({
        email,
        nombre: userName,
        loggedAt: new Date().toISOString(),
      }),
    );
    localStorage.removeItem("novaLoggedIn");

    window.location.href = resolvePath("index.html");
  });
}

function setupRegister() {
  const registerForm = document.getElementById("register-form");
  if (!registerForm) {
    return;
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const nombre = formData.get("nombre").trim();
    const email = formData.get("email").trim();

    sessionStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify({
        email,
        nombre: nombre || email.split("@")[0] || "Usuario",
        loggedAt: new Date().toISOString(),
      }),
    );

    window.location.href = resolvePath("index.html");
  });
}

function redirectLoggedUserFromLogin() {
  if (document.body.dataset.page === "login" && isLoggedIn()) {
    window.location.href = resolvePath("index.html");
    return true;
  }

  return false;
}

function protectPrivatePages() {
  if (document.body.dataset.access !== "private") {
    return true;
  }

  if (!isLoggedIn()) {
    window.location.href = resolvePath("pages/login.html");
    return false;
  }

  return true;
}

function renderCart() {
  const cartItemsContainer = document.querySelector("[data-cart-items]");
  const cartSummaryContainer = document.querySelector("[data-cart-summary]");

  if (!cartItemsContainer || !cartSummaryContainer) {
    return;
  }

  const cart = getCart();

  if (!cart.length) {
    cartItemsContainer.innerHTML = `
      <article class="cart-empty">
        <h2>Tu carrito esta vacio</h2>
        <p>Agrega productos desde la tienda para verlos aca.</p>
        <a class="button" href="${resolvePath("index.html")}#destacados">Ver productos</a>
      </article>
    `;
    cartSummaryContainer.innerHTML = "";
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item" data-cart-item data-product-id="${item.id}">
          <img class="cart-item-image" src="${item.imagen}" alt="${item.titulo}">
          <div class="cart-item-body">
            <span class="card-tag">${item.categoriaNombre} / ${item.rubro}</span>
            <h2>${item.titulo}</h2>
            <p>${formatPrice(item.precio)} por unidad</p>
            <div class="quantity-selector">
              <span class="quantity-label">Cantidad</span>
              <div class="quantity-controls">
                <button class="quantity-button" type="button" data-cart-action="decrease" aria-label="Restar unidad de ${item.titulo}">-</button>
                <span class="quantity-value">${item.cantidad}</span>
                <button class="quantity-button" type="button" data-cart-action="increase" aria-label="Sumar unidad de ${item.titulo}">+</button>
              </div>
            </div>
          </div>
          <div class="cart-item-total">
            <strong>${formatPrice(item.precio * item.cantidad)}</strong>
            <button class="button button-secondary button-small" type="button" data-remove-from-cart>Eliminar</button>
          </div>
        </article>
      `,
    )
    .join("");

  cartSummaryContainer.innerHTML = `
    <article class="cart-summary">
      <span class="summary-label">Resumen</span>
      <strong>${formatPrice(total)}</strong>
      <p>${totalItems} producto${totalItems === 1 ? "" : "s"} en el carrito.</p>
    </article>
  `;
}

function setupCartPage() {
  const cartItemsContainer = document.querySelector("[data-cart-items]");
  if (!cartItemsContainer) {
    return;
  }

  renderCart();

  cartItemsContainer.addEventListener("click", (event) => {
    const cartItem = event.target.closest("[data-cart-item]");
    if (!cartItem) {
      return;
    }

    const productId = cartItem.dataset.productId;
    let cart = getCart();

    if (event.target.closest("[data-remove-from-cart]")) {
      cart = cart.filter((item) => item.id !== productId);
      saveCart(cart);
      renderCart();
      return;
    }

    const quantityButton = event.target.closest("[data-cart-action]");
    if (!quantityButton) {
      return;
    }

    cart = cart.map((item) => {
      if (item.id !== productId) {
        return item;
      }

      const nextQuantity =
        quantityButton.dataset.cartAction === "increase"
          ? item.cantidad + 1
          : Math.max(1, item.cantidad - 1);

      return { ...item, cantidad: nextQuantity };
    });

    saveCart(cart);
    renderCart();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (redirectLoggedUserFromLogin()) {
    return;
  }

  if (!protectPrivatePages()) {
    return;
  }

  buildNavbar();
  setupLogin();
  setupRegister();
  renderProductCards();
  setupCartPage();
  updateCartCount();
});
