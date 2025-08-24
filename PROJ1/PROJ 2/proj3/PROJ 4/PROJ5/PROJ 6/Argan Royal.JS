 // Products data
const products = [
    {
        id: 1,
        name: "Huile d'Argan Pure Bio",
        price: 89,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop&crop=center",
        description: "Huile d'argan 100% pure et bio, pressée à froid selon la tradition berbère",
        category: "Huiles"
    },
    {
        id: 2,
        name: "Ghassoul Royal Premium",
        price: 45,
        originalPrice: 65,
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&crop=center",
        description: "Argile volcanique du Moyen Atlas, purifiante et reminéralisante",
        category: "Soins"
    },
    {
        id: 3,
        name: "Savon Noir Beldi Authentique",
        price: 35,
        originalPrice: 50,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center",
        description: "Savon noir traditionnel aux olives, préparé selon la recette ancestrale",
        category: "Soins"
    },
    {
        id: 4,
        name: "Huile de Cactus Précieuse",
        price: 125,
        originalPrice: 160,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
        description: "Huile rare de graines de figuier de barbarie, anti-âge exceptionnelle",
        category: "Huiles"
    },
    {
        id: 5,
        name: "Eau de Rose de Damas",
        price: 55,
        originalPrice: 75,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=center",
        description: "Hydrolat de rose de Damas, tonique et rafraîchissant naturel",
        category: "Parfums"
    },
    {
        id: 6,
        name: "Henné Royal Naturel",
        price: 25,
        originalPrice: 35,
        image: "https://images.unsplash.com/photo-1512207846876-2c22c2bca97b?w=400&h=400&fit=crop&crop=center",
        description: "Henné pur du Maroc, pour des cheveux brillants et fortifiés",
        category: "Soins"
    }
];

// Cart array
let cart = [];

// Load products function
function loadProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="product-image-container relative">
                <div class="h-64 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" onerror="this.src=''; this.alt='Image non disponible'; this.style.display='none'; this.parentElement.innerHTML='<div class=\\'flex items-center justify-center h-full text-6xl\\'>🏺</div>';">
                </div>
                <div class="product-image-overlay"></div>
                <div class="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    -${Math.round((1 - product.price / product.originalPrice) * 100)}%
                </div>
                <div class="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    BIO
                </div>
            </div>
            <div class="p-8">
                <div class="mb-2">
                    <span class="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                        ${product.category}
                    </span>
                </div>
                <h4 class="font-playfair font-bold text-xl mb-3 text-gray-800">${product.name}</h4>
                <div class="flex items-center mb-3">
                    <div class="flex text-amber-400 text-sm mr-2">★★★★★</div>
                    <span class="text-gray-500 text-sm">(${Math.floor(Math.random() * 50) + 20} avis)</span>
                </div>
                <p class="text-gray-600 mb-6 leading-relaxed">${product.description}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <span class="text-2xl font-bold text-amber-600">${product.price} €</span>
                        <span class="text-lg text-gray-400 line-through">${product.originalPrice} €</span>
                    </div>
                    <button onclick="addToCart(${product.id})" class="premium-button text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification('Produit ajouté au panier !', 'success');
    
    // Add bounce animation to cart icon
    const cartCount = document.getElementById('cart-count');
    cartCount.classList.add('cart-bounce');
    setTimeout(() => cartCount.classList.remove('cart-bounce'), 600);
}

// Update cart UI function
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
        cartFooter.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
        cartFooter.classList.add('hidden');
    }
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center text-gray-500 mt-20">
                <div class="text-6xl mb-4">🛍️</div>
                <p>Votre panier est vide</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <div class="flex items-center space-x-4">
                    <div class="w-16 h-16 rounded-lg overflow-hidden bg-amber-100">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src=''; this.alt='Image non disponible'; this.style.display='none'; this.parentElement.innerHTML='<div class=\\'flex items-center justify-center h-full text-2xl\\'>🏺</div>';">
                    </div>
                    <div>
                        <h5 class="font-playfair font-semibold text-gray-800">${item.name}</h5>
                        <p class="text-sm text-amber-600 font-medium">${item.price} €</p>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 bg-white border border-amber-300 rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors">
                        <span class="text-amber-600 font-bold">-</span>
                    </button>
                    <span class="mx-3 font-semibold text-gray-800">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 bg-white border border-amber-300 rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors">
                        <span class="text-amber-600 font-bold">+</span>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    cartTotal.textContent = `${totalPrice} €`;
}

// Update quantity function
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartUI();
    }
}

// Toggle cart function
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
}

// Checkout function
function checkout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Commande confirmée ! Total: ${total} €`, 'success');
    cart = [];
    updateCartUI();
    toggleCart();
}

// Show notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-600' : 'bg-amber-600';
    notification.className = `fixed top-6 right-6 ${bgColor} text-white px-8 py-4 rounded-xl shadow-2xl z-50 transform translate-x-full transition-all duration-500 font-medium`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 4000);
}

// Scroll to products function
function scrollToProducts() {
    document.getElementById('produits').scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form function
function handleContactForm(event) {
    event.preventDefault();
    showNotification('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success');
    event.target.reset();
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});