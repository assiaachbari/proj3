 // Global Variables
let currentLang = 'en';

// Language Management
function updateLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update document language and font
    const html = document.documentElement;
    const body = document.body;
    
    html.setAttribute('lang', lang);
    html.setAttribute('dir', 'ltr');
    
    if (lang === 'en') {
        body.className = 'font-sans bg-gray-50';
        document.getElementById('currentLang').textContent = 'English';
    } else if (lang === 'fr') {
        body.className = 'font-sans bg-gray-50';
        document.getElementById('currentLang').textContent = 'Français';
    } else if (lang === 'de') {
        body.className = 'font-sans bg-gray-50';
        document.getElementById('currentLang').textContent = 'Deutsch';
    }
}

// Language Dropdown Functionality
function initLanguageDropdown() {
    document.getElementById('langButton').addEventListener('click', function() {
        const dropdown = document.getElementById('langDropdown');
        dropdown.classList.toggle('opacity-0');
        dropdown.classList.toggle('invisible');
        dropdown.classList.toggle('translate-y-2');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const langButton = document.getElementById('langButton');
        const langDropdown = document.getElementById('langDropdown');
        
        if (!langButton.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        }
    });
    
    // Language option selection
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
            document.getElementById('langDropdown').classList.add('opacity-0', 'invisible', 'translate-y-2');
        });
    });
}

// Vehicle Category Filtering
function initVehicleFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const vehicleCards = document.querySelectorAll('[data-category]');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-gray-800', 'text-white');
                btn.classList.add('text-gray-700', 'hover:bg-gray-100');
            });
            button.classList.add('bg-gray-800', 'text-white');
            button.classList.remove('text-gray-700', 'hover:bg-gray-100');

            // Filter vehicles
            const category = button.getAttribute('data-category');
            vehicleCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
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

// Search Vehicles Button
function initSearchButton() {
    document.querySelector('button[data-translate="searchVehicles"]').addEventListener('click', function() {
        const pickupLocation = document.querySelector('select').value;
        const pickupDate = document.querySelectorAll('input[type="date"]')[0].value;
        const returnDate = document.querySelectorAll('input[type="date"]')[1].value;
        
        if (!pickupDate || !returnDate) {
            alert('Please select pickup and return dates to search for available vehicles.');
            return;
        }
        
        // Animate button
        this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Searching...';
        this.disabled = true;
        
        setTimeout(() => {
            // Scroll to fleet section
            document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
            
            // Show search results notification
            showNotification(`Search Complete! Found 6 available vehicles for ${pickupLocation}`, 'success');
            
            // Reset button
            this.innerHTML = '<i class="fas fa-search mr-2"></i>' + (currentLang === 'en' ? 'Search Vehicles' : currentLang === 'fr' ? 'Rechercher' : 'Suchen');
            this.disabled = false;
        }, 1500);
    });
}

// Vehicle Reservation Buttons
function initReservationButtons() {
    document.querySelectorAll('.elegant-card button[data-translate="reserveNow"]').forEach(button => {
        button.addEventListener('click', function() {
            const vehicleCard = this.closest('.elegant-card');
            const vehicleName = vehicleCard.querySelector('h4').textContent;
            const vehiclePrice = vehicleCard.querySelector('.premium-badge').textContent;
            
            // Animate button
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                // Create reservation modal
                createReservationModal(vehicleName, vehiclePrice);
                
                // Reset original button
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    });
}

// Service Cards Interaction
function initServiceCards() {
    document.querySelectorAll('.service-icon').forEach(serviceIcon => {
        const serviceCard = serviceIcon.closest('.elegant-card');
        
        if (serviceCard && !serviceCard.querySelector('button')) {
            serviceCard.addEventListener('click', function() {
                const serviceName = this.querySelector('h4').textContent;
                const serviceDesc = this.querySelector('p').textContent;
                
                createServiceModal(serviceName, serviceDesc, serviceIcon.innerHTML);
            });
            
            // Add hover effect
            serviceCard.style.cursor = 'pointer';
        }
    });
}

// Contact Form Enhancement
function initContactForm() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Validate form
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully! Our concierge team will contact you within 24 hours.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Testimonial Cards Interaction
function initTestimonialCards() {
    document.querySelectorAll('.testimonial-elegant').forEach(testimonial => {
        testimonial.addEventListener('click', function() {
            const clientName = this.querySelector('h5').textContent;
            const clientTitle = this.querySelector('.text-sm').textContent;
            const testimonialText = this.querySelector('.italic').textContent;
            
            createTestimonialModal(clientName, clientTitle, testimonialText);
        });
        
        testimonial.style.cursor = 'pointer';
    });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
}

// Modal Creation Functions
function createReservationModal(vehicleName, vehiclePrice) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full elegant-shadow transform scale-95 transition-transform duration-300">
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-car text-green-600 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-serif font-bold text-gray-800 mb-2">Reservation Request</h3>
                <p class="text-gray-600">${vehicleName}</p>
                <p class="text-gold font-semibold">${vehiclePrice}</p>
            </div>
            
            <div class="space-y-4 mb-6">
                <div>
                    <label class="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input type="text" class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" placeholder="Enter your name">
                </div>
                <div>
                    <label class="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input type="tel" class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" placeholder="Enter your phone">
                </div>
                <div>
                    <label class="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" placeholder="Enter your email">
                </div>
            </div>
            
            <div class="flex space-x-3">
                <button class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors" onclick="this.closest('.fixed').remove()">
                    Cancel
                </button>
                <button class="flex-1 luxury-button text-white py-3 rounded-lg font-medium" onclick="submitReservation(this, '${vehicleName}')">
                    Confirm Reservation
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.querySelector('.bg-white').classList.remove('scale-95');
        modal.querySelector('.bg-white').classList.add('scale-100');
    }, 100);
}

function createServiceModal(serviceName, serviceDesc, serviceIcon) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-lg w-full elegant-shadow transform scale-95 transition-transform duration-300">
            <div class="text-center mb-6">
                <div class="w-20 h-20 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    ${serviceIcon}
                </div>
                <h3 class="text-2xl font-serif font-bold text-gray-800 mb-2">${serviceName}</h3>
                <p class="text-gray-600 mb-4">${serviceDesc}</p>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 class="font-semibold text-gray-800 mb-2">Service Details:</h4>
                <ul class="text-gray-600 space-y-1 text-sm">
                    <li>• Available 24/7 across Europe</li>
                    <li>• Professional and certified staff</li>
                    <li>• Premium service guarantee</li>
                    <li>• Multilingual support</li>
                </ul>
            </div>
            
            <div class="flex space-x-3">
                <button class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors" onclick="this.closest('.fixed').remove()">
                    Close
                </button>
                <button class="flex-1 luxury-button text-white py-3 rounded-lg font-medium" onclick="requestService(this, '${serviceName}')">
                    Request Service
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.querySelector('.bg-white').classList.remove('scale-95');
        modal.querySelector('.bg-white').classList.add('scale-100');
    }, 100);
}

function createTestimonialModal(clientName, clientTitle, testimonialText) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full elegant-shadow transform scale-95 transition-transform duration-300">
            <div class="text-center mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    ${clientName.charAt(0)}
                </div>
                <h3 class="text-xl font-serif font-bold text-gray-800">${clientName}</h3>
                <p class="text-gray-600 text-sm">${clientTitle}</p>
                <div class="flex justify-center text-gold mt-2">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
                <p class="text-gray-700 italic">"${testimonialText}"</p>
            </div>
            
            <button class="w-full luxury-button text-white py-3 rounded-lg font-medium" onclick="this.closest('.fixed').remove()">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.querySelector('.bg-white').classList.remove('scale-95');
        modal.querySelector('.bg-white').classList.add('scale-100');
    }, 100);
}

// Global Functions
window.submitReservation = function(button, vehicleName) {
    const modal = button.closest('.fixed');
    const name = modal.querySelector('input[type="text"]').value;
    const phone = modal.querySelector('input[type="tel"]').value;
    const email = modal.querySelector('input[type="email"]').value;
    
    if (!name || !phone || !email) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
    button.disabled = true;
    
    setTimeout(() => {
        modal.remove();
        showNotification(`Reservation request for ${vehicleName} submitted successfully! Our team will contact you shortly.`, 'success');
    }, 1500);
};

window.requestService = function(button, serviceName) {
    const modal = button.closest('.fixed');
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Requesting...';
    button.disabled = true;
    
    setTimeout(() => {
        modal.remove();
        showNotification(`${serviceName} request submitted! Our concierge team will contact you shortly.`, 'success');
    }, 1500);
};

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    
    notification.className = `fixed top-20 right-6 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-sm`;
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="fas ${icon}"></i>
            <div class="text-sm">${message}</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Initialize All Functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLanguageDropdown();
    initVehicleFiltering();
    initSmoothScrolling();
    initSearchButton();
    initReservationButtons();
    initServiceCards();
    initContactForm();
    initTestimonialCards();
    initNavbarScrollEffect();
    
    // Initialize with English
    updateLanguage('en');
    
    console.log('🚗 Prestige Motors website loaded successfully!');
});