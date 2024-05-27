const API_SERVER = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTY3NGU3OGE1ZWY1MDFlNWY3OTk3OGZjN2Y1YTdmYiIsInN1YiI6IjY2NTBkNGQ1N2ZmODgwZThmZDU1NzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETYLjf6QIHhxrGKj-a0jGCOfkoVVmZ4mwSiup8wwmVM'
    }
};

const cargarPeliculasApi = async (page = 1) => {
    try {
        const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
        const data = await response.json(); 
        const movies = data.results;
        console.log(movies);
        const apiContainer = document.querySelector('.apiContainer');
        apiContainer.innerHTML = '';

        movies.forEach(movie => {
            const ancla = document.createElement('a');
            ancla.href = './pages/detalle.html';
            const pelicula = document.createElement('div');
            pelicula.classList.add('pelicula');
            const img = document.createElement('img');
            img.classList.add('imgPeli');
            img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            img.alt = movie.title;
            img.loading = 'lazy';

            const tituloPelicula = document.createElement('div');
            tituloPelicula.classList.add('tituloPelicula');

            const titulo = document.createElement('h4');
            titulo.textContent = movie.title;
            ancla.appendChild(pelicula);
            pelicula.appendChild(img);
            pelicula.appendChild(tituloPelicula);
            tituloPelicula.appendChild(titulo);
            apiContainer.appendChild(ancla);
        });

        apiContainer.parentElement.setAttribute('data-page', page);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

// Llama a la función para cargar las películas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculasApi();
});
