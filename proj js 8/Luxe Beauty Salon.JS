 
// Smooth scrolling functions
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Booking form submission
function submitBooking(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData);
    
    // Show success message
    alert('✨ Your booking has been confirmed successfully! We will contact you within 24 hours to confirm your appointment at LUXE salon. We look forward to welcoming you! 💎');
    
    // Reset form
    event.target.reset();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.floating-nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.luxury-card, .testimonial-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
});