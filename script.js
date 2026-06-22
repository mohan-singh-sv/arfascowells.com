const WHATSAPP_NUMBER = '919999999999'; // Replace with your WhatsApp business number, including country code.

const products = [
  { id: 1, name: 'Luxury Earrings', price: 599, icon: '💛' },
  { id: 2, name: 'Gold Bangles', price: 999, icon: '✨' },
  { id: 3, name: 'Diamond Ring', price: 1299, icon: '💍' },
  { id: 4, name: 'Pearl Set', price: 1499, icon: '🤍' },
  { id: 5, name: 'Fashion Bracelet', price: 499, icon: '🌟' },
  { id: 6, name: 'Party Earrings', price: 699, icon: '🥂' }
];


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

function renderProducts() {
  const productGrid = document.getElementById('products');
  if (!productGrid) return;

  productGrid.innerHTML = products.map((product, index) => `
    <article class="card product-card" style="animation-delay:${index * 70}ms">
      <div class="product-icon" aria-hidden="true">${product.icon}</div>
      <h3>${product.name}</h3>
      <p>Beautiful golden/yellow theme accessory for a premium look.</p>
      <p class="price">₹${product.price}</p>
      <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
      <div class="qty-controls" aria-label="Quantity controls for ${product.name}">
        <button type="button" onclick="changeQuantity(${product.id}, -1)">−</button>
        <span class="qty" id="productQty-${product.id}">${getCartQuantity(product.id)}</span>
        <button type="button" onclick="changeQuantity(${product.id}, 1)">+</button>
      </div>
    </article>
  `).join('');
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
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

renderProducts();
renderCart();
updateCartCount();

document.getElementById('whatsappOrder')?.addEventListener('click', sendWhatsAppOrder);
document.getElementById('clearCart')?.addEventListener('click', clearCart);
