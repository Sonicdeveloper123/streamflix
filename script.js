const movies = [
    { id: 1, title: "Stranger Things Trailer", ytId: "v-KbyciwlIs" },
    { id: 2, title: "The Witcher S3", ytId: "1gm80J823fA" },
    { id: 3, title: "Spider-Man: No Way Home", ytId: "OYWCOnqDvmc6y" },
    { id: 4, title: "Interstellar Official", ytId: "zSWdZVtXT7E" },
    { id: 5, title: "Inception Trailer", ytId: "YoHD9XEInc0" },
    { id: 6, title: "The Batman 2022", ytId: "mqqft2x_Aa4" },
    { id: 7, title: "Dune: Part Two", ytId: "Way9Dexny3w" },
    { id: 8, title: "Top Gun: Maverick", ytId: "giXcoUnitwU" },
    { id: 9, title: "Avatar: Way of Water", ytId: "d9MyW72ELq0" },
    { id: 10, title: "Black Panther: Wakanda", ytId: "_Z3QKkl1WyM" },
    { id: 11, title: "John Wick: Chapter 4", ytId: "qEVUrkHuWfk" },
    { id: 12, title: "Mission Impossible 7", ytId: "2m1drlOZSDw" },
    { id: 13, title: "The Flash Trailer", ytId: "hebWYacbdvc" },
    { id: 14, title: "Guardians of the Galaxy 3", ytId: "u3V5KDHRQvk" },
    { id: 15, title: "Oppenheimer Trailer", ytId: "uYPbbksJxIg" },
    { id: 16, title: "Barbie Movie", ytId: "pBk4NYhWNMM" },
    { id: 17, title: "Fast X Official", ytId: "32RAq6JzY-w" },
    { id: 18, title: "Transformers: Rise", ytId: "itnqEauWQZM" },
    { id: 19, title: "The Super Mario Movie", ytId: "TnGl01FkMMo" },
    { id: 20, title: "Little Mermaid 2023", ytId: "kpGo2_dKo8k" },
    { id: 21, title: "Indiana Jones 5", ytId: "eQfMbSe7F2g" },
    { id: 22, title: "Spider-Verse Trailer", ytId: "shW9i6k8cB0" },
    { id: 23, title: "Blue Beetle Trailer", ytId: "vS3_72nSkvc" },
    { id: 24, title: "Evil Dead Rise", ytId: "Bq6K-66N7No" },
    { id: 25, title: "Renfield Trailer", ytId: "6LmO6ryl87w" },
    { id: 26, title: "Creed III Trailer", ytId: "AHmCH7iB_IM" },
    { id: 27, title: "Ant-Man: Quantumania", ytId: "5WfTEZJnv_8" },
    { id: 28, title: "Scream VI Trailer", ytId: "h74AXqw4Opc" },
    { id: 29, title: "Cocaine Bear Trailer", ytId: "nbfgxVNYITs" },
    { id: 30, title: "Knock at the Cabin", ytId: "eOrNdBpGMv8" }

];
// Elements
const movieGrid = document.getElementById('movieGrid');
const searchBar = document.getElementById('searchBar');
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeBtn = document.querySelector('.close-btn');

// ✅ DISPLAY MOVIES
function displayMovies(movieList) {
    if (!movieGrid) return; // Guard clause
    movieGrid.innerHTML = movieList.map(movie => `
        <div class="movie-card" onclick="playVideo('${movie.ytId}')">
            <img src="https://img.youtube.com/vi/${movie.ytId}/hqdefault.jpg" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>▶ Watch movie</p>
            </div>
        </div>
    `).join('');
}

// ✅ PLAY VIDEO (Global function so onclick finds it)
window.playVideo = function(ytId) {
    videoPlayer.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
    modal.style.display = 'block';
};

// ✅ CLOSE MODAL
if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        videoPlayer.src = ''; // stop playback
    };
}

// ✅ CLOSE MODAL ON OUTSIDE CLICK
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
};

// ✅ SEARCH FUNCTIONALITY
if (searchBar) {
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = movies.filter(m => 
            m.title.toLowerCase().includes(term)
        );
        displayMovies(filtered);
    });
}

// ✅ INITIAL LOAD
displayMovies(movies);

