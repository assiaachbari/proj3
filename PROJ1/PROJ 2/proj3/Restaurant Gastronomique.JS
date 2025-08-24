 // Cart functionality
let cart = [];

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add item to cart
function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showSuccessMessage(`${itemName} ajouté au panier`);
}

// Remove item from cart
function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCartDisplay();
    }
}

// Update item quantity
function updateQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemName);
        } else {
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty"><p>Votre panier est vide</p></div>';
        cartCount.textContent = '0';
        cartTotal.textContent = 'Total: 0,00 €';
        return;
    }
    
    let total = 0;
    let totalItems = 0;
    
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;
        
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toFixed(2)} € × ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart('${item.name}')">×</button>
                </div>
            </div>
        `;
    }).join('');
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `Total: ${total.toFixed(2)} €`;
}

// Toggle cart sidebar
function toggleCart() {
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('cartOverlay');
    
    cart.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    setTimeout(() => successDiv.classList.add('show'), 100);
    
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(successDiv)) {
                document.body.removeChild(successDiv);
            }
        }, 300);
    }, 3000);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => `${item.name} × ${item.quantity}`).join('\n');
    
    alert(`Commande confirmée!\n\n${orderSummary}\n\nTotal: ${total.toFixed(2)} €\n\nMerci pour votre confiance. Vous recevrez une confirmation par email.`);
    
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Close cart when clicking outside
function initCartOutsideClick() {
    document.addEventListener('click', function(e) {
        const cart = document.getElementById('cart');
        const cartToggle = document.querySelector('.cart-toggle');
        const overlay = document.getElementById('cartOverlay');
        
        if (!cart.contains(e.target) && !cartToggle.contains(e.target) && cart.classList.contains('open')) {
            cart.classList.remove('open');
            overlay.classList.remove('active');
        }
    });
}

// Initialize animations for menu items
function initMenuAnimations() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    menuItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize fade-in animations for sections
function initFadeInAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Handle mobile menu (if needed in future)
function initMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be expanded later for responsive navigation
}

// Handle form submissions (if any forms are added)
function initFormHandlers() {
    // Placeholder for form handling
    // Can be used for contact forms, newsletter signup, etc.
}

// Handle keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Close cart with Escape key
        if (e.key === 'Escape') {
            const cart = document.getElementById('cart');
            const overlay = document.getElementById('cartOverlay');
            if (cart.classList.contains('open')) {
                cart.classList.remove('open');
                overlay.classList.remove('active');
            }
        }
    });
}

// Handle loading states
function initLoadingStates() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class when page is fully loaded
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
}

// Handle error states for images
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            
            // Create placeholder div
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                background: var(--subtle-gray);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-light);
                font-style: italic;
                min-height: 200px;
            `;
            placeholder.textContent = 'Image non disponible';
            
            // Insert placeholder after the image
            this.parentNode.insertBefore(placeholder, this.nextSibling);
        });
    });
}

// Local storage functions for cart persistence
function saveCartToStorage() {
    try {
        localStorage.setItem('restaurantCart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Could not save cart to localStorage:', e);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('restaurantCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
        }
    } catch (e) {
        console.warn('Could not load cart from localStorage:', e);
        cart = [];
    }
}

// Update cart functions to use storage
const originalAddToCart = addToCart;
addToCart = function(itemName, price) {
    originalAddToCart(itemName, price);
    saveCartToStorage();
};

const originalRemoveFromCart = removeFromCart;
removeFromCart = function(itemName) {
    originalRemoveFromCart(itemName);
    saveCartToStorage();
};

const originalUpdateQuantity = updateQuantity;
updateQuantity = function(itemName, change) {
    originalUpdateQuantity(itemName, change);
    saveCartToStorage();
};

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 10);

// Replace the original scroll event listener
window.removeEventListener('scroll', () => {});
window.addEventListener('scroll', optimizedScrollHandler);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from storage
    loadCartFromStorage();
    
    // Initialize all functionality
    initSmoothScrolling();
    initCartOutsideClick();
    initMenuAnimations();
    initFadeInAnimations();
    initMobileMenu();
    initFormHandlers();
    initKeyboardNavigation();
    initLoadingStates();
    initImageErrorHandling();
    
    // Update cart display
    updateCartDisplay();
    
    console.log('🍽️ Le Délice Royal - Website initialized successfully!');
});

// Handle page visibility changes (pause/resume animations)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause heavy operations
        console.log('Page hidden - pausing operations');
    } else {
        // Page is visible, resume operations
        console.log('Page visible - resuming operations');
    }
});

// Export functions for potential external use
window.RestaurantApp = {
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    checkout,
    cart: () => [...cart] // Return copy of cart
};