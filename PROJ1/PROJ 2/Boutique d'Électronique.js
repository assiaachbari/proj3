  // Product data
const products = [
    {
        id: 1,
        name: "Montre Classique Or",
        price: 1299,
        category: "homme",
        description: "Montre élégante en or 18 carats avec bracelet en cuir",
        image: "https://www.raymond-weil.com/wp-content/uploads/2019/03/RW_toccata_5985-p-97081.png"
    },
    {
        id: 2,
        name: "Montre Femme Diamant",
        price: 2499,
        category: "femme",
        description: "Montre luxueuse sertie de diamants",
        image: "💎"
    },
    {
        id: 3,
        name: "Montre Sport Titanium",
        price: 899,
        category: "sport",
        description: "Montre sportive résistante à l'eau",
        image: "⏱️"
    },
    {
        id: 4,
        name: "Montre Vintage Homme",
        price: 1599,
        category: "homme",
        description: "Montre vintage avec mouvement automatique",
        image: "🕰️"
    },
    {
        id: 5,
        name: "Montre Femme Rose Gold",
        price: 1899,
        category: "femme",
        description: "Montre élégante en or rose avec bracelet nacré",
        image: "⌚"
    },
    {
        id: 6,
        name: "Montre Sport Chronographe",
        price: 1199,
        category: "sport",
        description: "Chronographe professionnel pour sportifs",
        image: "⏲️"
    }
];

// Cart functionality
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
    
    // Add cart click event
    document.querySelector('.nav-cart').addEventListener('click', openCart);
    
    // Add contact form event
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
});

// Display products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}€</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Ajouter au Panier
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter products
function filterProducts(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display products
    if (category === 'tous') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    updateCartCount();
    showAddToCartAnimation();
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show add to cart animation
function showAddToCartAnimation() {
    const cartIcon = document.querySelector('.nav-cart');
    cartIcon.style.transform = 'scale(1.2)';
    cartIcon.style.background = 'rgba(212, 175, 55, 0.3)';
    
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.background = 'transparent';
    }, 300);
}

// Open cart modal
function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Display cart items
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Votre panier est vide</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #eee;';
            itemElement.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>Quantité: ${item.quantity}</p>
                </div>
                <div>
                    <strong>${item.price * item.quantity}€</strong>
                    <button onclick="removeFromCart(${item.id})" style="margin-left: 1rem; background: #ff4444; color: white; border: none; padding: 0.5rem; border-radius: 3px; cursor: pointer;">Supprimer</button>
                </div>
            `;
            cartItems.appendChild(itemElement);
            total += item.price * item.quantity;
        });
    }
    
    cartTotal.textContent = total + '€';
    modal.style.display = 'block';
}

// Close cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    openCart(); // Refresh cart display
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Merci pour votre commande!\nTotal: ${total}€\n\nVotre commande sera traitée sous 24h.`);
    
    // Clear cart
    cart = [];
    updateCartCount();
    closeCart();
}

// Scroll to products
function scrollToProducts() {
    document.getElementById('produits').scrollIntoView({
        behavior: 'smooth'
    });
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simulate form submission
    alert(`Merci ${name}!\n\nVotre message a été envoyé avec succès.\nNous vous répondrons à ${email} dans les plus brefs délais.`);
    
    // Reset form
    e.target.reset();
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

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('cartModal');
    if (e.target === modal) {
        closeCart();
    }
});