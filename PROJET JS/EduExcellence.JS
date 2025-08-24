 // Service modal functionality
const serviceData = {
    particuliers: {
        icon: '🎓',
        title: 'Cours Particuliers',
        description: 'Bénéficiez d\'un accompagnement personnalisé avec nos professeurs expérimentés. Cours adaptés à votre rythme et à vos objectifs spécifiques.'
    },
    groupe: {
        icon: '👥',
        title: 'Cours en Groupe',
        description: 'Rejoignez nos petits groupes de 3-5 élèves pour un apprentissage collaboratif et motivant. Tarifs avantageux et émulation positive.'
    },
    enligne: {
        icon: '💻',
        title: 'Formation en Ligne',
        description: 'Accédez à notre plateforme 24h/24 avec des cours interactifs, exercices corrigés et suivi personnalisé. Flexibilité maximale.'
    },
    suivi: {
        icon: '📊',
        title: 'Suivi Personnalisé',
        description: 'Rapports détaillés sur vos progrès, évaluations régulières et conseils personnalisés pour optimiser votre apprentissage.'
    },
    examens: {
        icon: '🏆',
        title: 'Préparation Examens',
        description: 'Préparation intensive pour le bac, concours d\'entrée et examens universitaires. Méthodologie éprouvée et taux de réussite élevé.'
    },
    langues: {
        icon: '🌍',
        title: 'Langues Étrangères',
        description: 'Apprenez l\'anglais, l\'espagnol, l\'allemand avec des professeurs natifs. Méthodes modernes et certification possible.'
    }
};

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Service modal functions
function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const data = serviceData[serviceType];
    
    if (data) {
        document.getElementById('modalIcon').textContent = data.icon;
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.querySelector('.bg-white').classList.add('modal-enter');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Course enrollment function
function enrollCourse(courseName) {
    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Inscription...';
    button.disabled = true;
    
    // Simulate enrollment process
    setTimeout(() => {
        alert(`Inscription au cours de ${courseName} en cours... Vous allez être redirigé vers notre formulaire d'inscription.`);
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 1500);
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        alert(`Merci ${firstName} ${lastName} ! Votre demande a été envoyée avec succès. Notre équipe vous recontactera dans les 24h à l'adresse ${email}.`);
        
        // Reset form and button
        event.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Message envoyé avec succès !', 'success');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set colors based on type
    switch (type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white';
            break;
        default:
            notification.className += ' bg-blue-500 text-white';
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
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
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Fade-in animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.animationDelay = '0.1s';
            element.classList.add('fade-in');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.add('shadow-sm');
    }
}

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number
            let displayValue = Math.floor(current);
            if (counter.textContent.includes('K')) {
                displayValue = Math.floor(current / 1000) + 'K+';
            } else if (counter.textContent.includes('%')) {
                displayValue = Math.floor(current) + '%';
            } else if (counter.textContent.includes('/')) {
                displayValue = '24/7';
            }
            
            counter.textContent = displayValue;
        }, 20);
    });
}

// Lazy loading for images
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

// Search functionality (if needed)
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Implement search logic here
            console.log('Searching for:', searchTerm);
        });
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Local storage helpers
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    animateOnScroll();
    lazyLoadImages();
    initSearch();
    initMobileMenu();
    
    // Animate counters when they come into view
    const statsSection = document.querySelector('.stats-counter').closest('section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(statsSection);
    }
});

// Scroll event listeners
window.addEventListener('scroll', function() {
    animateOnScroll();
    handleNavbarScroll();
});

// Modal event listeners
document.addEventListener('click', function(e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Resize event listener
window.addEventListener('resize', function() {
    // Handle responsive adjustments if needed
    console.log('Window resized');
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Page loaded in:', performance.now(), 'ms');
});

// Export functions for global access
window.EduExcellence = {
    scrollToSection,
    openServiceModal,
    closeModal,
    enrollCourse,
    submitContactForm,
    showNotification
};