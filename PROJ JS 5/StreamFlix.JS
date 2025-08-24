 // Premium movie data with real posters
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        category: "action",
        year: 2019,
        rating: 4.8,
        description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
        duration: "181 min",
        director: "Russo Brothers"
    },
    {
        id: 2,
        title: "The Notebook",
        category: "romance",
        year: 2004,
        rating: 4.5,
        description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
        duration: "123 min",
        director: "Nick Cassavetes"
    },
    {
        id: 3,
        title: "Deadpool",
        category: "comedy",
        year: 2016,
        rating: 4.2,
        description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
        poster: "https://images.unsplash.com/photo-1489599735734-79b4fc8c4c8a?w=400&h=600&fit=crop",
        duration: "108 min",
        director: "Tim Miller"
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        category: "drama",
        year: 1994,
        rating: 4.9,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop",
        duration: "142 min",
        director: "Frank Darabont"
    },
    {
        id: 5,
        title: "John Wick",
        category: "action",
        year: 2014,
        rating: 4.6,
        description: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
        poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
        duration: "101 min",
        director: "Chad Stahelski"
    },
    {
        id: 6,
        title: "Titanic",
        category: "romance",
        year: 1997,
        rating: 4.7,
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        poster: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
        duration: "194 min",
        director: "James Cameron"
    },
    {
        id: 7,
        title: "The Hangover",
        category: "comedy",
        year: 2009,
        rating: 4.1,
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        poster: "https://images.unsplash.com/photo-1489599735734-79b4fc8c4c8a?w=400&h=600&fit=crop",
        duration: "100 min",
        director: "Todd Phillips"
    },
    {
        id: 8,
        title: "Forrest Gump",
        category: "drama",
        year: 1994,
        rating: 4.8,
        description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man.",
        poster: "https://images.unsplash.com/photo-1489599735734-79b4fc8c4c8a?w=400&h=600&fit=crop",
        duration: "142 min",
        director: "Robert Zemeckis"
    },
    {
        id: 9,
        title: "Inception",
        category: "thriller",
        year: 2010,
        rating: 4.9,
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        poster: "https://images.unsplash.com/photo-1489599735734-79b4fc8c4c8a?w=400&h=600&fit=crop",
        duration: "148 min",
        director: "Christopher Nolan"
    },
    {
        id: 10,
        title: "The Dark Knight",
        category: "action",
        year: 2008,
        rating: 4.9,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.",
        poster: "https://images.unsplash.com/photo-1489599735734-79b4fc8c4c8a?w=400&h=600&fit=crop",
        duration: "152 min",
        director: "Christopher Nolan"
    },
    {
        id: 11,
        title: "Interstellar",
        category: "thriller",
        year: 2014,
        rating: 4.7,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
        duration: "169 min",
        director: "Christopher Nolan"
    },
    {
        id: 12,
        title: "La La Land",
        category: "romance",
        year: 2016,
        rating: 4.4,
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
        poster: "https://images.unsplash.com/photo-1489599735734-79b4fc8c4c8a?w=400&h=600&fit=crop",
        duration: "128 min",
        director: "Damien Chazelle"
    }
];

let currentCategory = 'all';
let searchTerm = '';

// DOM elements
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const movieModal = document.getElementById('movieModal');
const noResults = document.getElementById('noResults');

// Render movies
function renderMovies() {
    const filteredMovies = movies.filter(movie => {
        const matchesCategory = currentCategory === 'all' || movie.category === currentCategory;
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredMovies.length === 0) {
        moviesGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    moviesGrid.classList.remove('hidden');
    noResults.classList.add('hidden');

    moviesGrid.innerHTML = filteredMovies.map(movie => `
        <div class="movie-card group glass-effect rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/30 transition-all duration-500" onclick="openModal(${movie.id})">
            <div class="relative overflow-hidden">
                <img 
                    src="${movie.poster}" 
                    alt="${movie.title}"
                    class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMTExODI3Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjgwIiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iSW50ZXIiPk1vdmllIFBvc3RlcjwvdGV4dD4KPHN2ZyB4PSIxNzAiIHk9IjMxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNkI3Mjg0Ij4KPHA+PHBhdGggZD0iTTggNXYxNGwxMS03eiIvPjwvcD4KPC9zdmc+Cjwvc3ZnPgo='"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div class="absolute top-4 right-4 glass-effect px-3 py-2 rounded-xl">
                    <div class="flex items-center gap-2 text-sm">
                        <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span class="text-white font-semibold">${movie.rating}</span>
                    </div>
                </div>
                
                <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span class="glass-effect px-3 py-1 rounded-full text-xs font-medium text-white capitalize">
                        ${movie.category}
                    </span>
                </div>
                
                <div class="absolute inset-x-4 bottom-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div class="space-y-3">
                        <h4 class="text-xl font-bold text-white">${movie.title}</h4>
                        <div class="flex items-center gap-4 text-sm text-gray-300">
                            <span>${movie.year}</span>
                            <span>•</span>
                            <span>${movie.duration}</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 bg-red-600 hover:bg-red-700 py-2 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                Play
                            </button>
                            <button class="glass-effect p-2 rounded-xl hover:bg-white/20 transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="p-6 group-hover:pb-2 transition-all duration-300">
                <h3 class="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">${movie.title}</h3>
                <div class="flex items-center justify-between mb-3 text-sm">
                    <div class="flex items-center gap-3 text-gray-400">
                        <span>${movie.year}</span>
                        <span>•</span>
                        <span>${movie.duration}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span class="text-white font-semibold text-sm">${movie.rating}</span>
                    </div>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed mb-4 group-hover:opacity-0 transition-opacity duration-300">${movie.description.substring(0, 120)}...</p>
                <div class="flex items-center justify-between group-hover:opacity-0 transition-opacity duration-300">
                    <span class="text-xs text-gray-500 font-medium">Directed by ${movie.director}</span>
                    <button class="text-red-400 hover:text-red-300 text-sm font-semibold flex items-center gap-1">
                        Details
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open movie modal
function openModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalPoster').alt = movie.title;
    document.getElementById('modalRating').querySelector('span:nth-child(2)').textContent = movie.rating;
    document.getElementById('modalGenre').textContent = movie.category;
    document.getElementById('modalGenreDetail').textContent = movie.category;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalDuration').textContent = movie.duration;
    document.getElementById('modalDirector').textContent = movie.director;
    document.getElementById('modalDescription').textContent = movie.description;

    movieModal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    movieModal.classList.add('hidden');
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderMovies();
});

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => {
            b.classList.remove('active', 'bg-red-600', 'text-white', 'premium-shadow');
            b.classList.add('glass-effect', 'text-gray-300');
        });
        btn.classList.remove('glass-effect', 'text-gray-300');
        btn.classList.add('active', 'bg-red-600', 'text-white', 'premium-shadow');
        currentCategory = btn.dataset.category;
        renderMovies();
    });
});

document.getElementById('closeModal').addEventListener('click', closeModal);

// Close modal when clicking outside
movieModal.addEventListener('click', (e) => {
    if (e.target === movieModal) {
        closeModal();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
});