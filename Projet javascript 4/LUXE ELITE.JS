 // Premium luxury items with real images
const luxuryItems = [
    {
        id: 1,
        name: "Rolex Submariner Date 126610LV",
        category: "watches",
        price: "$18,500",
        originalPrice: "$20,000",
        image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        description: "Iconic 'Hulk' Submariner with green dial and bezel. Unworn condition with full box, papers, and warranty card.",
        year: "2023",
        condition: "New",
        brand: "Rolex",
        model: "Submariner",
        features: ["Ceramic Bezel", "Automatic Movement", "Water Resistant 300m", "Full Set"]
    },
    {
        id: 2,
        name: "Abstract Expressionist Masterpiece",
        category: "art",
        price: "$125,000",
        originalPrice: "$140,000",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        description: "Stunning abstract painting by renowned contemporary artist. Museum-quality piece with full provenance documentation.",
        year: "2019",
        condition: "Excellent",
        artist: "Contemporary Master",
        medium: "Oil on Canvas",
        features: ["Certificate of Authenticity", "Museum Provenance", "Professional Framing", "Insurance Appraisal"]
    },
    {
        id: 3,
        name: "Ferrari 488 GTB",
        category: "cars",
        price: "$285,000",
        originalPrice: "$320,000",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        description: "Pristine Ferrari 488 GTB in Rosso Corsa with carbon fiber package. Only 8,500 miles, full service history.",
        year: "2020",
        condition: "Excellent",
        brand: "Ferrari",
        model: "488 GTB",
        features: ["Carbon Fiber Package", "Full Service History", "Premium Sound", "Racing Seats"]
    },
    {
        id: 4,
        name: "Patek Philippe Nautilus 5711/1A",
        category: "watches",
        price: "$85,000",
        originalPrice: "$95,000",
        image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        description: "The holy grail of luxury watches. Discontinued Nautilus in stainless steel with blue dial. Complete set.",
        year: "2021",
        condition: "Like New",
        brand: "Patek Philippe",
        model: "Nautilus",
        features: ["Discontinued Model", "Blue Dial", "Stainless Steel", "Complete Set"]
    },
    {
        id: 5,
        name: "Lamborghini Huracán EVO",
        category: "cars",
        price: "$245,000",
        originalPrice: "$275,000",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        description: "Stunning Huracán EVO in Verde Mantis with Alcantara interior. Performance package included.",
        year: "2022",
        condition: "Like New",
        brand: "Lamborghini",
        model: "Huracán EVO",
        features: ["Performance Package", "Alcantara Interior", "Carbon Accents", "Sport Exhaust"]
    },
    {
        id: 6,
        name: "Contemporary Sculpture Collection",
        category: "art",
        price: "$45,000",
        originalPrice: "$52,000",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        description: "Exquisite bronze sculpture by acclaimed contemporary artist. Limited edition piece with certificate.",
        year: "2020",
        condition: "Perfect",
        artist: "Modern Sculptor",
        medium: "Bronze",
        features: ["Limited Edition", "Signed & Numbered", "Certificate Included", "Museum Quality"]
    }
];

// Display featured items with enhanced design
function displayFeaturedItems() {
    const container = document.getElementById('featured-items');
    container.innerHTML = '';
    
    luxuryItems.forEach(item => {
        const discount = Math.round(((parseFloat(item.originalPrice.replace(/[$,]/g, '')) - parseFloat(item.price.replace(/[$,]/g, ''))) / parseFloat(item.originalPrice.replace(/[$,]/g, ''))) * 100);
        
        const itemCard = `
            <div class="luxury-card rounded-3xl overflow-hidden shadow-2xl hover-lift cursor-pointer premium-shadow" onclick="showItemDetail(${item.id})">
                <div class="relative h-72 overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div class="absolute top-4 left-4 flex space-x-2">
                        ${item.verified ? '<div class="verified-badge bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"><span>✓</span><span>AUTHENTICATED</span></div>' : ''}
                        ${discount > 0 ? `<div class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">-${discount}%</div>` : ''}
                    </div>
                    <div class="absolute top-4 right-4">
                        <button class="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all">
                            <span class="text-white">♡</span>
                        </button>
                    </div>
                </div>
                <div class="p-8">
                    <div class="flex items-start justify-between mb-3">
                        <div>
                            <h3 class="font-playfair text-xl font-bold mb-1">${item.name}</h3>
                            <p class="text-gray-500 text-sm">${item.brand || item.artist} • ${item.year}</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">${item.description}</p>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-2">
                            <span class="font-bold text-2xl text-green-600">${item.price}</span>
                            ${discount > 0 ? `<span class="text-gray-400 line-through text-sm">${item.originalPrice}</span>` : ''}
                        </div>
                        <span class="text-xs px-3 py-1 bg-gray-100 rounded-full font-semibold">${item.condition}</span>
                    </div>
                    <button class="w-full gold-gradient py-3 rounded-xl text-black font-bold hover:opacity-90 transition-all shadow-lg">
                        View Details
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += itemCard;
    });
}

// Enhanced category display
function showCategory(category) {
    const categoryItems = luxuryItems.filter(item => item.category === category);
    const categoryNames = {
        watches: 'Luxury Timepieces',
        cars: 'Exotic Supercars',
        art: 'Fine Art & Collectibles'
    };
    
    // Create a more sophisticated notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-6 bg-white rounded-2xl shadow-2xl p-6 z-50 max-w-sm border border-gray-200';
    notification.innerHTML = `
        <div class="flex items-center space-x-3 mb-3">
            <div class="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <span class="text-black font-bold">✓</span>
            </div>
            <h4 class="font-playfair text-lg font-bold">${categoryNames[category]}</h4>
        </div>
        <p class="text-gray-600 text-sm mb-4">Showing ${categoryItems.length} authenticated items in this category</p>
        <button onclick="this.parentElement.remove()" class="w-full gold-gradient py-2 rounded-lg text-black font-semibold text-sm">
            Browse Collection
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Enhanced item detail modal
function showItemDetail(itemId) {
    const item = luxuryItems.find(i => i.id === itemId);
    const modal = document.getElementById('item-modal');
    const modalContent = document.getElementById('modal-content');
    
    const discount = Math.round(((parseFloat(item.originalPrice.replace(/[$,]/g, '')) - parseFloat(item.price.replace(/[$,]/g, ''))) / parseFloat(item.originalPrice.replace(/[$,]/g, ''))) * 100);
    
    modalContent.innerHTML = `
        <div class="relative">
            <button onclick="closeModal()" class="absolute top-6 right-6 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10 shadow-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                </svg>
            </button>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div class="relative h-96 lg:h-auto">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    <div class="absolute top-6 left-6 flex space-x-2">
                        ${item.verified ? '<div class="verified-badge bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2"><span>✓</span><span>AUTHENTICATED</span></div>' : ''}
                        ${discount > 0 ? `<div class="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">SAVE ${discount}%</div>` : ''}
                    </div>
                </div>
                <div class="p-8 lg:p-12">
                    <div class="mb-6">
                        <h2 class="font-playfair text-4xl font-bold mb-2">${item.name}</h2>
                        <p class="text-gray-600 text-lg">${item.brand || item.artist} • ${item.year}</p>
                    </div>
                    
                    <div class="flex items-center space-x-4 mb-8">
                        <span class="font-bold text-4xl text-green-600">${item.price}</span>
                        ${discount > 0 ? `<span class="text-gray-400 line-through text-xl">${item.originalPrice}</span>` : ''}
                        ${discount > 0 ? `<span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">Save ${discount}%</span>` : ''}
                    </div>
                    
                    <div class="grid grid-cols-2 gap-6 mb-8">
                        <div class="space-y-4">
                            <div class="flex justify-between border-b border-gray-200 pb-2">
                                <span class="font-semibold text-gray-700">Year:</span>
                                <span class="font-medium">${item.year}</span>
                            </div>
                            <div class="flex justify-between border-b border-gray-200 pb-2">
                                <span class="font-semibold text-gray-700">Condition:</span>
                                <span class="font-medium">${item.condition}</span>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex justify-between border-b border-gray-200 pb-2">
                                <span class="font-semibold text-gray-700">Authentication:</span>
                                <span class="text-green-600 font-bold flex items-center space-x-1">
                                    <span>✓</span><span>Verified</span>
                                </span>
                            </div>
                            <div class="flex justify-between border-b border-gray-200 pb-2">
                                <span class="font-semibold text-gray-700">Blockchain ID:</span>
                                <span class="font-mono text-sm text-blue-600">#${item.id}A7B9C</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="font-playfair text-xl font-bold mb-3">Features & Highlights</h4>
                        <div class="grid grid-cols-2 gap-2">
                            ${item.features.map(feature => `
                                <div class="flex items-center space-x-2 text-sm">
                                    <span class="w-2 h-2 gold-gradient rounded-full"></span>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <p class="text-gray-700 mb-8 leading-relaxed">${item.description}</p>
                    
                    <div class="space-y-4">
                        <button class="w-full gold-gradient py-4 rounded-xl text-black font-bold text-lg hover:opacity-90 transition-all shadow-lg">
                            🛒 Purchase Now - ${item.price}
                        </button>
                        <div class="grid grid-cols-2 gap-4">
                            <button class="border-2 border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                                💝 Add to Wishlist
                            </button>
                            <button class="border-2 border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                                📋 Request Info
                            </button>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <button class="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                                📞 Contact Expert
                            </button>
                            <button class="bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all">
                                🔍 Schedule Viewing
                            </button>
                        </div>
                    </div>
                    
                    <div class="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="text-green-600 text-lg">🛡️</span>
                            <span class="font-semibold text-green-800">Buyer Protection Guarantee</span>
                        </div>
                        <p class="text-green-700 text-sm">Full authentication guarantee, secure escrow payment, and 14-day return policy included.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    document.getElementById('item-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('item-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedItems();
    
    // Add loading animation
    const cards = document.querySelectorAll('.hover-lift');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Add scroll effects
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});