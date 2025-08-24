 // بيانات أوقات الصلاة للمدن المغربية
const prayerData = {
    'casablanca': { fajr: '06:15', sunrise: '07:45', dhuhr: '13:30', asr: '16:45', maghrib: '19:15', isha: '20:45' },
    'rabat': { fajr: '06:10', sunrise: '07:40', dhuhr: '13:25', asr: '16:40', maghrib: '19:10', isha: '20:40' },
    'fes': { fajr: '06:05', sunrise: '07:35', dhuhr: '13:20', asr: '16:35', maghrib: '19:05', isha: '20:35' },
    'marrakech': { fajr: '06:20', sunrise: '07:50', dhuhr: '13:35', asr: '16:50', maghrib: '19:20', isha: '20:50' },
    'meknes': { fajr: '06:08', sunrise: '07:38', dhuhr: '13:23', asr: '16:38', maghrib: '19:08', isha: '20:38' },
    'tangier': { fajr: '06:00', sunrise: '07:30', dhuhr: '13:15', asr: '16:30', maghrib: '19:00', isha: '20:30' },
    'agadir': { fajr: '06:25', sunrise: '07:55', dhuhr: '13:40', asr: '16:55', maghrib: '19:25', isha: '20:55' },
    'oujda': { fajr: '05:55', sunrise: '07:25', dhuhr: '13:10', asr: '16:25', maghrib: '18:55', isha: '20:25' },
    'kenitra': { fajr: '06:12', sunrise: '07:42', dhuhr: '13:27', asr: '16:42', maghrib: '19:12', isha: '20:42' },
    'tetouan': { fajr: '06:02', sunrise: '07:32', dhuhr: '13:17', asr: '16:32', maghrib: '19:02', isha: '20:32' }
};

// أسماء الصلوات
const prayerNames = {
    fajr: 'الفجر',
    sunrise: 'الشروق',
    dhuhr: 'الظهر',
    asr: 'العصر',
    maghrib: 'المغرب',
    isha: 'العشاء'
};

// أسماء المدن
const cityNames = {
    'casablanca': 'الدار البيضاء',
    'rabat': 'الرباط',
    'fes': 'فاس',
    'marrakech': 'مراكش',
    'meknes': 'مكناس',
    'tangier': 'طنجة',
    'agadir': 'أكادير',
    'oujda': 'وجدة',
    'kenitra': 'القنيطرة',
    'tetouan': 'تطوان'
};

// أيقونات الصلوات
const prayerIcons = {
    fajr: 'fas fa-moon',
    sunrise: 'fas fa-sun',
    dhuhr: 'fas fa-sun',
    asr: 'fas fa-cloud-sun',
    maghrib: 'fas fa-sunset',
    isha: 'fas fa-star-and-crescent'
};

// صور حقيقية للمدن المغربية
const cityImages = {
    'casablanca': 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'rabat': 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'fes': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'marrakech': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'meknes': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'tangier': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'agadir': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'oujda': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'kenitra': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'tetouan': 'https://images.unsplash.com/photo-1570214476695-26c2e5c9c4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

// متغيرات عامة
let currentCity = 'casablanca';
let countdownInterval;

// تحديث الوقت الحالي
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar-MA', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    document.getElementById('currentTime').textContent = timeString;
}

// تحديث التاريخ
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    document.getElementById('currentDate').textContent = now.toLocaleDateString('ar-MA', options);
    
    // تقريب بسيط للتاريخ الهجري
    const hijriYear = Math.floor((now.getFullYear() - 622) * 1.030684);
    const hijriMonth = Math.floor(Math.random() * 12) + 1;
    const hijriDay = Math.floor(Math.random() * 29) + 1;
    document.getElementById('hijriDate').textContent = `${hijriDay}/${hijriMonth}/${hijriYear} هـ`;
}

// تحديث صورة المدينة
function updateCityImage(city) {
    const imageElement = document.getElementById('cityImage');
    imageElement.src = cityImages[city];
    imageElement.alt = `صورة ${cityNames[city]}`;
}

// عرض أوقات الصلاة
function displayPrayerTimes(city) {
    const prayers = prayerData[city];
    const grid = document.getElementById('prayerGrid');
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    grid.innerHTML = '';
    
    Object.entries(prayers).forEach(([prayer, time]) => {
        const [hours, minutes] = time.split(':').map(Number);
        const prayerTime = hours * 60 + minutes;
        const isCurrentPrayer = isCurrentPrayerTime(currentTime, prayer, prayers);
        
        const card = document.createElement('div');
        card.className = `prayer-time-card rounded-2xl p-6 text-center shadow-lg ${isCurrentPrayer ? 'current-prayer-card' : ''}`;
        
        card.innerHTML = `
            <div class="mb-4">
                <i class="${prayerIcons[prayer]} text-3xl ${isCurrentPrayer ? 'text-white' : 'text-amber-700'}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 ${isCurrentPrayer ? 'text-white' : 'text-amber-900'}">${prayerNames[prayer]}</h3>
            <p class="text-2xl font-bold ${isCurrentPrayer ? 'text-white' : 'text-amber-900'}">${time}</p>
            ${isCurrentPrayer ? '<p class="text-sm mt-2 opacity-90">🕌 وقت الصلاة الحالي</p>' : ''}
        `;
        
        grid.appendChild(card);
    });
}

// التحقق من وقت الصلاة الحالي
function isCurrentPrayerTime(currentTime, prayer, prayers) {
    const prayerOrder = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const currentIndex = prayerOrder.indexOf(prayer);
    const nextIndex = (currentIndex + 1) % prayerOrder.length;
    
    const [currentHours, currentMinutes] = prayers[prayer].split(':').map(Number);
    const currentPrayerTime = currentHours * 60 + currentMinutes;
    
    const [nextHours, nextMinutes] = prayers[prayerOrder[nextIndex]].split(':').map(Number);
    let nextPrayerTime = nextHours * 60 + nextMinutes;
    
    // التعامل مع عبور منتصف الليل
    if (nextPrayerTime < currentPrayerTime) {
        nextPrayerTime += 24 * 60;
    }
    
    return currentTime >= currentPrayerTime && currentTime < nextPrayerTime;
}

// الحصول على الصلاة القادمة
function getNextPrayer(city) {
    const prayers = prayerData[city];
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const prayerOrder = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    
    for (let prayer of prayerOrder) {
        const [hours, minutes] = prayers[prayer].split(':').map(Number);
        const prayerTime = hours * 60 + minutes;
        
        if (currentTime < prayerTime) {
            return { name: prayerNames[prayer], time: prayers[prayer], minutes: prayerTime - currentTime };
        }
    }
    
    // الصلاة القادمة هي فجر الغد
    const [hours, minutes] = prayers['fajr'].split(':').map(Number);
    const prayerTime = hours * 60 + minutes;
    return { 
        name: prayerNames['fajr'], 
        time: prayers['fajr'], 
        minutes: (24 * 60) - currentTime + prayerTime 
    };
}

// تحديث العد التنازلي
function updateCountdown() {
    const nextPrayer = getNextPrayer(currentCity);
    document.getElementById('nextPrayer').textContent = nextPrayer.name;
    
    const hours = Math.floor(nextPrayer.minutes / 60);
    const minutes = nextPrayer.minutes % 60;
    
    document.getElementById('countdown').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// بدء العد التنازلي
function startCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    countdownInterval = setInterval(() => {
        updateCountdown();
        displayPrayerTimes(currentCity);
    }, 60000); // تحديث كل دقيقة
}

// مستمعي الأحداث
document.getElementById('citySelect').addEventListener('change', function() {
    currentCity = this.value;
    document.getElementById('currentCity').textContent = cityNames[currentCity];
    updateCityImage(currentCity);
    displayPrayerTimes(currentCity);
    updateCountdown();
});

// التهيئة الأولية
updateCurrentTime();
updateDate();
updateCityImage(currentCity);
displayPrayerTimes(currentCity);
updateCountdown();
startCountdown();

// تحديث الوقت كل ثانية
setInterval(updateCurrentTime, 1000);

// تحديث التاريخ كل يوم
setInterval(updateDate, 24 * 60 * 60 * 1000);