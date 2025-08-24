 // FreelanceHub JavaScript Functionality

// Job data
const jobsData = {
    1: {
        title: "E-commerce Platform with AI Integration",
        company: "TechCorp",
        price: "€8,500",
        description: "Build an advanced e-commerce platform with AI-powered recommendations, React frontend, Node.js backend, and comprehensive analytics dashboard.",
        requirements: ["5+ years experience with React", "Knowledge of Node.js and MongoDB", "Experience in API development", "Understanding of AI fundamentals"],
        skills: ["React", "Node.js", "AI/ML", "MongoDB", "AWS"]
    },
    2: {
        title: "Complete Mobile App Redesign",
        company: "DesignHub",
        price: "€6,200",
        description: "Transform a fintech mobile app with modern UI/UX design, user research, prototyping, and comprehensive design system creation.",
        requirements: ["3+ years experience in UI/UX design", "Proficiency in Figma and Adobe XD", "Experience in fintech app design", "User research skills"],
        skills: ["Figma", "Prototyping", "User Research", "Mobile Design"]
    },
    3: {
        title: "Technical Content & SEO Strategy",
        company: "TechWrite Pro",
        price: "€4,800",
        description: "Create comprehensive technical content strategy, blog articles about emerging technologies, SEO optimization, and thought leadership pieces.",
        requirements: ["Experience in technical writing", "Knowledge of SEO and Google Analytics", "Understanding of modern technologies", "Research and analysis skills"],
        skills: ["Technical Writing", "SEO", "Research", "Analytics"]
    }
};

// Freelancer data
const freelancersData = {
    1: {
        name: "Sarah Ahmed",
        title: "Senior Full Stack Developer",
        rate: "€95/hour",
        earned: "€180K+",
        rating: "4.98",
        reviews: "247",
        skills: ["React", "Node.js", "AWS", "Python", "MongoDB"],
        bio: "Full stack developer specialized in building scalable web applications using cutting-edge technologies. 8 years of experience working with Fortune 500 companies.",
        projects: ["E-commerce platform for Amazon", "Content management system for Netflix", "FinTech app for JPMorgan Bank"]
    },
    2: {
        name: "Mike Chen",
        title: "Lead UI/UX Designer",
        rate: "€85/hour",
        earned: "€150K+",
        rating: "4.96",
        reviews: "189",
        skills: ["Figma", "Design Systems", "Mobile", "Sketch", "Principle"],
        bio: "UI/UX designer specialized in creating exceptional user experiences for mobile and web applications. Winner of multiple design awards.",
        projects: ["Uber app redesign", "Design system for Airbnb", "User interface for Tesla app"]
    },
    3: {
        name: "Lisa Rodriguez",
        title: "Content Strategy Manager",
        rate: "€75/hour",
        earned: "€220K+",
        rating: "5.0",
        reviews: "312",
        skills: ["SEO", "Content Strategy", "Analytics", "Digital Marketing"],
        bio: "Expert in content strategy and digital marketing with a proven track record of increasing organic traffic by 300%+ for clients.",
        projects: ["Content strategy for Microsoft", "SEO campaign for Shopify", "Marketing strategy for HubSpot"]
    },
    4: {
        name: "David Kumar",
        title: "Blockchain Engineer",
        rate: "€140/hour",
        earned: "€95K+",
        rating: "4.94",
        reviews: "156",
        skills: ["Solidity", "Web3", "DeFi", "Smart Contracts", "Ethereum"],
        bio: "Blockchain engineer specialized in developing smart contracts and DeFi applications. Experience in building secure decentralized financial protocols.",
        projects: ["DeFi protocol for Uniswap", "NFT marketplace for OpenSea", "Web3 wallet for MetaMask"]
    }
};

// Extended freelancers data for browsing
const extendedFreelancersData = [
    {
        id: 5,
        name: "Ahmed Hassan",
        title: "DevOps Engineer",
        rate: "€110/hour",
        earned: "€320K+",
        rating: "4.97",
        reviews: "423",
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
        location: "Berlin, Germany",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        badge: "Expert",
        badgeColor: "blue"
    },
    {
        id: 6,
        name: "Maria Gonzalez",
        title: "Data Scientist",
        rate: "€95/hour",
        earned: "€280K+",
        rating: "4.99",
        reviews: "356",
        skills: ["Python", "TensorFlow", "Pandas", "SQL", "Tableau"],
        location: "Madrid, Spain",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        badge: "Top Rated",
        badgeColor: "green"
    },
    {
        id: 7,
        name: "Jean-Pierre Dubois",
        title: "Cybersecurity Specialist",
        rate: "€125/hour",
        earned: "€450K+",
        rating: "5.0",
        reviews: "289",
        skills: ["Penetration Testing", "CISSP", "Ethical Hacking", "Security Audit"],
        location: "Paris, France",
        availability: "Busy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        badge: "Security Expert",
        badgeColor: "red"
    },
    {
        id: 8,
        name: "Elena Rossi",
        title: "Product Manager",
        rate: "€90/hour",
        earned: "€195K+",
        rating: "4.95",
        reviews: "267",
        skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
        location: "Milan, Italy",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        badge: "Rising Star",
        badgeColor: "orange"
    },
    {
        id: 9,
        name: "Lars Andersson",
        title: "Game Developer",
        rate: "€85/hour",
        earned: "€165K+",
        rating: "4.92",
        reviews: "198",
        skills: ["Unity", "C#", "Unreal Engine", "3D Modeling", "Game Design"],
        location: "Stockholm, Sweden",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        badge: "Game Expert",
        badgeColor: "purple"
    },
    {
        id: 10,
        name: "Sophia Müller",
        title: "AI/ML Engineer",
        rate: "€130/hour",
        earned: "€380K+",
        rating: "4.98",
        reviews: "445",
        skills: ["Machine Learning", "Deep Learning", "PyTorch", "Computer Vision"],
        location: "Munich, Germany",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        badge: "AI Expert",
        badgeColor: "indigo"
    },
    {
        id: 11,
        name: "Carlos Silva",
        title: "Mobile App Developer",
        rate: "€80/hour",
        earned: "€145K+",
        rating: "4.89",
        reviews: "234",
        skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
        location: "Lisbon, Portugal",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        badge: "Mobile Expert",
        badgeColor: "green"
    },
    {
        id: 12,
        name: "Anna Kowalski",
        title: "Digital Marketing Manager",
        rate: "€65/hour",
        earned: "€125K+",
        rating: "4.93",
        reviews: "312",
        skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Content Marketing"],
        location: "Warsaw, Poland",
        availability: "Available",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        badge: "Marketing Pro",
        badgeColor: "pink"
    }
];

// Crypto payment data
const cryptoData = {
    bitcoin: {
        name: 'Bitcoin',
        symbol: '₿',
        icon: '₿',
        price: '€42,350',
        change: '+2.4%',
        description: 'The original cryptocurrency with the highest security and global acceptance',
        features: ['Instant payments', 'Low fees (0.1%)', 'Global acceptance', 'Maximum security'],
        wallets: ['Electrum', 'Bitcoin Core', 'Exodus', 'Ledger'],
        avgTime: '10 minutes',
        fees: '0.1%',
        volume: '€2.4B daily'
    },
    ethereum: {
        name: 'Ethereum',
        symbol: 'Ξ',
        icon: 'Ξ',
        price: '€2,680',
        change: '+1.8%',
        description: 'Smart contract platform with fast transactions and DeFi integration',
        features: ['Smart contracts', 'DeFi integration', 'Fast transactions', 'Low gas fees'],
        wallets: ['MetaMask', 'Trust Wallet', 'Coinbase Wallet', 'Ledger'],
        avgTime: '15 seconds',
        fees: '0.05%',
        volume: '€1.8B daily'
    },
    stablecoins: {
        name: 'Stablecoins',
        symbol: '💎',
        icon: '💎',
        price: '€0.92',
        change: '0.0%',
        description: 'Price-stable cryptocurrencies pegged to fiat currencies',
        features: ['Price stability', 'No volatility', 'Instant settlement', 'Regulatory compliance'],
        wallets: ['USDC Wallet', 'Tether Wallet', 'Binance', 'Coinbase'],
        avgTime: '5 seconds',
        fees: '0.02%',
        volume: '€5.2B daily'
    },
    lightning: {
        name: 'Lightning Network',
        symbol: '⚡',
        icon: '⚡',
        price: '€42,350',
        change: '+2.4%',
        description: 'Ultra-fast Bitcoin payments with near-zero fees',
        features: ['Instant payments', 'Micro-transactions', 'Near-zero fees', 'Scalable'],
        wallets: ['Phoenix', 'Breez', 'Blue Wallet', 'Zap'],
        avgTime: '< 1 second',
        fees: '< 0.001%',
        volume: '€450M daily'
    }
};

// Category data
const categoryData = {
    'web-development': {
        name: 'Web Development',
        icon: 'fas fa-code',
        description: 'Build modern, responsive websites and web applications using cutting-edge technologies',
        projects: 3247,
        avgRate: '€75/hour',
        topSkills: ['React', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'Python', 'JavaScript', 'TypeScript'],
        subCategories: [
            { name: 'Frontend Development', projects: 1456, rate: '€65/hour' },
            { name: 'Backend Development', projects: 987, rate: '€85/hour' },
            { name: 'Full Stack Development', projects: 654, rate: '€95/hour' },
            { name: 'E-commerce Development', projects: 150, rate: '€80/hour' }
        ],
        featuredJobs: [
            { title: 'React E-commerce Platform', budget: '€8,500', company: 'TechCorp', urgent: true },
            { title: 'Vue.js Dashboard Development', budget: '€6,200', company: 'StartupHub', urgent: false },
            { title: 'Node.js API Development', budget: '€4,800', company: 'DataFlow', urgent: true }
        ]
    },
    'mobile-development': {
        name: 'Mobile Development',
        icon: 'fas fa-mobile-alt',
        description: 'Create native and cross-platform mobile applications for iOS and Android',
        projects: 1892,
        avgRate: '€85/hour',
        topSkills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic', 'Java', 'Objective-C'],
        subCategories: [
            { name: 'iOS Development', projects: 756, rate: '€90/hour' },
            { name: 'Android Development', projects: 643, rate: '€80/hour' },
            { name: 'Cross-Platform Development', projects: 493, rate: '€95/hour' }
        ],
        featuredJobs: [
            { title: 'iOS FinTech App', budget: '€12,000', company: 'BankTech', urgent: true },
            { title: 'Flutter E-learning App', budget: '€9,500', company: 'EduPlatform', urgent: false },
            { title: 'React Native Social App', budget: '€7,800', company: 'SocialTech', urgent: true }
        ]
    },
    'design': {
        name: 'Design',
        icon: 'fas fa-palette',
        description: 'Create stunning visual designs, user interfaces, and brand identities',
        projects: 2156,
        avgRate: '€65/hour',
        topSkills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InDesign', 'Principle', 'Framer'],
        subCategories: [
            { name: 'UI/UX Design', projects: 987, rate: '€70/hour' },
            { name: 'Graphic Design', projects: 654, rate: '€55/hour' },
            { name: 'Brand Identity', projects: 345, rate: '€80/hour' },
            { name: 'Web Design', projects: 170, rate: '€60/hour' }
        ],
        featuredJobs: [
            { title: 'Mobile App UI/UX Redesign', budget: '€6,200', company: 'DesignHub', urgent: false },
            { title: 'Brand Identity Package', budget: '€4,500', company: 'StartupBrand', urgent: true },
            { title: 'Website Design System', budget: '€5,800', company: 'WebCorp', urgent: false }
        ]
    },
    'writing': {
        name: 'Writing & Content',
        icon: 'fas fa-pen-nib',
        description: 'Create compelling content, articles, and marketing materials',
        projects: 1634,
        avgRate: '€45/hour',
        topSkills: ['SEO Writing', 'Content Strategy', 'Copywriting', 'Technical Writing', 'Blog Writing', 'Social Media', 'Email Marketing'],
        subCategories: [
            { name: 'Content Writing', projects: 756, rate: '€40/hour' },
            { name: 'Technical Writing', projects: 432, rate: '€60/hour' },
            { name: 'Copywriting', projects: 346, rate: '€55/hour' },
            { name: 'SEO Content', projects: 100, rate: '€50/hour' }
        ],
        featuredJobs: [
            { title: 'Technical Content Strategy', budget: '€4,800', company: 'TechWrite Pro', urgent: false },
            { title: 'SEO Blog Articles (10 pieces)', budget: '€2,200', company: 'ContentHub', urgent: true },
            { title: 'Product Copywriting', budget: '€3,500', company: 'MarketPro', urgent: false }
        ]
    },
    'marketing': {
        name: 'Digital Marketing',
        icon: 'fas fa-bullhorn',
        description: 'Drive growth through strategic digital marketing campaigns',
        projects: 987,
        avgRate: '€55/hour',
        topSkills: ['Google Ads', 'Facebook Ads', 'SEO', 'Social Media Marketing', 'Email Marketing', 'Analytics', 'Content Marketing'],
        subCategories: [
            { name: 'Social Media Marketing', projects: 456, rate: '€50/hour' },
            { name: 'PPC Advertising', projects: 321, rate: '€65/hour' },
            { name: 'SEO Marketing', projects: 210, rate: '€60/hour' }
        ],
        featuredJobs: [
            { title: 'Facebook Ads Campaign', budget: '€3,200', company: 'AdTech', urgent: true },
            { title: 'SEO Strategy & Implementation', budget: '€5,500', company: 'GrowthCorp', urgent: false },
            { title: 'Social Media Management', budget: '€2,800', company: 'BrandSocial', urgent: true }
        ]
    },
    'data-science': {
        name: 'Data Science',
        icon: 'fas fa-chart-bar',
        description: 'Extract insights from data using advanced analytics and machine learning',
        projects: 756,
        avgRate: '€95/hour',
        topSkills: ['Python', 'R', 'Machine Learning', 'TensorFlow', 'Pandas', 'SQL', 'Tableau', 'Power BI'],
        subCategories: [
            { name: 'Data Analysis', projects: 345, rate: '€80/hour' },
            { name: 'Machine Learning', projects: 234, rate: '€110/hour' },
            { name: 'Data Visualization', projects: 177, rate: '€70/hour' }
        ],
        featuredJobs: [
            { title: 'ML Recommendation System', budget: '€15,000', company: 'DataTech', urgent: true },
            { title: 'Sales Analytics Dashboard', budget: '€8,500', company: 'AnalyticsPro', urgent: false },
            { title: 'Customer Segmentation Analysis', budget: '€6,200', company: 'RetailData', urgent: true }
        ]
    },
    'video-animation': {
        name: 'Video & Animation',
        icon: 'fas fa-video',
        description: 'Create engaging video content and stunning animations',
        projects: 543,
        avgRate: '€70/hour',
        topSkills: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender', 'Final Cut Pro', 'Motion Graphics', 'Video Editing'],
        subCategories: [
            { name: 'Video Editing', projects: 267, rate: '€60/hour' },
            { name: 'Motion Graphics', projects: 156, rate: '€85/hour' },
            { name: '3D Animation', projects: 120, rate: '€95/hour' }
        ],
        featuredJobs: [
            { title: 'Product Explainer Video', budget: '€4,500', company: 'VideoTech', urgent: false },
            { title: 'Motion Graphics Package', budget: '€6,800', company: 'AnimationStudio', urgent: true },
            { title: 'Corporate Video Series', budget: '€8,200', company: 'MediaCorp', urgent: false }
        ]
    },
    'translation': {
        name: 'Translation',
        icon: 'fas fa-language',
        description: 'Professional translation services across multiple languages',
        projects: 432,
        avgRate: '€35/hour',
        topSkills: ['English', 'French', 'German', 'Spanish', 'Italian', 'Portuguese', 'Dutch', 'Arabic'],
        subCategories: [
            { name: 'Document Translation', projects: 234, rate: '€30/hour' },
            { name: 'Website Localization', projects: 123, rate: '€45/hour' },
            { name: 'Technical Translation', projects: 75, rate: '€50/hour' }
        ],
        featuredJobs: [
            { title: 'Website Translation (EN to FR)', budget: '€2,200', company: 'GlobalWeb', urgent: true },
            { title: 'Technical Manual Translation', budget: '€3,500', company: 'TechDocs', urgent: false },
            { title: 'Marketing Content Localization', budget: '€1,800', company: 'LocalizePro', urgent: true }
        ]
    }
};

// Language translations
const translations = {
    ar: {
        siteName: "FreelanceHub",
        tagline: "منصة العمل الحر #1 عالمياً",
        heroTitle: "اعثر على وظيفة أحلامك",
        heroDescription: "انضم لملايين المحترفين حول العالم واستمتع بالدفع المشفر الفوري والأمان المطلق في جميع معاملاتك",
        findProjects: "ابحث عن مشاريع",
        hireTalent: "وظف مواهب",
        signIn: "تسجيل الدخول",
        joinFree: "انضم مجاناً",
        searchJobs: "البحث عن عمل",
        searchTalents: "البحث عن مواهب",
        categories: "التصنيفات",
        cryptoPayment: "الدفع المشفر",
        currentLang: "العربية"
    },
    en: {
        siteName: "FreelanceHub",
        tagline: "#1 Global Freelance Platform",
        heroTitle: "Find Your Dream Job",
        heroDescription: "Join millions of professionals worldwide and enjoy instant crypto payments with absolute security in all your transactions",
        findProjects: "Find Projects",
        hireTalent: "Hire Talent",
        signIn: "Sign In",
        joinFree: "Join Free",
        searchJobs: "Find Work",
        searchTalents: "Find Talent",
        categories: "Categories",
        cryptoPayment: "Crypto Payment",
        currentLang: "English"
    }
};

let currentLanguage = 'ar';

// Utility functions
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    notificationText.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            showNotification(`تم الانتقال إلى قسم ${this.textContent.trim()}`);
        }
    });
});

// Sign in functionality
document.getElementById('signInBtn').addEventListener('click', function() {
    openModal('signInModal');
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal('signInModal');
    showNotification('Successfully signed in! Welcome to FreelanceHub');
});

// Join functionality
document.getElementById('joinBtn').addEventListener('click', function() {
    openModal('joinModal');
});

document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal('joinModal');
    showNotification('Account created successfully! Welcome to the FreelanceHub community');
});

// Hero buttons
document.getElementById('findProjectsBtn').addEventListener('click', function() {
    document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
    showNotification('Viewing available projects - find your perfect project!');
});

document.getElementById('hireTalentBtn').addEventListener('click', function() {
    document.getElementById('freelancers').scrollIntoView({ behavior: 'smooth' });
    showNotification('Browse top talent - find the right freelancer for your project!');
});

// Job application functionality
document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const jobId = this.getAttribute('data-job-id');
        const job = jobsData[jobId];
        
        document.getElementById('jobModalContent').innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${job.title}</h2>
            <div class="mb-4">
                <span class="text-green-600 font-bold text-xl">${job.price}</span>
                <span class="text-gray-500 ml-2">من ${job.company}</span>
            </div>
            <div class="mb-6">
                <h3 class="font-semibold mb-2">وصف المشروع:</h3>
                <p class="text-gray-600">${job.description}</p>
            </div>
            <div class="mb-6">
                <h3 class="font-semibold mb-2">المتطلبات:</h3>
                <ul class="list-disc list-inside text-gray-600">
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            <div class="mb-6">
                <h3 class="font-semibold mb-2">المهارات المطلوبة:</h3>
                <div class="flex flex-wrap gap-2">
                    ${job.skills.map(skill => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="flex gap-4">
                <button onclick="submitApplication(${jobId})" class="premium-gradient text-white px-6 py-3 rounded-lg font-bold flex-1">
                    تقديم طلب التوظيف
                </button>
                <button onclick="saveJob(${jobId})" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold">
                    حفظ للمراجعة لاحقاً
                </button>
            </div>
        `;
        
        openModal('jobModal');
    });
});

// View all jobs
document.getElementById('viewAllJobsBtn').addEventListener('click', function() {
    showNotification('View all 15,000+ projects - explore unlimited opportunities!');
});

// Profile viewing functionality
document.querySelectorAll('.view-profile-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const freelancerId = this.getAttribute('data-freelancer-id');
        const freelancer = freelancersData[freelancerId];
        
        document.getElementById('profileModalContent').innerHTML = `
            <div class="text-center mb-6">
                <div class="w-24 h-24 profile-img rounded-full mx-auto mb-4 border-4 border-blue-200" style="background-image: url('https://images.unsplash.com/photo-${freelancerId === '1' ? '1494790108755-2616b612b786' : freelancerId === '2' ? '1507003211169-0a1dd7228f2d' : freelancerId === '3' ? '1438761681033-6461ffad8d80' : '1472099645785-5658abf4ff4e'}?w=150&h=150&fit=crop&crop=face');"></div>
                <h2 class="text-2xl font-bold">${freelancer.name}</h2>
                <p class="text-gray-600 mb-2">${freelancer.title}</p>
                <div class="flex justify-center items-center mb-4">
                    <div class="flex text-yellow-400 mr-2">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <span class="text-sm text-gray-600">${freelancer.rating} (${freelancer.reviews} reviews)</span>
                </div>
                <div class="text-center mb-4">
                    <span class="text-2xl font-bold text-green-600">${freelancer.rate}</span>
                    <span class="text-gray-500 ml-2">${freelancer.earned} earned</span>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="font-semibold mb-2">Bio:</h3>
                <p class="text-gray-600">${freelancer.bio}</p>
            </div>
            
            <div class="mb-6">
                <h3 class="font-semibold mb-2">Skills:</h3>
                <div class="flex flex-wrap gap-2">
                    ${freelancer.skills.map(skill => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="font-semibold mb-2">Featured Projects:</h3>
                <ul class="list-disc list-inside text-gray-600">
                    ${freelancer.projects.map(project => `<li>${project}</li>`).join('')}
                </ul>
            </div>
            
            <div class="flex gap-4">
                <button onclick="hireFreelancer(${freelancerId})" class="premium-gradient text-white px-6 py-3 rounded-lg font-bold flex-1">
                    Hire Now
                </button>
                <button onclick="contactFreelancer(${freelancerId})" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold">
                    Send Message
                </button>
            </div>
        `;
        
        openModal('profileModal');
    });
});

// Browse all freelancers
document.getElementById('browseAllFreelancersBtn').addEventListener('click', function() {
    showFreelancerDirectory();
});

function showFreelancerDirectory() {
    // Create freelancer directory modal
    const directoryModalHTML = `
        <div id="freelancerDirectoryModal" class="modal" style="display: block;">
            <div class="modal-content" style="max-width: 1200px; max-height: 90vh; overflow-y: auto;">
                <span class="close" onclick="closeModal('freelancerDirectoryModal')">&times;</span>
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-users mr-3 text-blue-500"></i>Browse All Freelancers
                    </h2>
                    <p class="text-gray-600 mb-6">Discover 500,000+ verified professionals across Europe</p>
                    
                    <!-- Search and Filters -->
                    <div class="bg-gray-50 rounded-xl p-6 mb-8">
                        <div class="grid md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <input type="text" placeholder="Search freelancers..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                            </div>
                            <div>
                                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                    <option>All Categories</option>
                                    <option>Web Development</option>
                                    <option>Mobile Development</option>
                                    <option>Design</option>
                                    <option>Data Science</option>
                                    <option>Marketing</option>
                                </select>
                            </div>
                            <div>
                                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                    <option>All Locations</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                    <option>Spain</option>
                                    <option>Italy</option>
                                    <option>Netherlands</option>
                                </select>
                            </div>
                            <div>
                                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                    <option>Any Rate</option>
                                    <option>€0-50/hour</option>
                                    <option>€50-100/hour</option>
                                    <option>€100+/hour</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200 transition">Available Now</span>
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-200 transition">Top Rated</span>
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-purple-200 transition">Verified</span>
                            <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-orange-200 transition">Rising Talent</span>
                        </div>
                    </div>

                    <!-- Stats Bar -->
                    <div class="grid md:grid-cols-4 gap-4 mb-8">
                        <div class="bg-blue-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-black text-blue-600">500,247</div>
                            <div class="text-sm text-gray-600">Total Freelancers</div>
                        </div>
                        <div class="bg-green-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-black text-green-600">89,432</div>
                            <div class="text-sm text-gray-600">Available Now</div>
                        </div>
                        <div class="bg-purple-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-black text-purple-600">156</div>
                            <div class="text-sm text-gray-600">Skill Categories</div>
                        </div>
                        <div class="bg-orange-50 rounded-lg p-4 text-center">
                            <div class="text-2xl font-black text-orange-600">€85</div>
                            <div class="text-sm text-gray-600">Average Rate</div>
                        </div>
                    </div>

                    <!-- Freelancer Grid -->
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${extendedFreelancersData.map(freelancer => `
                            <div class="freelancer-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer" onclick="viewFreelancerProfile(${freelancer.id})">
                                <div class="flex items-start justify-between mb-4">
                                    <div class="flex items-center">
                                        <div class="w-16 h-16 profile-img rounded-full mr-4 border-3 border-gray-200" style="background-image: url('${freelancer.image}');"></div>
                                        <div>
                                            <h3 class="font-bold text-gray-900">${freelancer.name}</h3>
                                            <p class="text-gray-600 text-sm">${freelancer.title}</p>
                                            <p class="text-gray-500 text-xs"><i class="fas fa-map-marker-alt mr-1"></i>${freelancer.location}</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="bg-${freelancer.badgeColor}-100 text-${freelancer.badgeColor}-800 px-2 py-1 rounded-full text-xs font-bold mb-2">
                                            ${freelancer.badge}
                                        </div>
                                        <div class="text-sm ${freelancer.availability === 'Available' ? 'text-green-600' : 'text-red-600'} font-semibold">
                                            <i class="fas fa-circle text-xs mr-1"></i>${freelancer.availability}
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex justify-between items-center mb-4">
                                    <div class="flex items-center">
                                        <div class="flex text-yellow-400 mr-2">
                                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                        </div>
                                        <span class="text-sm text-gray-600">${freelancer.rating} (${freelancer.reviews})</span>
                                    </div>
                                    <div class="text-right">
                                        <div class="text-lg font-black text-green-600">${freelancer.rate}</div>
                                        <div class="text-xs text-gray-500">${freelancer.earned} earned</div>
                                    </div>
                                </div>
                                
                                <div class="flex flex-wrap gap-1 mb-4">
                                    ${freelancer.skills.slice(0, 3).map(skill => `
                                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">${skill}</span>
                                    `).join('')}
                                    ${freelancer.skills.length > 3 ? `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">+${freelancer.skills.length - 3}</span>` : ''}
                                </div>
                                
                                <div class="flex gap-2">
                                    <button class="flex-1 premium-gradient text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition" onclick="event.stopPropagation(); hireFreelancer(${freelancer.id})">
                                        Hire Now
                                    </button>
                                    <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-200 transition" onclick="event.stopPropagation(); contactFreelancer(${freelancer.id})">
                                        Message
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Load More Button -->
                    <div class="text-center mt-8">
                        <button onclick="loadMoreFreelancers()" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition">
                            <i class="fas fa-plus mr-2"></i>Load More Freelancers
                        </button>
                        <p class="text-gray-500 text-sm mt-2">Showing 12 of 500,247 freelancers</p>
                    </div>

                    <!-- Popular Skills Section -->
                    <div class="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                        <h3 class="text-xl font-bold text-gray-900 mb-6">
                            <i class="fas fa-fire mr-2 text-orange-500"></i>Most In-Demand Skills
                        </h3>
                        <div class="grid md:grid-cols-4 gap-4">
                            <div class="bg-white rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                                <div class="text-2xl font-black text-blue-600 mb-2">12,456</div>
                                <div class="text-sm text-gray-600 font-semibold">React Developers</div>
                            </div>
                            <div class="bg-white rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                                <div class="text-2xl font-black text-green-600 mb-2">8,932</div>
                                <div class="text-sm text-gray-600 font-semibold">Python Experts</div>
                            </div>
                            <div class="bg-white rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                                <div class="text-2xl font-black text-purple-600 mb-2">6,743</div>
                                <div class="text-sm text-gray-600 font-semibold">UI/UX Designers</div>
                            </div>
                            <div class="bg-white rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                                <div class="text-2xl font-black text-orange-600 mb-2">4,521</div>
                                <div class="text-sm text-gray-600 font-semibold">Data Scientists</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if present
    const existingModal = document.getElementById('freelancerDirectoryModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal to body
    document.body.insertAdjacentHTML('beforeend', directoryModalHTML);
    
    showNotification('Browse all 500K+ freelancers - comprehensive directory loaded!');
}

function viewFreelancerProfile(freelancerId) {
    const freelancer = extendedFreelancersData.find(f => f.id === freelancerId) || freelancersData[freelancerId];
    if (!freelancer) return;
    
    closeModal('freelancerDirectoryModal');
    
    // Use existing profile modal functionality
    document.getElementById('profileModalContent').innerHTML = `
        <div class="text-center mb-6">
            <div class="w-24 h-24 profile-img rounded-full mx-auto mb-4 border-4 border-blue-200" style="background-image: url('${freelancer.image || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'}');"></div>
            <h2 class="text-2xl font-bold">${freelancer.name}</h2>
            <p class="text-gray-600 mb-2">${freelancer.title}</p>
            ${freelancer.location ? `<p class="text-gray-500 text-sm mb-2"><i class="fas fa-map-marker-alt mr-1"></i>${freelancer.location}</p>` : ''}
            <div class="flex justify-center items-center mb-4">
                <div class="flex text-yellow-400 mr-2">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <span class="text-sm text-gray-600">${freelancer.rating} (${freelancer.reviews} reviews)</span>
            </div>
            <div class="text-center mb-4">
                <span class="text-2xl font-bold text-green-600">${freelancer.rate}</span>
                <span class="text-gray-500 ml-2">${freelancer.earned} earned</span>
            </div>
            ${freelancer.availability ? `
                <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${freelancer.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    <i class="fas fa-circle text-xs mr-2"></i>${freelancer.availability}
                </div>
            ` : ''}
        </div>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-2">Bio:</h3>
            <p class="text-gray-600">${freelancer.bio || 'Experienced professional with a proven track record of delivering high-quality work for clients worldwide.'}</p>
        </div>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-2">Skills:</h3>
            <div class="flex flex-wrap gap-2">
                ${freelancer.skills.map(skill => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">${skill}</span>`).join('')}
            </div>
        </div>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-2">Featured Projects:</h3>
            <ul class="list-disc list-inside text-gray-600">
                ${(freelancer.projects || ['Advanced web application development', 'Mobile app optimization', 'Database architecture design']).map(project => `<li>${project}</li>`).join('')}
            </ul>
        </div>
        
        <div class="flex gap-4">
            <button onclick="hireFreelancer(${freelancerId})" class="premium-gradient text-white px-6 py-3 rounded-lg font-bold flex-1">
                Hire Now
            </button>
            <button onclick="contactFreelancer(${freelancerId})" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold">
                Send Message
            </button>
        </div>
    `;
    
    openModal('profileModal');
}

function loadMoreFreelancers() {
    showNotification('Loading more freelancers... 500K+ professionals available!');
}
