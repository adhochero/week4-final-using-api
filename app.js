
const movieListEl = document.querySelector(`.movie-list`);
let searchPhrase = ``;

var form = document.getElementById("search");
function handleForm(event){ 
    event.preventDefault();
} 
form.addEventListener('submit', handleForm);

function searchMovies(){
    searchPhrase = document.getElementById('search__input').value;
    console.log(searchPhrase);
    if(!searchPhrase) return;
    loadMovies();
}

async function loadMovies(){
    const movie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=488aa7dfe7e862a58afe29e2b39c77ad&query=${searchPhrase}`);
    const movieData = await movie.json();
    movieListEl.innerHTML = movieData.results.map(i => movieHTML(i)).slice(0, 9).join(``); 
}

function movieHTML(movie){
    return `<div class="movie">
        <div class="movie__block">
            <img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="" class="movie__img">
            <div class="movie__info">
                <p class="movie__title">${movie.original_title}
                <span class="movie__date">(${movie.release_date.substring(0,4)})</span>
                </p>
            </div> 
        </div>
    </div>`
}
