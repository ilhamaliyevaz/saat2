/* =============================================
   SAAT BAKİ — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994559406018';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];
let filteredWatches = [];

// ─── WATCHES DATA ──────────────────────────────

const watchesData = [
  {
    id: 'w1',
    name: 'Hublot Big Bang Skelet',
    brand: 'Hublot',
    desc: 'Qara çərçivəli iskelet mexanizmi, titanium korpus. Xüsusi tourbillon indikatoru ilə.',
    price: 4200,
    weight: 'Ø 44mm',
    img: 'images/watch_hublot_black.jpg',
    badge: 'Populyar'
  },
  {
    id: 'w2',
    name: 'Franck Muller Conquistador',
    brand: 'Franck Muller',
    desc: 'Kronometrik funksiyalı, gümüşü çərçivəli klassik erkək saatı. İsveçrə mexanikası.',
    price: 3800,
    weight: 'Ø 42mm',
    img: 'images/watch_franck_muller.jpg',
    badge: null
  },
  {
    id: 'w3',
    name: 'Patek Philippe Nautilus Diamond',
    brand: 'Patek Philippe',
    desc: 'Brilyant bəzəkli Nautilus modeli. İsveçrə premium saatçılığının zirvəsi.',
    price: 18500,
    weight: 'Ø 40mm',
    img: 'images/watch_patek_nautilus_iced.jpg',
    badge: 'Lüks'
  },
  {
    id: 'w4',
    name: 'Tag Heuer Aquaracer Pro',
    brand: 'Tag Heuer',
    desc: 'Mavi diallı, paslanmaz polad qol saatı. 300m suya davamlı dalğıc saatı.',
    price: 1850,
    weight: 'Ø 43mm',
    img: 'images/watch_tag_heuer.jpg',
    badge: null
  },
  {
    id: 'w5',
    name: 'Rolex Datejust Rose Gold',
    brand: 'Rolex',
    desc: 'Qızıl rəngli paslanmaz polad qəlibli, gümüşü diallı Datejust modeli. Əbədi klassika.',
    price: 12800,
    weight: 'Ø 41mm',
    img: 'images/watch_rolex_rose.jpg',
    badge: 'Bestseller'
  },
  {
    id: 'w6',
    name: 'Panerai Radiomir Bronze',
    brand: 'Panerai',
    desc: 'Tünd diallı, bronz korpuslu Radiomir kolleksiyası. Denizçi ruhunda dizayn.',
    price: 6400,
    weight: 'Ø 45mm',
    img: 'images/watch_panerai.jpg',
    badge: null
  },
  {
    id: 'w7',
    name: 'Citizen Promaster Titanium',
    brand: 'Citizen',
    desc: 'Qara diallı, titanium korpuslu Eco-Drive texnologiyalı professional saat.',
    price: 780,
    weight: 'Ø 44mm',
    img: 'images/watch_citizen_dark.jpg',
    badge: null
  },
  {
    id: 'w8',
    name: 'Patek Philippe Calatrava Tourbillon',
    brand: 'Patek Philippe',
    desc: 'Gümüşü diallı tourbillon mexanizmi. Nadir kolleksiya parçası, el işi bitirmə.',
    price: 32000,
    weight: 'Ø 39mm',
    img: 'images/watch_patek_tourbillon.jpg',
    badge: 'Nadir'
  },
  {
    id: 'w9',
    name: 'Patek Philippe Nautilus Green',
    brand: 'Patek Philippe',
    desc: 'Yaşıl teksturalı dial, paslanmaz polad qol bəndi. Moda ikonası.',
    price: 16200,
    weight: 'Ø 40mm',
    img: 'images/watch_patek_nautilus_green.jpg',
    badge: null
  },
  {
    id: 'w10',
    name: 'Tag Heuer Carrera GMT',
    brand: 'Tag Heuer',
    desc: 'Qara diallı kronometrik funksiyalı GMT saat. Professional pilot saatı.',
    price: 2650,
    weight: 'Ø 44mm',
    img: 'images/watch_tag_heuer_carrera.jpg',
    badge: null
  },
  {
    id: 'w11',
    name: 'Cartier Santos Skelet',
    brand: 'Cartier',
    desc: 'Qızıl korpuslu, iskelet mexanizmi görünən Cartier Santos. Fransız elegantlığı.',
    price: 8900,
    weight: 'Ø 40mm',
    img: 'images/watch_cartier_sq.jpg',
    badge: null
  },
  {
    id: 'w12',
    name: 'Kate Spade Holographic',
    brand: 'Kate Spade',
    desc: 'Holografik göy diallı, qara qol bəndli müasir kənar zərif qadın saatı.',
    price: 420,
    weight: 'Ø 36mm',
    img: 'images/watch_kate_spade.jpg',
    badge: null
  },
  {
    id: 'w13',
    name: 'Cartier Ballon Bleu Tourbillon',
    brand: 'Cartier',
    desc: 'Sarı qızıl korpuslu tourbillon indikatoru ilə Ballon Bleu. Ultra lüks.',
    price: 22000,
    weight: 'Ø 42mm',
    img: 'images/watch_cartier_tourbillon.jpg',
    badge: 'Lüks'
  },
  {
    id: 'w14',
    name: 'Hublot Classic Fusion Skeleton',
    brand: 'Hublot',
    desc: 'Gümüşü iskelet mexanizmi, polad qol bəndi. Müasir lüks saatçılığın simvolu.',
    price: 7800,
    weight: 'Ø 42mm',
    img: 'images/watch_hublot_skeleton.jpg',
    badge: null
  },
  {
    id: 'w15',
    name: 'Hublot Big Bang Unico Orange',
    brand: 'Hublot',
    desc: 'Parlaq narıncı ceramika korpus, qara dial. Güclü kronometrik funksiya.',
    price: 9500,
    weight: 'Ø 45mm',
    img: 'images/watch_hublot_orange.jpg',
    badge: 'Yeni'
  },
  {
    id: 'w16',
    name: 'Omega Seamaster Planet Ocean',
    brand: 'Omega',
    desc: 'Mavi-narıncı bəzəkli dalğıc saatı. 600m suya davamlı professional saat.',
    price: 5200,
    weight: 'Ø 43.5mm',
    img: 'images/watch_omega_seamaster.jpg',
    badge: null
  },
  {
    id: 'w17',
    name: 'Franck Muller Vanguard Iced',
    brand: 'Franck Muller',
    desc: 'Tam brilyant qaplı Vanguard kolleksiyası. Qızıl korpus, ağ dial.',
    price: 28000,
    weight: 'Ø 44mm',
    img: 'images/watch_franck_muller_iced.jpg',
    badge: 'VIP'
  },
  {
    id: 'w18',
    name: 'Audemars Piguet Royal Oak Offshore',
    brand: 'Audemars Piguet',
    desc: 'Boz diallı çoxbucaqlı çərçivəli Royal Oak Offshore. Saatçılıq sənəti.',
    price: 19800,
    weight: 'Ø 44mm',
    img: 'images/watch_audemars.jpg',
    badge: null
  },
  {
    id: 'w19',
    name: 'Richard Mille RM 011',
    brand: 'Richard Mille',
    desc: 'Mavi planetar diallı ultra yüngül titanium korpuslu sport saat.',
    price: 48000,
    weight: 'Ø 50mm',
    img: 'images/watch_richard_mille.jpg',
    badge: 'Ultra Lüks'
  },
  {
    id: 'w20',
    name: 'Franck Muller Vanguard Diamond',
    brand: 'Franck Muller',
    desc: 'Tam brilyant bəzəkli, iskelet mexanizm görünən Vanguard. Əsil cəvahirat saat.',
    price: 35000,
    weight: 'Ø 44mm',
    img: 'images/watch_franck_muller_diamond.jpg',
    badge: 'Nadir'
  },
  {
    id: 'w21',
    name: 'Hublot Big Bang Steel',
    brand: 'Hublot',
    desc: 'Polad korpuslu qara diallı Big Bang. Klassik Hublot dəyəri.',
    price: 6900,
    weight: 'Ø 44mm',
    img: 'images/watch_hublot_black2.jpg',
    badge: null
  },
  {
    id: 'w22',
    name: 'Vacheron Constantin Overseas',
    brand: 'Vacheron Constantin',
    desc: 'Altın qol bəndli, qara diallı ultra-premium sport saat. Ən köklü saat markası.',
    price: 24500,
    weight: 'Ø 41mm',
    img: 'images/watch_vacheron.jpg',
    badge: 'Klassik'
  },
  {
    id: 'w23',
    name: 'Versace V-Chrono',
    brand: 'Versace',
    desc: 'Qızıl Yunan motivi bəzəkli kronometrik Versace erkək saatı. İtalyan lüksü.',
    price: 1650,
    weight: 'Ø 44mm',
    img: 'images/watch_versace.jpg',
    badge: null
  },
  {
    id: 'w24',
    name: 'Patek Philippe Grand Complications',
    brand: 'Patek Philippe',
    desc: 'Ağ diallı, tourbillon + ay fazası funksiyalı Grand Complication modeli.',
    price: 42000,
    weight: 'Ø 38mm',
    img: 'images/watch_patek_white.jpg',
    badge: 'Ultra Lüks'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '⌚',
    title: 'Saat Satış Məsləhətçisi',
    type: 'Tam Ştat',
    salary: '800 – 1400 AZN + Komissiya',
    schedule: 'Dəyişən növbə (5/2)',
    requirements: 'Lüks məhsullar üzrə bilik, yaxşı ünsiyyət bacarığı, satış təcrübəsi',
    desc: 'Müştərilərə lüks saat brendlərini tanıtmaq, satış prosesini idarə etmək.',
    duties: 'Müştəri qəbulu, məhsul izahı, sifariş işlənməsi, müştəri məmnuniyyəti'
  },
  {
    id: 'v2',
    icon: '🛵',
    title: 'Kuryer',
    type: 'Yarım / Tam Ştat',
    salary: '500 – 800 AZN + bonus',
    schedule: 'Çevik qrafik',
    requirements: 'Sürücülük vəsiqəsi (B kateqoriyası), Bakı ərazisinə bələdlik',
    desc: 'Sürətli, etibarlı kuryer işə qəbul edirik. Öz nəqliyyatı olan üçün əlavə bonus nəzərdə tutulur.',
    duties: 'Sifarişlərin vaxtında çatdırılması, müştəri ilə ünsiyyət'
  },
  {
    id: 'v3',
    icon: '🔧',
    title: 'Saat Ustası / Texniki Mütəxəssis',
    type: 'Tam Ştat',
    salary: '1000 – 1800 AZN',
    schedule: 'Həftəiçi 09:00–18:00',
    requirements: 'Saatçılıq texnik bilikləri, diqqətlilik, dəqiqlik',
    desc: 'Saatların texniki yoxlanışı, təmiri və baxımı üçün təcrübəli mütəxəssis axtarırıq.',
    duties: 'Saat mexanizmlərinin yoxlanması, təmir, keyfiyyət nəzarəti'
  },
  {
    id: 'v4',
    icon: '📸',
    title: 'Sosial Media Meneceri',
    type: 'Tam Ştat / Uzaqdan',
    salary: '700 – 1100 AZN',
    schedule: 'Çevik saat',
    requirements: 'Foto-video çəkiliş, sosial media idarəsi, kreativ düşüncə',
    desc: 'Instagram və digər platformalarda brend imicinə nail olmaq üçün kreativ menecer axtarırıq.',
    duties: 'Kontent planlaması, foto-video produksiya, subscriber artımı'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }

  currentPage = pageId;

  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

function scrollToContact() {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = watchesData.find(w => w.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice.toLocaleString('az-AZ') + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/watches-grid.jpg'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-brand">${escHtml(item.brand)}</div>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString('az-AZ')} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;

  let msg = '⌚ *YENİ SİFARİŞ — Saat Baki*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name} (${item.brand})\n   ${item.qty} × ${item.price.toLocaleString('az-AZ')} AZN = ${(item.qty * item.price).toLocaleString('az-AZ')} AZN\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *CƏMİ: ${total.toLocaleString('az-AZ')} AZN*\n\n`;
  msg += '📍 Çatdırılma ünvanınızı yazın.';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── FILTER & RENDER WATCHES ──────────────────

function filterProducts() {
  // Get active brand (now uses brand-scroll-chip class)
  const brandBtns = document.querySelectorAll('#brandChips .brand-scroll-chip');
  let activeBrand = 'all';
  brandBtns.forEach(btn => {
    if (btn.classList.contains('active')) activeBrand = btn.dataset.brand;
  });

  // Get active price range
  const priceBtns = document.querySelectorAll('#priceChips .filter-chip');
  let activePriceRange = 'all';
  priceBtns.forEach(btn => {
    if (btn.classList.contains('active')) activePriceRange = btn.dataset.price;
  });

  // Get sort
  const sortVal = document.getElementById('sortSelect').value;

  // Filter
  let result = watchesData.slice();

  if (activeBrand !== 'all') {
    result = result.filter(w => w.brand === activeBrand);
  }

  if (activePriceRange !== 'all') {
    const [minP, maxP] = activePriceRange.split('-').map(Number);
    result = result.filter(w => w.price >= minP && w.price <= maxP);
  }

  // Sort
  if (sortVal === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'name-asc') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  filteredWatches = result;
  renderWatches(result);

  const countEl = document.getElementById('resultsCount');
  if (countEl) {
    countEl.textContent = `${result.length} məhsul tapıldı`;
  }
}

function setFilterChip(groupId, clickedBtn) {
  document.querySelectorAll('#' + groupId + ' .filter-chip').forEach(btn => {
    btn.classList.remove('active');
  });
  clickedBtn.classList.add('active');
  filterProducts();
}

function renderWatches(items) {
  const grid = document.getElementById('grid-watches');
  if (!grid) return;
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = '<div class="no-results">Bu filterlərə uyğun saat tapılmadı.</div>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', item.name);

    const badgeHtml = item.badge
      ? `<div class="card-badge">${escHtml(item.badge)}</div>`
      : '';

    card.innerHTML = `
      <div class="menu-card-img">
        ${badgeHtml}
        <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/watches-grid.jpg'" />
      </div>
      <div class="menu-card-body">
        <div class="menu-card-brand">${escHtml(item.brand)}</div>
        <div class="menu-card-name">${escHtml(item.name)}</div>
        <div class="menu-card-desc">${escHtml(item.desc)}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">${item.price.toLocaleString('az-AZ')} AZN</span>
          <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openProductModal(item));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
    grid.appendChild(card);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price.toLocaleString('az-AZ') + ' AZN';
  document.getElementById('modalWeight').textContent = product.weight;
  const brandEl = document.getElementById('modalBrand');
  if (brandEl) brandEl.textContent = product.brand;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  if (!grid) return;
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    grid.appendChild(card);
  });
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;

  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;

  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Saat Baki*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── ADVANCED FILTER TOGGLE ───────────────────

function toggleAdvFilter() {
  const btn = document.getElementById('advFilterBtn');
  const panel = document.getElementById('advFilterPanel');
  if (!btn || !panel) return;

  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
  panel.setAttribute('aria-hidden', String(isOpen));
}

// ─── BRAND SCROLL CHIP HANDLER ────────────────

document.addEventListener('click', function(e) {
  const brandChip = e.target.closest('.brand-scroll-chip');
  if (brandChip) {
    const track = document.getElementById('brandChips');
    if (!track) return;

    // Deactivate all brand chips
    track.querySelectorAll('.brand-scroll-chip').forEach(c => c.classList.remove('active'));
    brandChip.classList.add('active');

    // Auto-scroll: center the selected chip in the scroll track
    const chipLeft = brandChip.offsetLeft;
    const chipWidth = brandChip.offsetWidth;
    const trackWidth = track.offsetWidth;
    const scrollTarget = chipLeft - (trackWidth / 2) + (chipWidth / 2);
    track.scrollTo({ left: scrollTarget, behavior: 'smooth' });

    filterProducts();
    return;
  }

  // ─── FILTER CHIP CLICK HANDLER (price panel) ──
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;

  const parent = chip.parentElement;
  if (!parent) return;

  // Deactivate siblings
  parent.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  filterProducts();
});

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  filteredWatches = watchesData.slice();
  renderWatches(filteredWatches);
  renderVacancies();
  renderCart();

  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = `${watchesData.length} məhsul tapıldı`;
});
