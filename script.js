const WHATSAPP_NUMBER = '918796260625'; // Replace with your WhatsApp business number, including country code.

const categories = [
  {
    id: 'homedecor',
    name: 'Home Decor & Design',
    tagline: 'Statement wristwear for daily and party wear.',
    image: 'linear-gradient(135deg, rgba(255,245,196,.95), rgba(245,197,66,.9)), radial-gradient(circle at 30% 30%, #fff 0 12%, transparent 13%)',
    icon: '💫',
    subcategories: [
      { id: 'mug', name: 'Mug', description: 'Best and fashion .' },
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    tagline: 'Beauty essentials to complete your look.',
    image: 'linear-gradient(135deg, rgba(255,234,238,.95), rgba(245,197,66,.78)), radial-gradient(circle at 72% 24%, #fff 0 10%, transparent 11%)',
    icon: '💄',
    subcategories: [
      { id: 'lip-makeup', name: 'Lip Makeup', description: 'Glossy picks for a polished finish.' },
      { id: 'face-makeup', name: 'Face Makeup', description: 'Glow-ready beauty accessories.' }
    ]
  },
  {
    id: 'women-bags',
    name: 'Women Bags',
    tagline: 'Elegant handbags for every occasion.',
    image: 'linear-gradient(135deg, rgba(255,248,230,.95), rgba(180,122,18,.78)), radial-gradient(circle at 28% 70%, #fff 0 11%, transparent 12%)',
    icon: '👜',
    subcategories: [
      { id: 'handbags', name: 'Handbags', description: 'Classic carry bags with premium style.' },
      { id: 'party-bags', name: 'Party Bags', description: 'Compact bags for festive outfits.' }
    ]
  },
  {
    id: 'watches',
    name: 'Watches',
    tagline: 'Timeless designs with fashion sparkle.',
    image: 'linear-gradient(135deg, rgba(255,255,255,.96), rgba(245,197,66,.86)), radial-gradient(circle at 75% 72%, #fff 0 13%, transparent 14%)',
    icon: '⌚',
    subcategories: [
      { id: 'women-watches', name: 'Women Watches', description: 'Daily wear watches with elegant detail.' },
      { id: 'party-watches', name: 'Party Watches', description: 'Dress watches for special moments.' }
    ]
  }
];

const products = [
  {
    id: 1,
    categoryId: 'makeup',
    subcategoryId: 'face-makeup',
    name: 'Viral makeup book, lipstick, blush, eyeshadow',
    price: 750,
    icon: '🌟',
    images: [
      'https://res.cloudinary.com/shopviewmohan/image/upload/s--llOFI0H4--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/imm_nyf2e0.png',
      'https://res.cloudinary.com/shopviewmohan/image/upload/s--OMPKeBmt--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/fdedf_ah85gl.jpg'
    ],

    description: 'Adjustable fashion bracelet with golden polish for casual, festive and party looks.',
    inBox: '1 Bracelet',
    traits: 'Skin friendly, lightweight, easy to style',
    specs: [
      ['Material', 'Alloy'],
      ['Color', 'Golden'],
      ['Size', 'Adjustable'],
      ['Occasion', 'Daily/Party'],
      ['Care', 'Keep dry'],
      ['Warranty', 'No']
    ]
  },
  {
    id: 2,
    categoryId: 'homedecor',
    subcategoryId: 'mug',
    name: 'Mug, 200 mug , korean mug',
    price: 90,
    icon: '🌟',
    images: [
      'https://res.cloudinary.com/shopviewmohan/image/upload/s--bJ0dT4yd--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/efefe_spstue.jpg',
      'https://res.cloudinary.com/shopviewmohan/image/upload/s--wrYxO9ZD--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/fef_xsywts.jpg',
      'https://res.cloudinary.com/shopviewmohan/image/upload/s--ouwiNA36--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/fe_e4xltx.jpg',
      'https://res.cloudinary.com/shopviewmohan/image/upload/s--UB84DNUX--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/22_l8rvba.jpg'
    

    ],

    description: '⁠Made from high-quality glass \n'+
'•⁠  ⁠Capacity: 200 ml \n'+
'•⁠  ⁠Lightweight and portable design \n'+
'•⁠  ⁠Suitable for hot and cold beverages \n'+
'•⁠  ⁠Easy to carry and use \n'+
'•⁠  ⁠Perfect for coffee, juice, water, smoothies, and other drinks \n'+
'•⁠  ⁠Ideal for summer refreshment \n'+
'•⁠  ⁠Elegant and modern appearance \n'+
'•⁠  ⁠Easy to clean and maintain \n' +
'Package Includes: \n' +

'•⁠  ⁠1 × Glass Mug \n' +
'•⁠  ⁠1 × Lid \n' +
'•⁠  ⁠1 × Reusable Straw \n' +
'Ideal For: Home, Office, Travel, Café, and Gifting.',
    inBox: '1 ',
    traits: 'Skin friendly, lightweight, easy to style',
    specs: [
      ['Material', 'Alloy'],
    ]
  },
  {
    id: 2,
    categoryId: 'makeup',
    subcategoryId: 'lip-makeup',
    name: 'Color stroke lipstick',
    price: 100,
    icon: '🌟',
    images: [
'https://res.cloudinary.com/shopviewmohan/image/upload/s--oW8nLrZ8--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/WhatsApp_Image_2026-06-24_at_18.17.51_g2axje.jpg',
'https://res.cloudinary.com/shopviewmohan/image/upload/s--GE7KUaTe--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/WhatsApp_Image_2026-06-24_at_18.17.51_1_u1vtmt.jpg',
'https://res.cloudinary.com/shopviewmohan/image/upload/s--JfP-vDMW--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/WhatsApp_Image_2026-06-24_at_18.17.51_2_eolmam.jpg',
'https://res.cloudinary.com/shopviewmohan/image/upload/s--tK46KfnE--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1/arfascoweels/WhatsApp_Image_2026-06-24_at_18.17.52_by32bs.jpg',

    ],

    description: '',
    inBox: '1 ',
    traits: 'Skin friendly, lightweight, easy to style',
    specs: [
      ['Item Form', 'Matte'],
    ]
  },
];

let selectedCategoryId = null;
let selectedSubcategoryId = null;
const productImageIndexes = {};
let cart = normalizeCart(JSON.parse(localStorage.getItem('cart') || '[]'));

function normalizeCart(savedCart) {
  return savedCart.reduce((items, savedItem) => {
    const product = products.find(item => item.id === savedItem.id);
    if (!product) return items;

    const existing = items.find(item => item.id === product.id);
    const quantity = savedItem.qty || 1;
    if (existing) {
      existing.qty += quantity;
    } else {
      items.push({ ...product, qty: quantity });
    }
    return items;
  }, []);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function getCartQuantity(id) {
  const item = cart.find(product => product.id === id);
  return item ? item.qty : 0;
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function getSelectedCategory() {
  return categories.find(category => category.id === selectedCategoryId);
}

function getSelectedSubcategory() {
  const category = getSelectedCategory();
  return category?.subcategories.find(subcategory => subcategory.id === selectedSubcategoryId);
}

function renderCategories() {
  const categoryGrid = document.getElementById('categoryGrid');
  if (!categoryGrid) return;

  categoryGrid.innerHTML = categories.map((category, index) => `
    <button class="category-card ${selectedCategoryId === category.id ? 'active' : ''}" type="button" onclick="selectCategory('${category.id}')" style="animation-delay:${index * 70}ms">
      <span class="category-image" style="background:${category.image}" aria-hidden="true"><span>${category.icon}</span></span>
      <span class="category-name">${category.name}</span>
      <span class="category-tagline">${category.tagline}</span>
    </button>
  `).join('');
}

function renderSubcategories() {
  const subcategorySection = document.getElementById('subcategorySection');
  const subcategoryGrid = document.getElementById('subcategoryGrid');
  const subcategoryTitle = document.getElementById('subcategoryTitle');
  if (!subcategorySection || !subcategoryGrid || !subcategoryTitle) return;

  const category = getSelectedCategory();
  if (!category) {
    subcategorySection.hidden = true;
    subcategoryGrid.innerHTML = '';
    return;
  }

  subcategorySection.hidden = false;
  subcategoryTitle.textContent = `${category.name} Sub Categories`;
  subcategoryGrid.innerHTML = category.subcategories.map((subcategory, index) => `
    <button class="subcategory-card ${selectedSubcategoryId === subcategory.id ? 'active' : ''}" type="button" onclick="selectSubcategory('${subcategory.id}')" style="animation-delay:${index * 70}ms">
      <strong>${subcategory.name}</strong>
      <span>${subcategory.description}</span>
    </button>
  `).join('');
}



function getProductImages(product) {
  return Array.isArray(product.images) && product.images.length > 0 ? product.images : [];
}

function getProductImageIndex(product) {
  const images = getProductImages(product);
  const currentIndex = productImageIndexes[product.id] || 0;
  return images.length ? currentIndex % images.length : 0;
}

function renderProductImageSlider(product) {
  const images = getProductImages(product);
  if (!images.length) {
    return `<div class="product-icon product-image-fallback" aria-hidden="true">${product.icon}</div>`;
  }

  const activeIndex = getProductImageIndex(product);
  const activeImage = images[activeIndex];
  const controls = images.length > 1 ? `
    <button class="slider-btn prev" type="button" onclick="changeProductImage(${product.id}, -1)" aria-label="Previous image for ${product.name}">‹</button>
    <button class="slider-btn next" type="button" onclick="changeProductImage(${product.id}, 1)" aria-label="Next image for ${product.name}">›</button>
  ` : '';
  const dots = images.length > 1 ? `
    <div class="slider-dots" aria-label="Choose image for ${product.name}">
      ${images.map((_, index) => `
        <button class="slider-dot ${index === activeIndex ? 'active' : ''}" type="button" onclick="selectProductImage(${product.id}, ${index})" aria-label="Show image ${index + 1} for ${product.name}"></button>
      `).join('')}
    </div>
  ` : '';

  return `
    <div class="product-slider">
      <img src="${activeImage}" alt="${product.name} image ${activeIndex + 1}" loading="lazy">
      ${controls}
      ${dots}
    </div>
  `;
}

function changeProductImage(productId, direction) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const images = getProductImages(product);
  if (images.length <= 1) return;

  const currentIndex = getProductImageIndex(product);
  productImageIndexes[productId] = (currentIndex + direction + images.length) % images.length;
  renderProducts();
}

function selectProductImage(productId, imageIndex) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const images = getProductImages(product);
  if (!images[imageIndex]) return;

  productImageIndexes[productId] = imageIndex;
  renderProducts();
}

function renderProductDetails(product) {
  return `
    <div class="product-details">
      <div class="detail-tabs" aria-label="Product information tabs">
        <span class="detail-tab active">Specifications</span>
        <span class="detail-tab">Description</span>
      </div>
      <div class="detail-section">
        <h4>In the Box</h4>
        <p>${product.inBox}</p>
      </div>
      <div class="detail-section">
        <h4>Additional Traits</h4>
        <p>${product.traits}</p>
      </div>
      <div class="detail-section">
        <h4>General Traits</h4>
        <p class="model-name">${product.description}</p>
        <dl class="spec-grid">
          ${product.specs.map(([label, value]) => `
            <div class="spec-item">
              <dt>${label}</dt>
              <dd>${value}</dd>
            </div>
          `).join('')}
        </dl>
      </div>
    </div>
  `;
}

function renderProducts() {
  const productGrid = document.getElementById('products');
  const productsTitle = document.getElementById('productsTitle');
  const productsEyebrow = document.getElementById('productsEyebrow');
  const productsIntro = document.getElementById('productsIntro');
  if (!productGrid) return;

  const subcategory = getSelectedSubcategory();
  if (!selectedCategoryId || !selectedSubcategoryId || !subcategory) {
    productGrid.innerHTML = '<div class="content-card empty-cart product-empty">Select a category, then choose a sub category to see matching products.</div>';
    if (productsTitle) productsTitle.textContent = 'Products';
    if (productsEyebrow) productsEyebrow.textContent = 'Step 3';
    if (productsIntro) productsIntro.textContent = 'Products will appear here after your selection.';
    return;
  }

  const filteredProducts = products.filter(product => product.subcategoryId === selectedSubcategoryId);
  if (productsTitle) productsTitle.textContent = subcategory.name;
  if (productsEyebrow) productsEyebrow.textContent = 'Products';
  if (productsIntro) productsIntro.textContent = 'Choose items from this sub category and add them to your cart.';

  productGrid.innerHTML = filteredProducts.map((product, index) => `
    <article class="card product-card" style="animation-delay:${index * 70}ms">
      ${renderProductImageSlider(product)}
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">₹${product.price}</p>
      ${renderProductDetails(product)}
      <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
      <div class="qty-controls" aria-label="Quantity controls for ${product.name}">
        <button type="button" onclick="changeQuantity(${product.id}, -1)">−</button>
        <span class="qty" id="productQty-${product.id}">${getCartQuantity(product.id)}</span>
        <button type="button" onclick="changeQuantity(${product.id}, 1)">+</button>
      </div>
    </article>
  `).join('');
}

function renderShop() {
  renderCategories();
  renderSubcategories();
  renderProducts();
}

function selectCategory(categoryId) {
  selectedCategoryId = categoryId;
  selectedSubcategoryId = null;
  renderShop();
  document.getElementById('subcategorySection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectSubcategory(subcategoryId) {
  selectedSubcategoryId = subcategoryId;
  renderShop();
  document.getElementById('productsHeading')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const cartItem = cart.find(item => item.id === id);

  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  renderProducts();
  renderCart();
  showToast(`${product.name} added to cart`);
}

function changeQuantity(id, amount) {
  const cartItem = cart.find(item => item.id === id);
  if (!cartItem && amount > 0) {
    addToCart(id);
    return;
  }
  if (!cartItem) return;

  cartItem.qty += amount;
  if (cartItem.qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  saveCart();
  renderProducts();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const cartContainer = document.getElementById('cart');
  const totalContainer = document.getElementById('total');
  if (!cartContainer || !totalContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<div class="content-card empty-cart">Your cart is empty. Add your favourite golden accessories first.</div>';
    totalContainer.textContent = 'Total ₹0';
    return;
  }

  cartContainer.innerHTML = cart.map(item => `
    <article class="card cart-item">
      <div>
        <h3>${item.icon} ${item.name}</h3>
        <p>₹${item.price} × ${item.qty} = <strong>₹${item.price * item.qty}</strong></p>
      </div>
      <div class="qty-controls" aria-label="Quantity controls for ${item.name}">
        <button type="button" onclick="changeQuantity(${item.id}, -1)">−</button>
        <span class="qty">${item.qty}</span>
        <button type="button" onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>
    </article>
  `).join('');
  totalContainer.textContent = `Total ₹${getCartTotal()}`;
}

function sendWhatsAppOrderw() {
  if (cart.length === 0) {
    showToast('Please add items before sending order');
    return;
  }

  const orderLines = cart.map((item, index) => `${index + 1}. ${item.name} - Qty: ${item.qty} - ₹${item.price * item.qty}`);
  const message = `Hello AR FASCOWELLS, I want to order:\n\n${orderLines.join('\n')}\n\nTotal: ₹${getCartTotal()}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast('Please add items before sending order');
    return;
  }

  const total = getCartTotal();

  // Minimum order amount check
  if (total < 499) {
    showToast(`Minimum order amount is ₹499. Add ₹${499 - total} more to place your order.`);
    return;
  }

  const orderLines = cart.map(
    (item, index) =>
      `${index + 1}. ${item.name} - Qty: ${item.qty} - ₹${item.price * item.qty}`
  );

  const message = `Hello AR FASCOWELLS, I want to order:\n\n${orderLines.join(
    '\n'
  )}\n\nTotal: ₹${total}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

function clearCart() {
  cart = [];
  saveCart();
  renderProducts();
  renderCart();
  showToast('Cart cleared');
}

renderShop();
renderCart();
updateCartCount();

document.getElementById('whatsappOrder')?.addEventListener('click', sendWhatsAppOrder);
document.getElementById('clearCart')?.addEventListener('click', clearCart);
