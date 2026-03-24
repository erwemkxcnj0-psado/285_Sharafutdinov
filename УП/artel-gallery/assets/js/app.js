const STORAGE_KEY = "artel_cart_v1";
const FAVORITES_KEY = "artel_favorites_v1";

const PRODUCTS = [
  {
    id: "p1",
    title: "Кубистический карнавал",
    price: 78000,
    artist: "Виталий Волович",
    technique: "Акрил",
    base: "Холст",
    size: "80 × 100 см",
    frame: "Без рамы",
    image: "assets/img/1.jpg",
    desc: "Экспрессивная композиция в духе кубизма с динамичной геометрией форм и контрастной цветовой палитрой.",
    rooms: ["гостиная", "кабинет"],
    styleTag: "абстракция",
    palette: "тёплая",
    sizeGroup: "большая",
  },
  {
    id: "p2",
    title: "Сон города и зверей",
    price: 92000,
    artist: "Миша Брусиловский",
    technique: "Масло",
    base: "Холст",
    size: "100 × 100 см",
    frame: "Без рамы",
    image: "assets/img/2.jpg",
    desc: "Фантазийный сюжет с множеством персонажей и архитектурных мотивов. Многослойная живопись с глубокой цветовой гаммой.",
    rooms: ["гостиная", "кабинет"],
styleTag: "современный",
palette: "тёплая",
sizeGroup: "большая",
  },
  {
    id: "p3",
    title: "На перевале",
    price: 34000,
    artist: "Герман Метелев",
    technique: "Масло",
    base: "Холст",
    size: "50 × 70 см",
    frame: "Без рамы",
    image: "assets/img/3.jpg",
    desc: "Пейзаж с фигурой человека на фоне уральских гор. Живописный этюд с атмосферной передачей пространства.",
    rooms: ["кабинет", "гостиная"],
styleTag: "классика",
palette: "холодная",
sizeGroup: "средняя",
  },
  {
    id: "p4",
    title: "Сказка о косе",
    price: 26000,
    artist: "Геннадий Мосин",
    technique: "Акварель",
    base: "Бумага",
    size: "50 × 70 см",
    frame: "Без рамы",
    image: "assets/img/4.jpg",
    desc: "Лирическая сцена с элементами сказочного повествования. Мягкая цветовая палитра и декоративная стилизация.",
    rooms: ["спальня", "гостиная"],
styleTag: "современный",
palette: "тёплая",
sizeGroup: "средняя",
  },
  {
    id: "p5",
    title: "Салют над городом",
    price: 18000,
    artist: "Алексей Рыжков",
    technique: "Гуашь",
    base: "Бумага",
    size: "40 × 60 см",
    frame: "Без рамы",
    image: "assets/img/5.jpg",
    desc: "Городской пейзаж с праздничным фейерверком. Контрастное вечернее небо и архитектурные акценты.",
    rooms: ["гостиная", "кабинет"],
styleTag: "современный",
palette: "холодная",
sizeGroup: "маленькая"
  },
  {
    id: "p6",
    title: "Букет на светлой стене",
    price: 65000,
    artist: "Андрей Елецкий",
    technique: "Масло",
    base: "Холст",
    size: "90 × 90 см",
    frame: "Без рамы",
    image: "assets/img/6.jpg",
    desc: "Яркий цветочный натюрморт с пастозной фактурой мазка. Эмоциональная и насыщенная композиция.",
    rooms: ["спальня", "гостиная"],
styleTag: "классика",
palette: "тёплая",
sizeGroup: "большая"
  },
  {
    id: "p7",
    title: "Весенний сквер",
    price: 22000,
    artist: "Алексей Ефремов",
    technique: "Масло",
    base: "Холст",
    size: "50 × 70 см",
    frame: "Без рамы",
    image: "assets/img/7.jpg",
    desc: "Городской пейзаж с храмом и цветниками. Лёгкая импрессионистическая манера письма.",
    rooms: ["спальня", "гостиная"],
styleTag: "классика",
palette: "нейтральная",
sizeGroup: "средняя"
  },
  {
    id: "p8",
    title: "Я за мир",
    price: 9500,
    artist: "Старик Букашкин",
    technique: "Смешанная техника",
    base: "Картон",
    size: "40 × 60 см",
    frame: "В раме",
    image: "assets/img/8.jpg",
    desc: "Декоративная работа с символическими образами и выразительной «наивной» стилистикой.",
    rooms: ["кухня", "кабинет"],
styleTag: "современный",
palette: "тёплая",
sizeGroup: "маленькая"
  },
  {
    id: "p9",
    title: "Зимний двор",
    price: 28000,
    artist: "Михаил Сажаев",
    technique: "Масло",
    base: "Холст",
    size: "60 × 80 см",
    frame: "Без рамы",
    image: "assets/img/9.jpg",
    desc: "Зимний пейзаж с фигурой человека. Сдержанная цветовая гамма и атмосферное освещение.",
    rooms: ["кабинет", "гостиная"],
styleTag: "классика",
palette: "холодная",
sizeGroup: "средняя"
  },
  {
    id: "p10",
    title: "Красная абстракция",
    price: 41000,
    artist: "Кирилл Бородин",
    technique: "Акрил",
    base: "Холст",
    size: "70 × 90 см",
    frame: "Без рамы",
    image: "assets/img/10.jpg",
    desc: "Динамичная абстрактная композиция с преобладанием красных и зелёных оттенков.",
    rooms: ["гостиная", "кабинет"],
styleTag: "абстракция",
palette: "тёплая",
sizeGroup: "большая"
  },
  {
    id: "p11",
    title: "Старый завод",
    price: 19000,
    artist: "Виктор Корьякин",
    technique: "Масло",
    base: "Холст",
    size: "50 × 70 см",
    frame: "Без рамы",
    image: "assets/img/11.jpg",
    desc: "Городской индустриальный пейзаж. Свободная живописная манера и выразительный колорит.",
    rooms: ["кабинет", "гостиная"],
styleTag: "современный",
palette: "нейтральная",
sizeGroup: "средняя"
  }
];

function getUiLang() {
  if (typeof window.getSiteLanguage === "function") {
    return window.getSiteLanguage() === "en" ? "en" : "ru";
  }
  return document.documentElement?.lang === "en" ? "en" : "ru";
}

function t(text) {
  return typeof window.__t === "function" ? window.__t(text) : text;
}

function rub(n) {
  const locale = getUiLang() === "en" ? "en-US" : "ru-RU";
  return new Intl.NumberFormat(locale).format(n);
}

function resultsText(n) {
  return getUiLang() === "en" ? `Found: ${n}` : `Найдено: ${n}`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(s) {
  return String(s || "").toLowerCase().trim();
}

function getBudgetGroup(price) {
  if (price <= 20000) return "до20000";
  if (price <= 50000) return "до50000";
  return "от50000";
}

function applyInteriorQuery(list, criteria) {
  const active = Object.values(criteria).some(Boolean);
  if (!active) return list;

  const strict = list.filter(p => {
    if (criteria.room && !(p.rooms || []).includes(criteria.room)) return false;
    if (criteria.sizeGroup && p.sizeGroup !== criteria.sizeGroup) return false;
    if (criteria.style && p.styleTag !== criteria.style) return false;
    if (criteria.technique && normalize(p.technique) !== normalize(criteria.technique)) return false;
    if (criteria.budget && getBudgetGroup(p.price) !== criteria.budget) return false;
    if (criteria.palette && p.palette !== criteria.palette) return false;
    return true;
  });

  if (strict.length > 0) return strict;

  return list
    .map(p => {
      let score = 0;

      if (criteria.room && (p.rooms || []).includes(criteria.room)) score += 2;
      if (criteria.sizeGroup && p.sizeGroup === criteria.sizeGroup) score += 1;
      if (criteria.style && p.styleTag === criteria.style) score += 2;
      if (criteria.technique && normalize(p.technique) === normalize(criteria.technique)) score += 2;
      if (criteria.budget && getBudgetGroup(p.price) === criteria.budget) score += 1;
      if (criteria.palette && p.palette === criteria.palette) score += 1;

      return { p, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.p);
}

function initInteriorPage() {
  const form = document.getElementById("interiorPageForm");
  if (!form) return;

  const room = document.getElementById("interiorRoom");
  const size = document.getElementById("interiorSize");
  const style = document.getElementById("interiorStyle");
  const technique = document.getElementById("interiorTechnique");
  const budget = document.getElementById("interiorBudget");
  const palette = document.getElementById("interiorPalette");
  const resetBtn = document.getElementById("interiorResetBtn");

  function renderFiltered() {
    const filtered = applyInteriorQuery(PRODUCTS, {
      room: room?.value || "",
      sizeGroup: size?.value || "",
      style: style?.value || "",
      technique: technique?.value || "",
      budget: budget?.value || "",
      palette: palette?.value || ""
    });

    renderCatalogCards(filtered);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    renderFiltered();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (room) room.value = "";
      if (size) size.value = "";
      if (style) style.value = "";
      if (technique) technique.value = "";
      if (budget) budget.value = "";
      if (palette) palette.value = "";

      renderCatalogCards(PRODUCTS);
    });
  }

  renderCatalogCards(PRODUCTS);
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const cart = raw ? JSON.parse(raw) : {};
    return cart && typeof cart === "object" ? cart : {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function cartCount(cart) {
  return Object.values(cart).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
}

function cartTotal(cart) {
  let total = 0;
  for (const [id, qty] of Object.entries(cart)) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) continue;
    total += p.price * (Number(qty) || 0);
  }
  return total;
}

function addToCart(id, qty = 1) {
  const cart = loadCart();
  cart[id] = (Number(cart[id]) || 0) + qty;
  saveCart(cart);
  updateCartBadge();
}

function setQty(id, qty) {
  const cart = loadCart();
  const n = Number(qty);
  if (!Number.isFinite(n) || n <= 0) {
    delete cart[id];
  } else {
    cart[id] = Math.floor(n);
  }
  saveCart(cart);
  updateCartBadge();
}

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const favs = raw ? JSON.parse(raw) : [];
    return Array.isArray(favs) ? favs : [];
  } catch {
    return [];
  }
}

function saveFavorites(favs) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}

function favoriteCount() {
  return loadFavorites().length;
}

function isFavorite(id) {
  return loadFavorites().includes(id);
}

function toggleFavorite(id) {
  const favs = loadFavorites();
  const index = favs.indexOf(id);

  if (index >= 0) {
    favs.splice(index, 1);
    saveFavorites(favs);
    updateFavoriteBadge();
    return false;
  }

  favs.push(id);
  saveFavorites(favs);
  updateFavoriteBadge();
  return true;
}

function removeFavorite(id) {
  const favs = loadFavorites().filter(x => x !== id);
  saveFavorites(favs);
  updateFavoriteBadge();
}

function updateFavoriteBadge() {
  const el = document.getElementById("favCount");
  if (!el) return;

  const n = favoriteCount();
  if (n > 0) {
    el.textContent = String(n);
    el.style.display = "inline-flex";
  } else {
    el.textContent = "";
    el.style.display = "none";
  }
}

function setActiveNav() {
  const page = document.body?.dataset?.page;
  if (!page) return;

  const link = document.querySelector(`.nav a[data-nav="${page}"]`);
  if (link) link.classList.add("active");

  if (["artists", "cooperation"].includes(page)) {
    const artistsToggle = document.querySelector('.nav .nav-dd__toggle[data-nav="artists"]');
    if (artistsToggle) artistsToggle.classList.add("active");
  }
}

function updateCartBadge() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const n = cartCount(loadCart());
  if (n > 0) {
    el.textContent = String(n);
    el.style.display = "inline-flex";
  } else {
    el.textContent = "";
    el.style.display = "none";
  }
}

function applyCatalogQuery(list, state) {
  const q = normalize(state.q);
  const tech = state.tech;
  const sort = state.sort || "popular";
  const lang = getUiLang();

  let out = list.slice();

  if (q) {
    out = out.filter(p => {
      const baseFields = [p.title, p.artist, p.technique, p.base, p.size, p.frame, p.desc];
      const translatedFields = lang === "en"
        ? baseFields.map(value => t(value))
        : [];
      const hay = [...baseFields, ...translatedFields].map(normalize).join(" ");
      return hay.includes(q);
    });
  }

  if (tech && tech !== "all") {
    out = out.filter(p => normalize(p.technique) === normalize(tech));
  }

  if (sort === "price_asc") out.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") out.sort((a, b) => b.price - a.price);
  if (sort === "title_asc") {
    out.sort((a, b) => t(a.title).localeCompare(t(b.title), lang === "en" ? "en" : "ru"));
  }

  return out;
}

function renderCatalogCards(products) {
  const grid = document.getElementById("catalogGrid");
  const empty = document.getElementById("catalogEmpty");
  const count = document.getElementById("resultsCount");
  if (!grid) return;

  if (count) count.textContent = resultsText(products.length);

  if (products.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  grid.innerHTML = products.map(p => {
    const favActive = isFavorite(p.id);
    const favoriteText = favActive ? `♥ ${t("В избранном")}` : `♡ ${t("В избранное")}`;

    return `
      <article class="product-card--grid" data-id="${p.id}">
        <div class="product-media">
          <img src="${p.image}" alt="${escapeHtml(t(p.title))}" loading="lazy">
          <div class="product-badge">${escapeHtml(t(p.technique))}</div>
        </div>

        <div class="product-body">
          <div class="product-title">${escapeHtml(t(p.title))}</div>
          <div class="product-price">${rub(p.price)} ₽</div>

          <div class="product-meta">
            <div><span class="k">${t("Художник:")}</span> ${escapeHtml(t(p.artist))}</div>
            <div><span class="k">${t("Техника:")}</span> ${escapeHtml(t(p.technique))}</div>
            <div><span class="k">${t("Размер:")}</span> ${escapeHtml(p.size)}</div>
          </div>

          <p class="product-desc">${escapeHtml(t(p.desc))}</p>

          <div class="product-actions">
            <button class="btn btn-primary add-to-cart btn-wide" type="button" data-id="${p.id}">${t("Купить")}</button>
            <button class="btn btn-secondary toggle-favorite btn-favorite ${favActive ? "is-active" : ""}" type="button" data-id="${p.id}">${favoriteText}</button>
            <a class="btn btn-secondary" href="cart.html">${t("В корзину")}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.onclick = (e) => {
    const favBtn = e.target.closest(".toggle-favorite");
    if (favBtn) {
      const id = favBtn.getAttribute("data-id");
      if (!id) return;

      const active = toggleFavorite(id);
      favBtn.classList.toggle("is-active", active);
      favBtn.textContent = active ? `♥ ${t("В избранном")}` : `♡ ${t("В избранное")}`;
      return;
    }

    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    const id = btn.getAttribute("data-id");
    if (!id) return;

    addToCart(id, 1);

    const old = btn.textContent;
    btn.textContent = t("Добавлено");
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = old;
      btn.disabled = false;
    }, 650);
  };
}

function initCatalogFilters() {
  if (document.body?.dataset?.page !== "catalog") return;

  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  const qInput = document.getElementById("qInput");
  const techSelect = document.getElementById("techSelect");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetBtn");

  const state = {
    q: "",
    tech: "all",
    sort: "popular"
  };

  const rerender = () => {
    const filtered = applyCatalogQuery(PRODUCTS, state);
    renderCatalogCards(filtered);
  };

  rerender();

  if (qInput) {
    qInput.addEventListener("input", () => {
      state.q = qInput.value || "";
      rerender();
    });
  }

  if (techSelect) {
    techSelect.addEventListener("change", () => {
      state.tech = techSelect.value || "all";
      rerender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value || "popular";
      rerender();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.q = "";
      state.tech = "all";
      state.sort = "popular";
      if (qInput) qInput.value = "";
      if (techSelect) techSelect.value = "all";
      if (sortSelect) sortSelect.value = "popular";
      rerender();
    });
  }
}

function initCatalogPageFallback() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  if (typeof initCatalogFilters === "function") {
    initCatalogFilters();
  } else {
    renderCatalogCards(PRODUCTS);
  }
}

function renderCartPage() {
  const list = document.getElementById("cartList");
  const totalEl = document.getElementById("cartTotal");
  if (!list || !totalEl) return;

  const cart = loadCart();
  const items = Object.entries(cart)
    .map(([id, qty]) => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return null;
      return { p, qty: Number(qty) || 0 };
    })
    .filter(Boolean)
    .filter(x => x.qty > 0);

  if (items.length === 0) {
    list.innerHTML = `<div class="card">${t("Корзина пуста.")} <a href="catalog.html">${t("Перейти в каталог")}</a></div>`;
    totalEl.textContent = "0";
  } else {
    list.innerHTML = items.map(({ p, qty }) => `
      <div class="cart-item card" data-id="${p.id}">
        <div class="cart-item-media">
          <img src="${p.image}" alt="${escapeHtml(t(p.title))}" loading="lazy">
        </div>

        <div class="cart-item-body">
          <div class="cart-item-title">${escapeHtml(t(p.title))}</div>
          <div class="cart-item-price">${rub(p.price)} ₽</div>

          <div class="cart-item-row">
            <label class="cart-item-label">
              ${t("Кол-во:")}
              <input class="cart-qty" type="number" min="1" step="1" value="${qty}">
            </label>

            <button class="btn btn-secondary cart-remove" type="button">${t("Удалить")}</button>
          </div>

          <div class="cart-item-subtotal">
            ${t("Сумма:")} ${rub(p.price * qty)} ₽
          </div>
        </div>
      </div>
    `).join("");
    totalEl.textContent = rub(cartTotal(cart));
  }

  list.oninput = (e) => {
    const input = e.target.closest(".cart-qty");
    if (!input) return;
    const row = e.target.closest(".cart-item");
    const id = row?.getAttribute("data-id");
    if (!id) return;

    setQty(id, input.value);
    renderCartPage();
  };

  list.onclick = (e) => {
    const btn = e.target.closest(".cart-remove");
    if (!btn) return;
    const row = e.target.closest(".cart-item");
    const id = row?.getAttribute("data-id");
    if (!id) return;

    setQty(id, 0);
    renderCartPage();
  };

  const clearBtn = document.getElementById("clearCartBtn");
  if (clearBtn) {
    clearBtn.onclick = () => {
      saveCart({});
      updateCartBadge();
      renderCartPage();
    };
  }
}

function renderFavoritesPage() {
  const grid = document.getElementById("favoritesGrid");
  const empty = document.getElementById("favoritesEmpty");
  if (!grid) return;

  const favIds = loadFavorites();
  const items = favIds.map(id => PRODUCTS.find(x => x.id === id)).filter(Boolean);

  if (items.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  grid.innerHTML = items.map(p => `
    <article class="product-card--grid" data-id="${p.id}">
      <div class="product-media">
        <img src="${p.image}" alt="${escapeHtml(t(p.title))}" loading="lazy">
        <div class="product-badge">${escapeHtml(t(p.technique))}</div>
      </div>

      <div class="product-body">
        <div class="product-title">${escapeHtml(t(p.title))}</div>
        <div class="product-price">${rub(p.price)} ₽</div>

        <div class="product-meta">
          <div><span class="k">${t("Художник:")}</span> ${escapeHtml(t(p.artist))}</div>
          <div><span class="k">${t("Техника:")}</span> ${escapeHtml(t(p.technique))}</div>
          <div><span class="k">${t("Размер:")}</span> ${escapeHtml(p.size)}</div>
        </div>

        <p class="product-desc">${escapeHtml(t(p.desc))}</p>

        <div class="product-actions">
          <button class="btn btn-primary add-to-cart btn-wide" type="button" data-id="${p.id}">${t("Купить")}</button>
          <button class="btn btn-secondary remove-favorite" type="button" data-id="${p.id}">${t("Убрать")}</button>
          <a class="btn btn-secondary" href="catalog.html">${t("В каталог")}</a>
        </div>
      </div>
    </article>
  `).join("");

  grid.onclick = (e) => {
    const removeBtn = e.target.closest(".remove-favorite");
    if (removeBtn) {
      const id = removeBtn.getAttribute("data-id");
      if (!id) return;

      removeFavorite(id);
      renderFavoritesPage();
      return;
    }

    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    const id = btn.getAttribute("data-id");
    if (!id) return;

    addToCart(id, 1);

    const old = btn.textContent;
    btn.textContent = t("Добавлено");
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = old;
      btn.disabled = false;
    }, 650);
  };
}

function initImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");
  if (!modal || !modalImg) return;

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".product-media img");
    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt || "";
      modal.classList.add("active");
      return;
    }
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof setActiveNav === "function") setActiveNav();
  if (typeof updateCartBadge === "function") updateCartBadge();
  if (typeof updateFavoriteBadge === "function") updateFavoriteBadge();
  if (typeof initHomeInteriorForm === "function") initHomeInteriorForm();
  if (typeof initInteriorPage === "function") initInteriorPage();
  if (typeof initCatalogFilters === "function") initCatalogFilters();
  if (typeof renderCartPage === "function") renderCartPage();
  if (typeof renderFavoritesPage === "function") renderFavoritesPage();
  if (typeof initImageModal === "function") initImageModal();
});