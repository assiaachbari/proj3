 // ===== GLOBAL VARIABLES =====
let cart = [];
let cartTotal = 0;

// ===== NAVIGATION FUNCTIONS =====
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function scrollToLivraison() {
    document.getElementById('livraison').scrollIntoView({ behavior: 'smooth' });
}

// ===== MENU FILTERING =====
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const filters = document.querySelectorAll('.menu-filter');
    
    // Update filter buttons
    filters.forEach(filter => {
        filter.classList.remove('active', 'bg-purple-600', 'text-white');
        filter.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.add('active', 'bg-purple-600', 'text-white');
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    
    // Filter items with animation
    items.forEach(item => {
        if (category === 'tous' || item.classList.contains(category)) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== CART MANAGEMENT =====
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCartDisplay();
    showAddToCartAnimation(event.target);
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotalElement.textContent = `€${cartTotal.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-8">
                <div class="text-6xl mb-4">🛒</div>
                <p class="text-gray-500">Votre panier est vide</p>
                <p class="text-sm text-gray-400 mt-2">Ajoutez des plats délicieux!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex-1">
                    <p class="font-medium text-gray-800">${item.name}</p>
                    <p class="text-sm text-gray-600">€${item.price.toFixed(2)} x ${item.quantity}</p>
                    <p class="text-sm font-semibold text-purple-600">€${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onclick="removeFromCart('${item.name}')" 
                        class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors"
                        title="Supprimer du panier">
                    🗑️
                </button>
            </div>
        `).join('');
    }
}

function showAddToCartAnimation(button) {
    const originalText = button.innerHTML;
    const originalClasses = button.className;
    
    button.innerHTML = '✓ Ajouté!';
    button.className = button.className.replace('btn-primary', 'bg-green-500 hover:bg-green-600');
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.className = originalClasses;
    }, 1500);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
    
    // Add/remove body scroll lock
    if (!modal.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide!', 'error');
        return;
    }
    
    const deliveryFee = cartTotal >= 35 ? 0 : 3.50;
    const finalTotal = cartTotal + deliveryFee;
    
    const orderSummary = cart.map(item => 
        `${item.name} x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const deliveryText = deliveryFee > 0 ? `\nFrais de livraison: €${deliveryFee.toFixed(2)}` : '\n🎉 Livraison gratuite!';
    
    const confirmMessage = `🍽️ CONFIRMATION DE COMMANDE\n\n${orderSummary}${deliveryText}\n\nTOTAL: €${finalTotal.toFixed(2)}\n\n⏰ Temps de livraison estimé: 25-30 minutes\n📍 Livraison à votre adresse\n\nConfirmer la commande?`;
    
    if (confirm(confirmMessage)) {
        showNotification('Commande confirmée! Merci pour votre confiance 🙏', 'success');
        
        // Reset cart
        cart = [];
        localStorage.removeItem('cart');
        updateCartDisplay();
        toggleCart();
        
        // Simulate order tracking
        setTimeout(() => {
            showNotification('👨‍🍳 Votre commande est en préparation...', 'info');
        }, 2000);
        
        setTimeout(() => {
            showNotification('🚚 Votre commande est en route!', 'info');
        }, 300000); // 5 minutes
    }
}

// ===== DELIVERY CHECKER =====
function checkDelivery() {
    const result = document.getElementById('delivery-result');
    const addresses = document.querySelectorAll('#livraison input');
    
    if (!addresses[0].value.trim() || !addresses[1].value.trim()) {
        showDeliveryResult('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    // Simulate API call
    result.innerHTML = '<div class="text-center"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div><p class="mt-2 text-gray-600">Vérification en cours...</p></div>';
    result.classList.remove('hidden');
    
    setTimeout(() => {
        const isDeliverable = Math.random() > 0.2; // 80% chance of delivery
        
        if (isDeliverable) {
            showDeliveryResult('✅ Parfait! Nous livrons dans votre zone.\n⏰ Temps estimé: 25-30 minutes\n💰 Frais de livraison: €3.50 (Gratuit dès €35)', 'success');
        } else {
            showDeliveryResult('❌ Désolé, nous ne livrons pas encore dans votre zone.\n📞 Contactez-nous au 01 23 45 67 89 pour plus d\'informations', 'error');
        }
    }, 2000);
}

function showDeliveryResult(message, type) {
    const result = document.getElementById('delivery-result');
    result.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    if (type === 'success') {
        result.classList.add('bg-green-100', 'text-green-700');
    } else {
        result.classList.add('bg-red-100', 'text-red-700');
    }
    
    result.innerHTML = message.replace(/\n/g, '<br>');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black'
    };
    
    notification.className += ` ${colors[type]}`;
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-xl">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ===== SMOOTH ANIMATIONS =====
function addFadeInAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// ===== INITIALIZATION =====
function initializeApp() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
    
    // Add fade in animation
    addFadeInAnimation();
    
    // Close cart modal when clicking outside
    document.getElementById('cart-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleCart();
        }
    });
    
    // Close cart modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('cart-modal');
            if (!modal.classList.contains('hidden')) {
                toggleCart();
            }
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('🍽️ Saveurs Maison - Application initialisée avec succès!');
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', initializeApp);

// Prevent form submission on delivery check
document.querySelector('#livraison form').addEventListener('submit', function(e) {
    e.preventDefault();
    checkDelivery();
});

// Add loading state to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('button[onclick*="addToCart"]')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});