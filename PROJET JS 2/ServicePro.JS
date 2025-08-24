 // Smooth scrolling functions
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
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

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Merci ! Nous vous contacterons bientôt pour confirmer le rendez-vous de service.');
            
            // Reset form
            this.reset();
        });
    }

    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 1)';
            nav.style.backdropFilter = 'none';
        }
    });

    // Service card click handlers
    const serviceButtons = document.querySelectorAll('.service-card button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceName = serviceCard.querySelector('h4').textContent;
            const servicePrice = serviceCard.querySelector('.text-2xl').textContent;
            
            // Scroll to contact form
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            
            // Optional: Pre-fill service type in form
            setTimeout(() => {
                const serviceSelect = document.querySelector('select');
                if (serviceSelect) {
                    // Determine if it's home or office service based on the service name
                    const homeServices = ['Nettoyage de Maison', 'Plomberie', 'Électricité', 'Climatisation', 'Cuisine à Domicile', 'Jardinage'];
                    if (homeServices.includes(serviceName)) {
                        serviceSelect.value = 'home';
                    } else {
                        serviceSelect.value = 'office';
                    }
                }
                
                // Pre-fill service details
                const textarea = document.querySelector('textarea');
                if (textarea) {
                    textarea.value = `Je souhaite réserver le service: ${serviceName} (${servicePrice})`;
                }
            }, 500);
        });
    });

    // Add loading animation for service cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards for animation
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Mobile menu toggle (if you want to add mobile menu later)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Stats counter animation
    const statsNumbers = document.querySelectorAll('.stats-bg .text-4xl');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent.replace(/\D/g, '');
                animateNumber(target, 0, parseInt(finalNumber), 2000);
                statsObserver.unobserve(target);
            }
        });
    });

    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Number animation function
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        const suffix = element.textContent.includes('+') ? '+' : '';
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Utility function for smooth scrolling with offset
function scrollToElement(elementId, offset = 80) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}