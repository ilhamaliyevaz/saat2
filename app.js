/* =============================================
   TIME STORE WOMEN — APP.JS
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
    name: 'Just Cavalli Qızılı Gül Qol Saatı',
    brand: 'Just Cavalli',
    desc: 'Qızılı gül rəngli korpuslu, daşlı bəzəkli Just Cavalli qadın saatı. Zərif dizayn, gündəlik elegantlıq.',
    price: 320,
    weight: 'Ø 36mm',
    img: 'images/watches-grid.jpg',
    badge: 'Populyar'
  },
  {
    id: 'w2',
    name: 'Michael Kors Ağ Qol Saatı',
    brand: 'Michael Kors',
    desc: 'Ağ dəri qayış, ağ korpuslu Michael Kors qadın saatı. Klassik və zərif görünüş.',
    price: 280,
    weight: 'Ø 34mm',
    img: 'images/watches-grid.jpg',
    badge: 'Bestseller'
  },
  {
    id: 'w3',
    name: 'VMP Qızılı Daşlı Qol Saatı',
    brand: 'VMP',
    desc: 'Qızılı çərçivəli, daşlarla bəzədilmiş VMP qadın saatı. Premium görünüş, əyləncəli stil.',
    price: 250,
    weight: 'Ø 35mm',
    img: 'images/watches-grid.jpg',
    badge: 'Yeni'
  },
  {
    id: 'w4',
    name: 'Casio Qadın Saatı',
    brand: 'Casio',
    desc: 'Klassik Casio dizaynı, etibarlı mexanizm. Gündəlik istifadə üçün ideal.',
    price: 180,
    weight: 'Ø 32mm',
    img: 'images/watches-grid.jpg',
    badge: null
  },
  {
    id: 'w5',
    name: 'Qızılı Zəncirli Bilərzik Saat',
    brand: 'Just Cavalli',
    desc: 'Qızılı zəncir qol bəndli, incə dizaynlı qadın saatı. Lüks görünüş.',
    price: 340,
    weight: 'Ø 28mm',
    img: 'images/watches-grid.jpg',
    badge: 'Lüks'
  },
  {
    id: 'w6',
    name: 'Michael Kors Qızılı Kronometr',
    brand: 'Michael Kors',
    desc: 'Qızılı polad qol bəndli, ağ diallı Michael Kors saat. Şəhər həyatı üçün mükəmməl.',
    price: 350,
    weight: 'Ø 38mm',
    img: 'images/watches-grid.jpg',
    badge: 'Populyar'
  },
  {
    id: 'w7',
    name: 'Rəngli Bilərzik Saat Dəsti',
    brand: 'VMP',
    desc: 'Rəngli daşlı bilərziklər ilə birlikdə incə qol saatı. Şənlik görünüş üçün ideal.',
    price: 220,
    weight: 'Ø 30mm',
    img: 'images/watches-grid.jpg',
    badge: 'Dəst'
  },
  {
    id: 'w8',
    name: 'Yaşıl Kvadrat Qadın Saatı',
    brand: 'VMP',
    desc: 'Yaşıl rəngli diallı, qızılı çərçivəli kvadrat qadın saatı. Unikal dizayn.',
    price: 290,
    weight: 'Ø 30×33mm',
    img: 'images/watches-grid.jpg',
    badge: 'Nadir'
  },
  {
    id: 'w9',
    name: 'Rolex Qadın Lady-Datejust',
    brand: 'Rolex',
    desc: 'Klassik Rolex Lady-Datejust qadın saatı. Əbədi elegantlıq, mükəmməl keyfiyyət.',
    price: 8500,
    weight: 'Ø 28mm',
    img: 'images/watches-grid.jpg',
    badge: 'VIP'
  },
  {
    id: 'w10',
    name: 'Daşlı Bəzəkli Gümüşü Saat',
    brand: 'Just Cavalli',
    desc: 'Gümüşü çərçivəli, brilyant daşları ilə bəzədilmiş qadın saatı. Xüsusi gecələr üçün.',
    price: 380,
    weight: 'Ø 34mm',
    img: 'images/watches-grid.jpg',
    badge: 'Xüsusi'
  },
  {
    id: 'w11',
    name: 'Versace Medusa Qadın Saatı',
    brand: 'Versace',
    desc: 'Medusa simvolu bəzəkli, qızılı korpuslu Versace qadın saatı. İtalyan lüksü.',
    price: 1200,
    weight: 'Ø 36mm',
    img: 'images/watches-grid.jpg',
    badge: 'Lüks'
  },
  {
    id: 'w12',
    name: 'Cartier Panthere Qadın Saatı',
    brand: 'Cartier',
    desc: 'Qızılı gül rəngli, incə zəncir qol bəndli Cartier Panthere. Fransız lüksünün simvolu.',
    price: 5800,
    weight: 'Ø 27×37mm',
    img: 'images/watches-grid.jpg',
    badge: 'Premium'
  },
  {
    id: 'w13',
    name: 'Omega Constellation Qadın',
    brand: 'Omega',
    desc: 'Qızılı korpuslu, dərili qayışlı Omega Constellation. Klassik elegantlıq.',
    price: 3200,
    weight: 'Ø 29mm',
    img: 'images/watches-grid.jpg',
    badge: null
  },
  {
    id: 'w14',
    name: 'Franck Muller Vanguard Qadın',
    brand: 'Franck Muller',
    desc: 'Daşlı bəzəkli, rəngli diallı Franck Muller qadın saatı. Unikal İsveçrə incəliyi.',
    price: 4500,
    weight: 'Ø 32mm',
    img: 'images/watches-grid.jpg',
    badge: 'Nadir'
  },
  {
    id: 'w15',
    name: 'Patek Philippe Calatrava Qadın',
    brand: 'Patek Philippe',
    desc: 'Ağ diallı, qızılı korpuslu Patek Philippe qadın saatı. Saatçılığın ən yüksək zirvəsi.',
    price: 14000,
    weight: 'Ø 33mm',
    img: 'images/watches-grid.jpg',
    badge: 'Ultra Lüks'
  },
  {
    id: 'w16',
    name: 'Qızılı Apple Watch Qadın',
    brand: 'VMP',
    desc: 'Qızılı çərçivəli, zərif görünüşlü ağıllı saat. Müasir texnologiya, şık dizayn.',
    price: 420,
    weight: '41mm',
    img: 'images/watches-grid.jpg',
    badge: 'Smart'
  },
  {
    id: 'w17',
    name: 'Gümüşü Zəncirli Qadın Saatı',
    brand: 'Michael Kors',
    desc: 'Gümüşü zəncir qol bəndli, incə korpuslu Michael Kors qadın saatı. Gündəlik şıqlıq.',
    price: 310,
    weight: 'Ø 32mm',
    img: 'images/watches-grid.jpg',
    badge: null
  },
  {
    id: 'w18',
    name: 'Daşlı Sarmaşıq Saat Dəsti',
    brand: 'Just Cavalli',
    desc: 'Qızılı daşlı bilərzik saat dəsti. Tam komplekt görünüş üçün ideal.',
    price: 260,
    weight: 'Ø 28mm',
    img: 'images/watches-grid.jpg',
    badge: 'Dəst'
  },
  {
    id: 'w19',
    name: 'VMP Qızılı Böyük Korpuslu Saat',
    brand: 'VMP',
    desc: 'Qızılı rəngli geniş korpuslu, iri diallı qadın saatı. Bold stil, güclü görünüş.',
    price: 270,
    weight: 'Ø 40mm',
    img: 'images/watches-grid.jpg',
    badge: null
  },
  {
    id: 'w20',
    name: 'Just Cavalli Qızılı Tam Daşlı',
    brand: 'Just Cavalli',
    desc: 'Tam brilyant bəzəkli, qızılı qol bəndli Just Cavalli lüks qadın saatı.',
    price: 450,
    weight: 'Ø 34mm',
    img: 'images/watches-grid.jpg',
    badge: 'Premium'
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
    requirements: 'Qadın aksessuarları üzrə bilik, yaxşı ünsiyyət bacarığı, satış təcrübəsi',
    desc: 'Müştərilərə qadın saat brendlərini tanıtmaq, satış prosesini idarə etmək.',
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

  let msg = '⌚ *YENİ SİFARİŞ — Time Store Women*\n\n';
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
  const msg = `👋 *Vakansiyaya Müraciət — Time Store Women*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
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
