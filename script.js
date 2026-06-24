const WHATSAPP_NUMBER = '918796260625'; // Replace with your WhatsApp business number, including country code.

const categories = [
  {
    id: 'bracelet-kada',
    name: 'Bracelet & Kada',
    tagline: 'Statement wristwear for daily and party wear.',
    image: 'linear-gradient(135deg, rgba(255,245,196,.95), rgba(245,197,66,.9)), radial-gradient(circle at 30% 30%, #fff 0 12%, transparent 13%)',
    icon: '💫',
    subcategories: [
      { id: 'bracelets', name: 'Bracelets', description: 'Charm, chain and fashion bracelets.' },
      { id: 'kada', name: 'Kada', description: 'Bold kada styles with golden shine.' }
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
    categoryId: 'bracelet-kada',
    subcategoryId: 'bracelets',
    name: 'Fashion Bracelet',
    price: 499,
    icon: '🌟',
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
    categoryId: 'bracelet-kada',
    subcategoryId: 'kada',
    name: 'Gold Kada',
    price: 999,
    icon: '✨',
    description: 'Traditional kada with a premium golden finish and bold statement appeal.',
    inBox: '1 Kada',
    traits: 'Long lasting shine, smooth edges, premium finish',
    specs: [
      ['Material', 'Metal Alloy'],
      ['Color', 'Gold'],
      ['Size', 'Free Size'],
      ['Occasion', 'Festive'],
      ['Care', 'Avoid perfume'],
      ['Warranty', 'No']
    ]
  },
  {
    id: 3,
    categoryId: 'makeup',
    subcategoryId: 'lip-makeup',
    name: 'Golden Lip Gloss',
    price: 349,
    icon: '💄',
    description: 'Glossy lip finish with comfortable texture for everyday touch-ups.',
    inBox: '1 Lip Gloss',
    traits: 'Long wearing, smooth texture, glossy extension',
    specs: [
      ['Shade', 'Multicolor'],
      ['Quantity', '8 ml'],
      ['Skin Tone', 'All'],
      ['Organic', 'No'],
      ['Finish', 'Glossy'],
      ['Care', 'Professional']
    ]
  },
  {
    id: 4,
    categoryId: 'makeup',
    subcategoryId: 'face-makeup',
    name: 'Glow Compact',
    price: 649,
    icon: '🌸',
    description: 'Compact face makeup palette for a clean glow and quick finishing touch.',
    inBox: '1 Makeup Compact',
    traits: 'Velvet fine texture, silky blend, travel friendly',
    specs: [
      ['Shade', 'Natural'],
      ['Quantity', '60 g'],
      ['Skin Tone', 'Light/Dusky'],
      ['Organic', 'No'],
      ['Process', 'Paraben Free'],
      ['Care', 'Professional']
    ]
  },
  {
    id: 5,
    categoryId: 'women-bags',
    subcategoryId: 'handbags',
    name: 'Elegant Handbag',
    price: 1499,
    icon: '👜',
    description: 'Spacious handbag with elegant styling for office, daily and outing use.',
    inBox: '1 Handbag',
    traits: 'Premium look, roomy storage, comfortable handle',
    specs: [
      ['Material', 'PU Leather'],
      ['Color', 'Tan/Gold'],
      ['Compartments', '3'],
      ['Closure', 'Zip'],
      ['Occasion', 'Daily'],
      ['Care', 'Wipe clean']
    ]
  },
  {
    id: 6,
    categoryId: 'women-bags',
    subcategoryId: 'party-bags',
    name: 'Party Clutch Bag',
    price: 1199,
    icon: '👛',
    description: 'Compact party clutch designed to pair beautifully with festive outfits.',
    inBox: '1 Clutch Bag',
    traits: 'Lightweight, party ready, elegant shine',
    specs: [
      ['Material', 'Satin/Metal'],
      ['Color', 'Golden'],
      ['Compartments', '1'],
      ['Closure', 'Magnetic'],
      ['Occasion', 'Party'],
      ['Care', 'Keep dry']
    ]
  },
  {
    id: 7,
    categoryId: 'watches',
    subcategoryId: 'women-watches',
    name: 'Classic Women Watch',
    price: 1299,
    icon: '⌚',
    description: 'Classic analog watch with polished details for everyday elegance.',
    inBox: '1 Watch',
    traits: 'Comfort strap, clean dial, daily wear design',
    specs: [
      ['Dial', 'Analog'],
      ['Strap', 'Metal'],
      ['Color', 'Gold'],
      ['Display', 'Quartz'],
      ['Occasion', 'Daily'],
      ['Waterproof', 'No']
    ]
  },
  {
    id: 8,
    categoryId: 'watches',
    subcategoryId: 'party-watches',
    name: 'Crystal Party Watch',
    price: 1699,
    icon: '💎',
    description: 'Crystal-style party watch with sparkle detail for special occasions.',
    inBox: '1 Watch',
    traits: 'Sparkling dial, premium finish, comfortable fit',
    specs: [
      ['Dial', 'Crystal'],
      ['Strap', 'Bracelet'],
      ['Color', 'Rose Gold'],
      ['Display', 'Quartz'],
      ['Occasion', 'Party'],
      ['Waterproof', 'No']
    ]
  }
];

let selectedCategoryId = null;
let selectedSubcategoryId = null;
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
      <image src="${product.icon}" alt="${product.name} icon" class="category-icon" aria-hidden="true">

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

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast('Please add items before sending order');
    return;
  }

  const orderLines = cart.map((item, index) => `${index + 1}. ${item.name} - Qty: ${item.qty} - ₹${item.price * item.qty}`);
  const message = `Hello AR FASCOWELLS, I want to order:\n\n${orderLines.join('\n')}\n\nTotal: ₹${getCartTotal()}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
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
