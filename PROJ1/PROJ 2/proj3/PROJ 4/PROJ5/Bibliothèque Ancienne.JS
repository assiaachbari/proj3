 
// Collection de livres et romans précieux
const products = [
    {
        id: 1,
        name: "Les Misérables - Victor Hugo",
        category: "romans-classiques",
        price: 450,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=center",
        description: "Première édition 1862, reliure cuir d'époque, état exceptionnel",
        year: "1862",
        condition: "Excellent",
        rarity: "★★★★★"
    },
    {
        id: 2,
        name: "Le Petit Prince - Saint-Exupéry",
        category: "livres-rares",
        price: 850,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
        description: "Édition originale 1943 avec illustrations, exemplaire numéroté",
        year: "1943",
        condition: "Parfait",
        rarity: "★★★★★"
    },
    {
        id: 3,
        name: "L'Étranger - Albert Camus",
        category: "premieres-editions",
        price: 320,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
        description: "Première édition Gallimard 1942, collection blanche",
        year: "1942",
        condition: "Très bon",
        rarity: "★★★★☆"
    },
    {
        id: 4,
        name: "Méditations - Marc Aurèle",
        category: "philosophie",
        price: 180,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop&crop=center",
        description: "Traduction française XVIIIe siècle, reliure maroquin",
        year: "1750",
        condition: "Bon",
        rarity: "★★★☆☆"
    },
    {
        id: 5,
        name: "Les Fleurs du Mal - Baudelaire",
        category: "poesie",
        price: 650,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=center",
        description: "Édition originale 1857, exemplaire censuré historique",
        year: "1857",
        condition: "Excellent",
        rarity: "★★★★★"
    },
    {
        id: 6,
        name: "Madame Bovary - Flaubert",
        category: "romans-classiques",
        price: 280,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=600&fit=crop&crop=center",
        description: "Édition illustrée 1885, gravures d'époque",
        year: "1885",
        condition: "Très bon",
        rarity: "★★★☆☆"
    },
    {
        id: 7,
        name: "Ainsi parlait Zarathoustra - Nietzsche",
        category: "philosophie",
        price: 220,
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop&crop=center",
        description: "Première traduction française 1898, annotations manuscrites",
        year: "1898",
        condition: "Bon",
        rarity: "★★★★☆"
    },
    {
        id: 8,
        name: "Alcools - Guillaume Apollinaire",
        category: "poesie",
        price: 380,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
        description: "Édition originale 1913, dédicace de l'auteur",
        year: "1913",
        condition: "Excellent",
        rarity: "★★★★★"
    },
    {
        id: 9,
        name: "Notre-Dame de Paris - Victor Hugo",
        category: "romans-classiques",
        price: 350,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop&crop=center",
        description: "Édition illustrée 1844, gravures sur bois originales",
        year: "1844",
        condition: "Très bon",
        rarity: "★★★★☆"
    },
    {
        id: 10,
        name: "Le Rouge et le Noir - Stendhal",
        category: "premieres-editions",
        price: 420,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=center",
        description: "Première édition 1830, reliure d'époque signée",
        year: "1830",
        condition: "Excellent",
        rarity: "★★★★★"
    },
    {
        id: 11,
        name: "Pensées - Blaise Pascal",
        category: "philosophie",
        price: 290,
        image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop&crop=center",
        description: "Édition Port-Royal 1670, exemplaire historique",
        year: "1670",
        condition: "Bon",
        rarity: "★★★★☆"
    },
    {
        id: 12,
        name: "Correspondances - Baudelaire",
        category: "poesie",
        price: 480,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
        description: "Lettres manuscrites et poèmes inédits, collection privée",
        year: "1860",
        condition: "Parfait",
        rarity: "★★★★★"
    }
];

// Global Variables
let cart = [];
let currentFilter = 'tous';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartDisplay();
    initializeEventListeners();
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Cart button click
    document.getElementById('cartBtn').addEventListener('click', showCart);
    
    // Close modal when clicking outside
    document.getElementById('cartModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCart();
        }
    });
    
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
}

// Display products
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.innerHTML += productCard;
    });
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden card-hover page-turn book-shadow" data-category="${product.category}">
            <div class="book-spine h-2"></div>
            <div class="p-8">
                <div class="text-center mb-6">
                    <div class="mb-4 overflow-hidden rounded-lg">
                        <img src="${product.image}" 
                             alt="${product.name}" 
                             class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
                             onerror="this.src=''; this.alt='Image non disponible'; this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="text-7xl py-12 hidden floating-animation">📚</div>
                    </div>
                    <div class="text-amber-600 text-sm font-medium mb-2">${product.year} • ${product.condition}</div>
                    <h4 class="font-playfair text-xl font-bold mb-3 text-amber-900 leading-tight">${product.name}</h4>
                    <div class="text-amber-500 text-lg mb-3">${product.rarity}</div>
                </div>
                
                <p class="font-crimson text-gray-700 text-sm mb-6 leading-relaxed italic">${product.description}</p>
                
                <div class="border-t border-amber-200 pt-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-right">
                            <div class="text-sm text-gray-500 font-medium">Prix de collection</div>
                            <div class="text-3xl font-bold gold-gradient bg-clip-text text-transparent">${product.price}€</div>
                        </div>
                    </div>
                    <button onclick="addToCart(${product.id})" 
                            class="w-full book-gradient text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1">
                        📚 Ajouter à ma Collection
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('category-active');
        btn.classList.add('bg-white', 'hover:bg-amber-50');
    });
    
    event.target.classList.add('category-active');
    event.target.classList.remove('bg-white', 'hover:bg-amber-50');

    // Filter and display products
    const filteredProducts = category === 'tous' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCartDisplay();
    showAddToCartFeedback(event.target);
}

// Show add to cart feedback
function showAddToCartFeedback(button) {
    const originalText = button.textContent;
    const originalClasses = button.className;
    
    button.textContent = '✅ Ajouté!';
    button.className = originalClasses.replace('book-gradient', 'bg-green-500');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.className = originalClasses;
    }, 1500);
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Add animation to cart count
    if (totalItems > 0) {
        cartCount.classList.add('animate-pulse');
        setTimeout(() => cartCount.classList.remove('animate-pulse'), 1000);
    }
}

// Show cart modal
function showCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Clear previous items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">📚 Votre panier est vide</p>';
        cartTotal.textContent = '0€';
    } else {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            cartItems.innerHTML += createCartItemHTML(item);
        });
        cartTotal.textContent = total + '€';
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Create cart item HTML
function createCartItemHTML(item) {
    return `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex items-center space-x-3">
                <img src="${item.image}" 
                     alt="${item.name}" 
                     class="w-12 h-16 object-cover rounded shadow-sm" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="text-2xl hidden">📚</span>
                <div>
                    <p class="font-medium text-sm text-gray-800">${item.name}</p>
                    <p class="text-gray-600 text-xs">Quantité: ${item.quantity} • ${item.year}</p>
                </div>
            </div>
            <div class="text-right">
                <p class="font-semibold text-amber-800">${item.price * item.quantity}€</p>
                <button onclick="removeFromCart(${item.id})" 
                        class="text-red-500 text-xs hover:text-red-700 hover:underline transition-colors">
                    🗑️ Supprimer
                </button>
            </div>
        </div>
    `;
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showCart(); // Refresh cart display
}

// Close cart modal
function closeCart() {
    document.getElementById('cartModal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Scroll to products
function scrollToProducts() {
    document.getElementById('collection').scrollIntoView({
        behavior: 'smooth'
    });
}

// Scroll to rare books
function scrollToRareBooks() {
    document.getElementById('collection').scrollIntoView({
        behavior: 'smooth'
    });
    // Filter to rare books after scrolling
    setTimeout(() => {
        const rareButton = document.querySelector('[onclick="filterProducts(\'livres-rares\')"]');
        if (rareButton) {
            rareButton.click();
        }
    }, 800);
}

// Search functionality (can be expanded)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Newsletter subscription (demo function)
function subscribeNewsletter(email) {
    if (email && email.includes('@')) {
        alert('Merci pour votre inscription à notre newsletter!');
        return true;
    }
    alert('Veuillez entrer une adresse email valide.');
    return false;
}

// Utility function to format price
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

// Error handling for images
function handleImageError(img) {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) {
        fallback.style.display = 'block';
    }
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);