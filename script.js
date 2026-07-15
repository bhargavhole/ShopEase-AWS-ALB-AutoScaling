// State management
let cartCount = 0;

// Data Structure for Products (Scalable approach)
const productsData = [
    { id: 1, name: 'Laptop Pro', price: 69999 },
    { id: 2, name: 'Smart Phone Ultra', price: 39999 },
    { id: 3, name: 'Studio Headphones', price: 49999 },
    { id: 4, name: 'Smart Watch Series X', price: 89999 }
];

// Document Elements
const productGrid = document.getElementById('productGrid');
const cartCountEl = document.getElementById('cartCount');
const shopNowBtn = document.getElementById('shopNowBtn');
const cartBtn = document.getElementById('cartBtn');

// Initialize Storefront Elements
function initStore() {
    // Generate Cards Programmatically
    productGrid.innerHTML = productsData.map(product => `
        <div class="card">
            <div>
                <h3>${product.name}</h3>
                <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Function to handle Add to Cart events
function addToCart(productId) {
    const matchedProduct = productsData.find(p => p.id === productId);
    cartCount++;
    cartCountEl.textContent = cartCount;
    
    // Smooth user feedback micro-interactions instead of intrusive popups
    const btn = event.target;
    const initialText = btn.textContent;
    btn.textContent = "Added! ✨";
    btn.style.background = "#6366f1";
    btn.style.color = "#ffffff";
    
    setTimeout(() => {
        btn.textContent = initialText;
        btn.style.background = "";
        btn.style.color = "";
    }, 1000);
}

// Event Listeners
shopNowBtn.addEventListener('click', () => {
    window.scrollTo({
        top: productGrid.offsetTop - 120,
        behavior: 'smooth'
    });
});

cartBtn.addEventListener('click', () => {
    alert(`Items in your cart: ${cartCount}`);
});

// Run Setup on load
document.addEventListener('DOMContentLoaded', initStore);