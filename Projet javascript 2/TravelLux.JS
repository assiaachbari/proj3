 // Language Switcher
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

function switchLanguage(lang) {
    const currentLang = document.getElementById('currentLang');
    const dropdown = document.getElementById('languageDropdown');
    
    switch(lang) {
        case 'en':
            currentLang.textContent = 'EN';
            break;
        case 'ar':
            currentLang.textContent = 'AR';
            // Here you would implement Arabic translation
            break;
        case 'fr':
            currentLang.textContent = 'FR';
            // Here you would implement French translation
            break;
        case 'es':
            currentLang.textContent = 'ES';
            // Here you would implement Spanish translation
            break;
    }
    
    dropdown.classList.remove('show');
    
    // Show language change notification
    showNotification(`Language changed to ${lang.toUpperCase()}! 🌍`);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const languageSwitcher = document.querySelector('.language-switcher');
    const dropdown = document.getElementById('languageDropdown');
    
    if (!languageSwitcher.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

// Smart Recommendations System
const recommendations = [
    {
        title: "Santorini Sunset Villa",
        type: "Romantic Getaway",
        rating: 4.9,
        price: "$1,200/night",
        icon: "🌅",
        description: "Perfect for couples seeking romance"
    },
    {
        title: "Tokyo Luxury Suite",
        type: "Cultural Experience",
        rating: 4.8,
        price: "$800/night",
        icon: "🏮",
        description: "Immerse in authentic Japanese culture"
    },
    {
        title: "Kenyan Safari Lodge",
        type: "Wildlife Adventure",
        rating: 4.9,
        price: "$2,100/night",
        icon: "🦁",
        description: "Unforgettable wildlife experience"
    }
];

function showRecommendations() {
    const section = document.getElementById('recommendations');
    const grid = document.getElementById('recommendationGrid');
    
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth' });
    
    grid.innerHTML = '';
    
    recommendations.forEach((rec, index) => {
        setTimeout(() => {
            const card = document.createElement('div');
            card.className = 'luxury-card p-8 text-center recommendation-pulse';
            card.innerHTML = `
                <div class="text-6xl mb-6">${rec.icon}</div>
                <h3 class="font-playfair text-2xl font-bold mb-3">${rec.title}</h3>
                <p class="text-blue-600 font-semibold mb-3">${rec.type}</p>
                <div class="flex justify-center items-center mb-4">
                    <div class="flex text-yellow-400 text-lg">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="ml-2 text-gray-600 font-semibold">(${rec.rating}/5)</span>
                </div>
                <p class="text-gray-600 mb-6">${rec.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-green-600">${rec.price}</span>
                    <button onclick="bookRecommendation('${rec.title}')" class="btn-secondary text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 active:scale-95 transition-all duration-300">
                        Book Now
                    </button>
                </div>
            `;
            grid.appendChild(card);
        }, index * 300);
    });
}

function startVRTour(type = 'general') {
    const modal = document.getElementById('vrModal');
    const progress = document.getElementById('vrProgress');
    const status = document.getElementById('vrStatus');
    
    modal.classList.remove('hidden');
    
    const stages = [
        "Initializing virtual environment...",
        "Loading 360° panoramic views...",
        "Calibrating spatial audio...",
        "Rendering high-resolution textures...",
        "VR experience ready!"
    ];
    
    let currentStage = 0;
    const interval = setInterval(() => {
        progress.style.width = `${(currentStage + 1) * 20}%`;
        status.textContent = stages[currentStage];
        
        currentStage++;
        if (currentStage >= stages.length) {
            clearInterval(interval);
            setTimeout(() => {
                status.innerHTML = `
                    <div class="text-green-600 font-semibold">✅ VR Tour Active!</div>
                    <p class="text-sm text-gray-500 mt-2">Put on your VR headset to begin the immersive experience</p>
                `;
            }, 500);
        }
    }, 800);
}

function startVRHotelTour(hotel) {
    startVRTour(hotel);
}

function closeVRModal() {
    document.getElementById('vrModal').classList.add('hidden');
    document.getElementById('vrProgress').style.width = '0%';
    document.getElementById('vrStatus').textContent = 'Initializing virtual environment...';
}

function bookHotel(hotel) {
    document.getElementById('bookingModal').classList.remove('hidden');
}

function bookDestination(destination) {
    document.getElementById('bookingModal').classList.remove('hidden');
}

function bookExperience(experience) {
    document.getElementById('bookingModal').classList.remove('hidden');
}

function bookRecommendation(recommendation) {
    document.getElementById('bookingModal').classList.remove('hidden');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.add('hidden');
}

function confirmBooking() {
    showNotification('🎉 Booking confirmed! You will receive a confirmation email shortly with all your luxury travel details.');
    closeBookingModal();
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation
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

// Add some interactive animations on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.luxury-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add floating animation to navigation logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.floating-animation');
    if (logo) {
        setInterval(() => {
            logo.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                logo.style.transform = 'translateY(0px)';
            }, 1000);
        }, 2000);
    }
});

// Add button click feedback
document.addEventListener('DOMContentLoaded', function() {
    // Add click sound effect simulation
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});