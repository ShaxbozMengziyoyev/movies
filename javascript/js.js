var elMoviesList = $_('.movies');
var elMoviesTemplate = $_('#movies-card-template').content;


var normalizedMovies = movies.map(function (movie) {
    return {
        title: movie.Title.toString(),
        year: movie.movie_year,
        categories: movie.Categories.split('|').join(', '),
        youtubeId: `https://www.youtube.com/watch?v=${movie.ytid}`,
    };
});


var createMovies = function (movie) {
    var elNewMovie = elMoviesTemplate.cloneNode(true);

    elNewMovie.querySelector('.js-title').textContent = movie.title;
    elNewMovie.querySelector('.js-year').textContent = `Year: ${movie.year}`;
    elNewMovie.querySelector('.js-categories').textContent = movie.categories;
    elNewMovie.querySelector('.js-link').textContent = `Watch trailer`;
    elNewMovie.querySelector('.js-link').href = movie.youtubeId;

    return elNewMovie;
};


var renderMovies = function (normalizedMovies) {
    elMoviesList.innerHTML = '';

    var elMoviesFragment = document.createDocumentFragment();

    normalizedMovies.forEach(function (movie) {
        elMoviesFragment.appendChild(createMovies(movie));
    });

    elMoviesList.appendChild(elMoviesFragment);
};

renderMovies(normalizedMovies.slice(0, 100));



