 // Script principal pour MediCare

// Configuration et initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Initialisation de la page
function initializePage() {
    setMinimumDate();
    setupEventListeners();
    setupSmoothScrolling();
    setupFormValidation();
}

// Définir la date minimum pour les rendez-vous (aujourd'hui)
function setMinimumDate() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Formulaire de réservation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleFormSubmission);
    }

    // Boutons de navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Fermeture de la modale en cliquant à l'extérieur
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

// Navigation fluide vers les sections
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Sélection automatique d'un médecin
function selectDoctor(doctorName, specialty) {
    const doctorSelect = document.getElementById('doctorSelect');
    if (doctorSelect) {
        const optionValue = `${doctorName} - ${specialty}`;
        doctorSelect.value = optionValue;
        
        // Mettre en évidence le champ sélectionné
        doctorSelect.style.borderColor = '#7c3aed';
        doctorSelect.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)';
        
        // Retirer la mise en évidence après 2 secondes
        setTimeout(() => {
            doctorSelect.style.borderColor = '';
            doctorSelect.style.boxShadow = '';
        }, 2000);
    }
    
    // Faire défiler vers la section de réservation
    scrollToBooking();
}

// Gestion de la soumission du formulaire
function handleFormSubmission(e) {
    e.preventDefault();
    
    // Validation des champs requis
    if (!validateForm()) {
        return;
    }
    
    // Simulation d'envoi (remplacer par vraie logique d'envoi)
    simulateFormSubmission();
    
    // Afficher la modale de succès
    showSuccessModal();
    
    // Réinitialiser le formulaire
    resetForm();
}

// Validation du formulaire
function validateForm() {
    const requiredFields = [
        'patientName',
        'email', 
        'phone',
        'doctorSelect',
        'appointmentDate',
        'appointmentTime'
    ];
    
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            showFieldError(field);
            isValid = false;
        } else if (field) {
            clearFieldError(field);
        }
    });
    
    // Validation spécifique de l'email
    const emailField = document.getElementById('email');
    if (emailField && emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, 'Veuillez entrer une adresse email valide');
        isValid = false;
    }
    
    return isValid;
}

// Validation de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Afficher une erreur sur un champ
function showFieldError(field, message = 'Ce champ est requis') {
    field.style.borderColor = '#ef4444';
    field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    
    // Supprimer l'ancien message d'erreur s'il existe
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Ajouter le nouveau message d'erreur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Effacer l'erreur d'un champ
function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Simulation d'envoi du formulaire
function simulateFormSubmission() {
    // Ici vous pourriez ajouter la logique d'envoi réelle
    // Par exemple : envoi vers une API, base de données, etc.
    console.log('Formulaire soumis avec succès');
    
    // Récupérer les données du formulaire
    const formData = getFormData();
    console.log('Données du formulaire:', formData);
}

// Récupérer les données du formulaire
function getFormData() {
    return {
        name: document.getElementById('patientName')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        doctor: document.getElementById('doctorSelect')?.value || '',
        date: document.getElementById('appointmentDate')?.value || '',
        time: document.getElementById('appointmentTime')?.value || '',
        notes: document.getElementById('notes')?.value || ''
    };
}

// Afficher la modale de succès
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Ajouter une animation d'entrée
        const modalContent = modal.querySelector('div');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.9)';
            modalContent.style.opacity = '0';
            
            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
                modalContent.style.opacity = '1';
                modalContent.style.transition = 'all 0.3s ease';
            }, 10);
        }
    }
}

// Fermer la modale
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        const modalContent = modal.querySelector('div');
        
        // Animation de sortie
        if (modalContent) {
            modalContent.style.transform = 'scale(0.9)';
            modalContent.style.opacity = '0';
            modalContent.style.transition = 'all 0.3s ease';
        }
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    }
}

// Configuration du défilement fluide
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// Gestion du défilement fluide
function handleSmoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Configuration de la validation en temps réel
function setupFormValidation() {
    const formFields = document.querySelectorAll('#bookingForm input, #bookingForm select, #bookingForm textarea');
    
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                showFieldError(this);
            } else {
                clearFieldError(this);
            }
        });
        
        field.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                clearFieldError(this);
            }
        });
    });
}

// Réinitialiser le formulaire
function resetForm() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.reset();
        
        // Effacer toutes les erreurs
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        // Réinitialiser les styles des champs
        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        });
    }
}

// Utilitaires pour les animations
function addHoverEffect(element) {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
    });
}

// Fonction pour gérer les erreurs JavaScript
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
    // Ici vous pourriez ajouter un système de rapport d'erreurs
});

// Fonction pour optimiser les performances
function optimizePerformance() {
    // Lazy loading pour les images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    
    // Préchargement des ressources critiques
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialiser les optimisations de performance
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Export des fonctions principales pour les tests (optionnel)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectDoctor,
        scrollToBooking,
        closeModal,
        validateForm,
        isValidEmail
    };
}