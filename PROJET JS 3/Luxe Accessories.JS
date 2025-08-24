   // Sample products data
const products = [
    {
        id: 1,
        name: "Golden Drop Earrings",
        price: 89,
        category: "earrings",
        type: "handmade",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 2,
        name: "Silver Chain Necklace",
        price: 125,
        category: "necklaces",
        type: "imported",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 3,
        name: "Beaded Charm Bracelet",
        price: 68,
        category: "bracelets",
        type: "handmade",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 4,
        name: "Ruby Statement Ring",
        price: 98,
        category: "rings",
        type: "imported",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 5,
        name: "Pearl Stud Earrings",
        price: 155,
        category: "earrings",
        type: "handmade",
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 6,
        name: "Rose Gold Heart Pendant",
        price: 78,
        category: "necklaces",
        type: "imported",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 7,
        name: "Diamond Tennis Bracelet",
        price: 245,
        category: "bracelets",
        type: "imported",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 8,
        name: "Vintage Cocktail Ring",
        price: 135,
        category: "rings",
        type: "handmade",
        image: "https://images.unsplash.com/photo-1603561596112-6a132309c76c?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 9,
        name: "Sapphire Hoop Earrings",
        price: 165,
        category: "earrings",
        type: "imported",
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 10,
        name: "Layered Gold Necklace",
        price: 95,
        category: "necklaces",
        type: "handmade",
        image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 11,
        name: "Crystal Charm Bracelet",
        price: 85,
        category: "bracelets",
        type: "handmade",
        image: "https://images.unsplash.com/photo-1506629905607-45cf2ce2a222?w=400&h=400&fit=crop&crop=center"
    },
    {
        id: 12,
        name: "Emerald Solitaire Ring",
        price: 185,
        category: "rings",
        type: "imported",
        image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop&crop=center"
    }
];

let cart = [];
let currentFilter = 'all';

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    loadCartFromStorage();
});

// Display products function
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-2xl luxury-shadow overflow-hidden loading';
        productCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover">
                <div class="absolute top-4 right-4">
                    <span class="text-xs px-3 py-1 rounded-full font-medium ${product.type === 'handmade' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}">
                        ${product.type === 'handmade' ? 'Handcrafted' : 'Designer'}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <h4 class="font-serif font-bold text-lg mb-2 text-gray-900">${product.name}</h4>
                <div class="flex justify-between items-center mb-6">
                    <span class="text-2xl font-bold text-purple-600">€${product.price}</span>
                    <div class="flex items-center text-yellow-400">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span class="text-xs text-gray-500 ml-1">4.8</span>
                    </div>
                </div>
                <button onclick="addToCart(${product.id})" class="w-full luxury-gradient text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                    Add to Cart
                </button>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Filter products function
function filterProducts(filter) {
    currentFilter = filter;
    let filteredProducts = products;

    if (filter !== 'all') {
        if (filter === 'handmade' || filter === 'imported') {
            filteredProducts = products.filter(product => product.type === filter);
        } else {
            filteredProducts = products.filter(product => product.category === filter);
        }
    }

    displayProducts(filteredProducts);

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = 'filter-btn bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 font-medium transition-all duration-300';
    });
    event.target.className = 'filter-btn luxury-gradient text-white px-6 py-3 rounded-full font-medium transition-all duration-300';
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCartUI();
    saveCartToStorage();
    
    // Show success message
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added ✓';
    button.className = 'w-full bg-green-600 text-white py-3 rounded-full font-medium';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.className = 'w-full luxury-gradient text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium';
    }, 1500);
}

// Update cart UI function
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100';
        cartItem.innerHTML = `
            <div class="flex-1">
                <h5 class="font-serif font-medium text-gray-900">${item.name}</h5>
                <p class="text-sm text-gray-600">€${item.price} × ${item.quantity}</p>
            </div>
            <div class="flex items-center space-x-3">
                <button onclick="changeQuantity(${item.id}, -1)" class="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition-colors">-</button>
                <span class="font-medium text-gray-900 min-w-[20px] text-center">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" class="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition-colors">+</button>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2 transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 112 0v3a1 1 0 11-2 0V9zm4 0a1 1 0 112 0v3a1 1 0 11-2 0V9z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `€${total.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8 font-light">Your cart is empty</p>';
    }
}

// Change quantity function
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            saveCartToStorage();
        }
    }
}

// Remove from cart function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('hidden');
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.name} (Qty: ${item.quantity}) - €${item.price * item.quantity}`).join('\n');
    
    const message = `New Order from LUXE Accessories:\n\n${itemsList}\n\nTotal: €${total.toFixed(2)}\n\nThank you for choosing LUXE!`;
    const whatsappUrl = `https://wa.me/33612345678?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Local storage functions
function saveCartToStorage() {
    localStorage.setItem('luxeCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('luxeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Smooth scrolling for navigation links
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

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.parentElement.classList.add('loading');
        });
    });
});