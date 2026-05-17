const navPages = [
  { id: "home", title: "Home", href: "index.html" },
  { id: "electronica", title: "Electrónica", href: "categorias/electronica.html" },
  { id: "indumentaria", title: "Indumentaria", href: "categorias/indumentaria.html" },
  { id: "hogar", title: "Hogar", href: "categorias/hogar.html" },
];

const productCards = {
  home: [
    {
      category: "Electrónica",
      title: "Auriculares Nova Wave Studio",
      description: "Sonido claro, almohadillas blandas y autonomía para jornadas largas.",
      price: "$129.999",
      previousPrice: "$159.999",
      label: "Audio",
      mediaTitle: "Nova Wave",
      tone: "tone-sky",
      meta: ["Bluetooth 5.3", "6 cuotas"],
      actionHref: "categorias/electronica.html",
      actionLabel: "Ver detalle",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Indumentaria",
      title: "Buzo North Line Premium",
      description: "Corte recto, interior suave y una paleta sobria para uso diario.",
      price: "$64.900",
      previousPrice: "$74.900",
      label: "Outerwear",
      mediaTitle: "North Line",
      tone: "tone-indigo",
      meta: ["Unisex", "Talles S al XL"],
      actionHref: "categorias/indumentaria.html",
      actionLabel: "Ver detalle",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Hogar",
      title: "Set Aura Kitchen",
      description: "Piezas funcionales para sumar orden y una estética limpia en la cocina.",
      price: "$38.500",
      previousPrice: "$44.000",
      label: "Kitchen",
      mediaTitle: "Aura Set",
      tone: "tone-teal",
      meta: ["3 piezas", "Edición Nova"],
      actionHref: "categorias/hogar.html",
      actionLabel: "Ver detalle",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Electrónica",
      title: "Mouse Orbit Pro",
      description: "Un periférico liviano y preciso para estudio, trabajo o gaming casual.",
      price: "$42.990",
      previousPrice: "$49.990",
      label: "Workspace",
      mediaTitle: "Orbit Pro",
      tone: "tone-navy",
      meta: ["Wireless", "USB-C"],
      actionHref: "categorias/electronica.html",
      actionLabel: "Ver detalle",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    },
  ],
  electronica: [
    {
      category: "Auriculares",
      title: "Nova Wave Studio",
      description: "Perfil urbano, sonido limpio y batería extendida para home office o estudio.",
      price: "$129.999",
      previousPrice: "$159.999",
      label: "Audio",
      mediaTitle: "Nova Wave",
      tone: "tone-sky",
      meta: ["30 h batería", "Bluetooth"],
      actionHref: "categorias/electronica.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Computación",
      title: "Notebook Orbit 14",
      description: "Equipo compacto para cursar, trabajar y resolver tareas diarias con solvencia.",
      price: "$899.900",
      previousPrice: "$949.900",
      label: "Notebook",
      mediaTitle: "Orbit 14",
      tone: "tone-navy",
      meta: ["16 GB RAM", "SSD 512 GB"],
      actionHref: "categorias/electronica.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Accesorios",
      title: "Kit Focus Desk",
      description: "Mouse, pad y soporte para ordenar un escritorio con una presencia visual uniforme.",
      price: "$72.500",
      previousPrice: "$82.500",
      label: "Desk",
      mediaTitle: "Focus Kit",
      tone: "tone-teal",
      meta: ["3 piezas", "USB-C"],
      actionHref: "categorias/electronica.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
    },
  ],
  indumentaria: [
    {
      category: "Remeras",
      title: "Remera Vector Oversize",
      description: "Corte amplio, algodón peinado y una caída pensada para un look urbano actual.",
      price: "$29.900",
      previousPrice: "$34.900",
      label: "Basics",
      mediaTitle: "Vector Tee",
      tone: "tone-indigo",
      meta: ["100% algodón", "Talles S al XL"],
      actionHref: "categorias/indumentaria.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Buzos",
      title: "Buzo North Line Premium",
      description: "Abrigo liviano con interior suave y un frente limpio para combinar fácil.",
      price: "$64.900",
      previousPrice: "$74.900",
      label: "Outerwear",
      mediaTitle: "North Line",
      tone: "tone-navy",
      meta: ["Unisex", "Interior fleece"],
      actionHref: "categorias/indumentaria.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Accesorios",
      title: "Mochila District Daily",
      description: "Un accesorio funcional para facultad, oficina y rutinas urbanas de todos los días.",
      price: "$58.000",
      previousPrice: "$66.500",
      label: "Carry",
      mediaTitle: "District Bag",
      tone: "tone-teal",
      meta: ['15"', "Impermeable"],
      actionHref: "categorias/indumentaria.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
  ],
  hogar: [
    {
      category: "Cocina",
      title: "Juego Lumen Glass",
      description: "Set de vasos con terminación mate y presencia visual ideal para una mesa limpia.",
      price: "$24.500",
      previousPrice: "$29.900",
      label: "Kitchen",
      mediaTitle: "Lumen Glass",
      tone: "tone-teal",
      meta: ["6 piezas", "Vidrio templado"],
      actionHref: "categorias/hogar.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Decoración",
      title: "Lámpara Halo Table",
      description: "Luz cálida y silueta minimalista para escritorios, living o dormitorios.",
      price: "$49.990",
      previousPrice: "$57.500",
      label: "Decor",
      mediaTitle: "Halo Lamp",
      tone: "tone-navy",
      meta: ["LED cálido", "Base metálica"],
      actionHref: "categorias/hogar.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Organización",
      title: "Organizador Modular Stack",
      description: "Sistema práctico para mantener todo visible y ordenado sin perder estética.",
      price: "$31.800",
      previousPrice: "$36.900",
      label: "Order",
      mediaTitle: "Modular Box",
      tone: "tone-sky",
      meta: ["Apilable", "3 módulos"],
      actionHref: "categorias/hogar.html",
      actionLabel: "Comprar",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

function getBasePath() {
  return document.body.dataset.basePath || ".";
}

function resolvePath(path) {
  const basePath = getBasePath();
  return basePath === "." ? path : `${basePath}/${path}`;
}

function isLoggedIn() {
  return localStorage.getItem("novaLoggedIn") === "true";
}

function buildNavbar() {
  const header = document.getElementById("site-header");
  if (!header) {
    return;
  }

  const currentPage = document.body.dataset.page;
  const links = navPages
    .map((page) => {
      const isActive = page.id === currentPage ? "nav-link-active" : "";
      return `<a class="${isActive}" href="${resolvePath(page.href)}">${page.title}</a>`;
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
      <button class="button button-secondary button-logout" type="button" id="logout-button">Cerrar sesión</button>
    </nav>
  `;

  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("novaLoggedIn");
      window.location.href = resolvePath("login.html");
    });
  }
}

function renderProductCards() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) {
    return;
  }

  const currentPage = document.body.dataset.page;
  const products = productCards[currentPage] || [];

  grid.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card" data-product-card>
          <div class="product-media ${product.tone}">
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <div class="product-media-overlay">
              <span class="product-media-label">${product.label}</span>
              <strong>${product.mediaTitle}</strong>
            </div>
          </div>
          <div class="product-body">
            <span class="card-tag">${product.category}</span>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
              ${product.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
            <div class="product-footer">
              <div class="product-price">
                <strong>${product.price}</strong>
                <span>${product.previousPrice}</span>
              </div>
              <a class="button button-small" href="${resolvePath(product.actionHref)}">${product.actionLabel}</a>
            </div>
            <div class="quantity-selector" data-quantity-selector>
              <span class="quantity-label">Cantidad</span>
              <div class="quantity-controls">
                <button class="quantity-button" type="button" data-action="decrease" aria-label="Disminuir cantidad de ${product.title}">-</button>
                <span class="quantity-value" data-quantity-value>${index === 0 ? 1 : 0}</span>
                <button class="quantity-button" type="button" data-action="increase" aria-label="Aumentar cantidad de ${product.title}">+</button>
              </div>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-quantity-selector]").forEach((selector) => {
    const valueElement = selector.querySelector("[data-quantity-value]");
    selector.addEventListener("click", (event) => {
      const button = event.target.closest(".quantity-button");
      if (!button || !valueElement) {
        return;
      }

      const currentValue = Number(valueElement.textContent);
      const nextValue =
        button.dataset.action === "increase"
          ? currentValue + 1
          : Math.max(0, currentValue - 1);

      valueElement.textContent = String(nextValue);
    });
  });
}

function setupLogin() {
  const loginForm = document.getElementById("login-form");
  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("novaLoggedIn", "true");
    window.location.href = "index.html";
  });
}

function redirectLoggedUserFromLogin() {
  if (document.body.dataset.page === "login" && isLoggedIn()) {
    window.location.href = "index.html";
  }
}

function protectPrivatePages() {
  if (document.body.dataset.access !== "private") {
    return;
  }

  if (!isLoggedIn()) {
    window.location.href = resolvePath("login.html");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  redirectLoggedUserFromLogin();
  protectPrivatePages();
  buildNavbar();
  renderProductCards();
  setupLogin();
});
