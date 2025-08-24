 // Language translations
const translations = {
    en: {
        title: "MediCare Pro - Advanced Medical Booking Platform",
        subtitle: "Advanced Medical Booking Platform",
        welcome: "Welcome back, John Smith",
        dashboard: "Dashboard",
        appointments: "Appointments",
        doctors: "Doctors",
        profile: "Profile",
        notifications: "Notifications",
        upcoming: "Upcoming",
        availableDoctors: "Available Doctors",
        activePrescrip: "Active Prescriptions",
        healthScore: "Health Score",
        bookNew: "Book New Appointment",
        instantConsult: "Instant Consultation",
        digitalPrescrip: "Digital Prescriptions"
    },
    de: {
        title: "MediCare Pro - Erweiterte Medizinische Buchungsplattform",
        subtitle: "Erweiterte Medizinische Buchungsplattform",
        welcome: "Willkommen zurück, John Smith",
        dashboard: "Dashboard",
        appointments: "Termine",
        doctors: "Ärzte",
        profile: "Profil",
        notifications: "Benachrichtigungen",
        upcoming: "Anstehend",
        availableDoctors: "Verfügbare Ärzte",
        activePrescrip: "Aktive Rezepte",
        healthScore: "Gesundheitswert",
        bookNew: "Neuen Termin buchen",
        instantConsult: "Sofortberatung",
        digitalPrescrip: "Digitale Rezepte"
    },
    fr: {
        title: "MediCare Pro - Plateforme de Réservation Médicale Avancée",
        subtitle: "Plateforme de Réservation Médicale Avancée",
        welcome: "Bon retour, John Smith",
        dashboard: "Tableau de bord",
        appointments: "Rendez-vous",
        doctors: "Médecins",
        profile: "Profil",
        notifications: "Notifications",
        upcoming: "À venir",
        availableDoctors: "Médecins disponibles",
        activePrescrip: "Prescriptions actives",
        healthScore: "Score de santé",
        bookNew: "Réserver un nouveau rendez-vous",
        instantConsult: "Consultation instantanée",
        digitalPrescrip: "Prescriptions numériques"
    },
    es: {
        title: "MediCare Pro - Plataforma Avanzada de Reservas Médicas",
        subtitle: "Plataforma Avanzada de Reservas Médicas",
        welcome: "Bienvenido de nuevo, John Smith",
        dashboard: "Panel",
        appointments: "Citas",
        doctors: "Médicos",
        profile: "Perfil",
        notifications: "Notificaciones",
        upcoming: "Próximas",
        availableDoctors: "Médicos disponibles",
        activePrescrip: "Recetas activas",
        healthScore: "Puntuación de salud",
        bookNew: "Reservar nueva cita",
        instantConsult: "Consulta instantánea",
        digitalPrescrip: "Recetas digitales"
    },
    it: {
        title: "MediCare Pro - Piattaforma Avanzata di Prenotazione Medica",
        subtitle: "Piattaforma Avanzata di Prenotazione Medica",
        welcome: "Bentornato, John Smith",
        dashboard: "Dashboard",
        appointments: "Appuntamenti",
        doctors: "Dottori",
        profile: "Profilo",
        notifications: "Notifiche",
        upcoming: "Prossimi",
        availableDoctors: "Dottori disponibili",
        activePrescrip: "Prescrizioni attive",
        healthScore: "Punteggio salute",
        bookNew: "Prenota nuovo appuntamento",
        instantConsult: "Consulto istantaneo",
        digitalPrescrip: "Prescrizioni digitali"
    },
    ar: {
        title: "MediCare Pro - منصة الحجوزات الطبية المتقدمة",
        subtitle: "منصة الحجوزات الطبية المتقدمة",
        welcome: "مرحباً بك، جون سميث",
        dashboard: "الرئيسية",
        appointments: "المواعيد",
        doctors: "الأطباء",
        profile: "الملف الشخصي",
        notifications: "الإشعارات",
        upcoming: "قادمة",
        availableDoctors: "أطباء متاحون",
        activePrescrip: "وصفات نشطة",
        healthScore: "مؤشر الصحة",
        bookNew: "حجز موعد جديد",
        instantConsult: "استشارة فورية",
        digitalPrescrip: "وصفات رقمية"
    }
};

let currentLanguage = 'en';

// Language functions
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    menu.classList.toggle('active');
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update flag and language code in button
    const langButton = document.querySelector('.language-dropdown button');
    const flagSpan = langButton.querySelector('.flag-icon');
    const langCode = langButton.querySelector('span:last-child');
    
    flagSpan.className = `flag-icon flag-${lang}`;
    langCode.textContent = lang.toUpperCase();
    
    // Update document direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // Update page content
    updatePageContent(lang);
    
    // Close language menu
    document.getElementById('languageMenu').classList.remove('active');
    
    // Show language change notification
    showLanguageNotification(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    
    // Update title and subtitle
    document.title = t.title;
    document.querySelector('h1').textContent = lang === 'ar' ? 'MediCare Pro' : 'MediCare Pro';
    document.querySelector('p.text-blue-100').textContent = t.subtitle;
    
    // Update navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons[0].innerHTML = `<i class="fas fa-home ${lang === 'ar' ? 'ml-2' : 'mr-2'}"></i>${t.dashboard}`;
    navButtons[1].innerHTML = `<i class="fas fa-calendar-alt ${lang === 'ar' ? 'ml-2' : 'mr-2'}"></i>${t.appointments}`;
    navButtons[2].innerHTML = `<i class="fas fa-user-md ${lang === 'ar' ? 'ml-2' : 'mr-2'}"></i>${t.doctors}`;
    navButtons[3].innerHTML = `<i class="fas fa-user ${lang === 'ar' ? 'ml-2' : 'mr-2'}"></i>${t.profile}`;
    
    // Update welcome message
    document.querySelector('#dashboard h2').textContent = t.welcome;
    
    // Update stats cards
    const statsCards = document.querySelectorAll('.stats-card p.text-gray-600');
    statsCards[0].textContent = t.upcoming;
    statsCards[1].textContent = t.availableDoctors;
    statsCards[2].textContent = t.activePrescrip;
    statsCards[3].textContent = t.healthScore;
    
    // Update quick action buttons
    const actionButtons = document.querySelectorAll('.group h3');
    actionButtons[0].textContent = t.bookNew;
    actionButtons[1].textContent = t.instantConsult;
    actionButtons[2].textContent = t.digitalPrescrip;
}

function showLanguageNotification(lang) {
    const langNames = {
        en: 'English',
        de: 'Deutsch',
        fr: 'Français',
        es: 'Español',
        it: 'Italiano',
        ar: 'العربية'
    };
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>Language changed to ${langNames[lang]}</span>
        </div>
    `;
    
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

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-blue-200');
    });
}

// Notifications
function toggleNotifications() {
    const dropdown = document.getElementById('notificationsDropdown');
    dropdown.classList.toggle('hidden');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const notificationDropdown = document.getElementById('notificationsDropdown');
    const languageMenu = document.getElementById('languageMenu');
    
    // Close notifications dropdown
    if (!event.target.closest('.relative') && !notificationDropdown.classList.contains('hidden')) {
        notificationDropdown.classList.add('hidden');
    }
    
    // Close language menu
    if (!event.target.closest('.language-dropdown') && languageMenu.classList.contains('active')) {
        languageMenu.classList.remove('active');
    }
});

// Booking Modal
function showBookingModal() {
    document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

function bookWithDoctor(doctorName) {
    document.getElementById('doctorSelect').value = doctorName;
    showBookingModal();
}

function confirmBooking() {
    event.preventDefault();
    alert('Your appointment has been confirmed successfully! You will receive a confirmation message shortly.');
    closeBookingModal();
}

// Video Call
function startVideoCall() {
    document.getElementById('videoCallModal').classList.add('active');
    
    // Simulate connection after 3 seconds
    setTimeout(() => {
        const videoContent = document.querySelector('#videoCallModal .bg-gray-800');
        videoContent.innerHTML = `
            <div class="text-center text-white">
                <i class="fas fa-user-circle text-6xl mb-4 text-green-400"></i>
                <h3 class="text-2xl font-semibold mb-2">Dr. Michael Johnson</h3>
                <p class="text-green-300">Connected</p>
                <div class="mt-4 text-sm">
                    <p>Hello! How can I help you today?</p>
                </div>
            </div>
        `;
        videoContent.classList.remove('bg-gray-800');
        videoContent.classList.add('video-call-active');
    }, 3000);
}

function endVideoCall() {
    document.getElementById('videoCallModal').classList.remove('active');
    
    // Reset video call content
    setTimeout(() => {
        const videoContent = document.querySelector('#videoCallModal .video-call-active, #videoCallModal .bg-gray-800');
        if (videoContent) {
            videoContent.className = 'w-full h-full bg-gray-800 flex items-center justify-center';
            videoContent.innerHTML = `
                <div class="text-center text-white">
                    <i class="fas fa-video text-6xl mb-4"></i>
                    <h3 class="text-2xl font-semibold mb-2">Video consultation with Dr. Michael Johnson</h3>
                    <p class="text-gray-300">Connecting...</p>
                </div>
            `;
        }
    }, 500);
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date for appointment booking to today
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        if (input.closest('#bookingModal')) {
            input.min = today;
        }
    });

    // Add notification sound effect (visual feedback)
    function showNotificationFeedback() {
        const badge = document.getElementById('notificationBadge');
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 2s infinite';
        }, 10);
    }

    // Simulate new notifications every 30 seconds
    setInterval(() => {
        const currentCount = parseInt(document.getElementById('notificationBadge').textContent);
        if (currentCount < 9) {
            document.getElementById('notificationBadge').textContent = currentCount + 1;
            showNotificationFeedback();
        }
    }, 30000);
});

// Form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (this.closest('#bookingModal')) {
            confirmBooking();
        } else {
            alert('Changes saved successfully!');
        }
    });
});

// Prescription reminders
function setMedicationReminder(medicationName) {
    alert(`Reminder set for medication: ${medicationName}`);
}

// Download prescription
function downloadPrescription(prescriptionId) {
    alert('Downloading prescription...');
}