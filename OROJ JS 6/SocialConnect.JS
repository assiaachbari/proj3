 // بيانات الترجمة
const translations = {
    ar: {
        postPlaceholder: "ما الذي تفكر فيه يا محمد؟",
        searchPlaceholder: "البحث في SocialConnect",
        chatPlaceholder: "اكتب رسالة..."
    },
    en: {
        postPlaceholder: "What's on your mind, Mohamed?",
        searchPlaceholder: "Search SocialConnect",
        chatPlaceholder: "Type a message..."
    },
    fr: {
        postPlaceholder: "À quoi pensez-vous, Michel?",
        searchPlaceholder: "Rechercher SocialConnect",
        chatPlaceholder: "Tapez un message..."
    }
};

let currentLanguage = 'fr';
let currentChat = null;

// تغيير اللغة
function changeLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    document.getElementById('postInput').placeholder = t.postPlaceholder;
    document.getElementById('searchBox').placeholder = t.searchPlaceholder;
    document.getElementById('chatInput').placeholder = t.chatPlaceholder;
    
    // تغيير اتجاه النص
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

// فتح نافذة الدردشة
function openMessenger(contactName = 'Chat') {
    currentChat = contactName;
    document.getElementById('messengerPopup').style.display = 'flex';
    document.getElementById('messengerTitle').textContent = contactName;
}

// إغلاق نافذة الدردشة
function closeMessenger() {
    document.getElementById('messengerPopup').style.display = 'none';
}

// إرسال رسالة
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    const chatMessages = document.getElementById('chatMessages');
    
    // إضافة الرسالة المرسلة
    const sentMessage = document.createElement('div');
    sentMessage.className = 'message sent fade-in';
    sentMessage.innerHTML = `<div class="message-bubble">${message}</div>`;
    chatMessages.appendChild(sentMessage);
    
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // رد تلقائي
    setTimeout(() => {
        const replies = [
            'Merci pour votre message !',
            'D\'accord, je vous recontacterai bientôt',
            'Excellente idée !',
            'Message reçu, merci',
            'Je vais examiner cela et vous répondre'
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const receivedMessage = document.createElement('div');
        receivedMessage.className = 'message received fade-in';
        receivedMessage.innerHTML = `<div class="message-bubble">${randomReply}</div>`;
        chatMessages.appendChild(receivedMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// تبديل الإعجاب
function toggleLike(button) {
    button.classList.toggle('liked');
    const span = button.querySelector('span');
    if (button.classList.contains('liked')) {
        span.textContent = '❤️';
    } else {
        span.textContent = '👍';
    }
}

// إنشاء منشور جديد
function createPost() {
    const input = document.getElementById('postInput');
    const content = input.value.trim();
    if (!content) return;
    
    const centerContent = document.querySelector('.center-content');
    const postCreator = document.querySelector('.post-creator');
    
    const newPost = document.createElement('div');
    newPost.className = 'post fade-in';
    newPost.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">M</div>
            <div class="post-info">
                <div class="post-author">Michel Dubois</div>
                <div class="post-time">Maintenant · 🌍</div>
            </div>
            <div style="margin-left: auto; cursor: pointer; padding: 8px; border-radius: 50%; color: #65676b;">⋯</div>
        </div>
        <div class="post-content">${content}</div>
        <div class="post-actions-bar">
            <button class="post-action-btn" onclick="toggleLike(this)">
                <span>👍</span> J'aime
            </button>
            <button class="post-action-btn" onclick="openMessenger()">
                <span>💬</span> Commenter
            </button>
            <button class="post-action-btn">
                <span>📤</span> Partager
            </button>
        </div>
    `;
    
    centerContent.insertBefore(newPost, postCreator.nextSibling);
    input.value = '';
}

// مستمعي الأحداث
document.addEventListener('DOMContentLoaded', function() {
    // تغيير اللغة
    document.getElementById('languageSelector').addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    // إرسال رسالة بالضغط على Enter
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // إنشاء منشور بالضغط على Enter
    document.getElementById('postInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') createPost();
    });

    // تحسين مظهر حقل النشر عند التركيز
    document.getElementById('postInput').addEventListener('click', () => {
        const input = document.getElementById('postInput');
        input.style.background = 'rgba(255, 255, 255, 0.25)';
        input.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });

    // إغلاق نافذة الدردشة عند النقر خارجها
    document.addEventListener('click', (e) => {
        const popup = document.getElementById('messengerPopup');
        if (!popup.contains(e.target) && 
            !e.target.closest('.contact-item') && 
            !e.target.closest('.post-action-btn')) {
            if (popup.style.display === 'flex') {
                closeMessenger();
            }
        }
    });
});