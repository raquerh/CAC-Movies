const API_SERVER = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTY3NGU3OGE1ZWY1MDFlNWY3OTk3OGZjN2Y1YTdmYiIsInN1YiI6IjY2NTBkNGQ1N2ZmODgwZThmZDU1NzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETYLjf6QIHhxrGKj-a0jGCOfkoVVmZ4mwSiup8wwmVM'
    }
};

// Función para obtener parámetros de la URL
const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id')
    };
};

const cargarDetallePelicula = async () => {
    const { id } = getQueryParams();
    if (!id) {
        console.error('No se ha encontrado el ID de la película en la URL');
        return;
    }

    try {
        const response = await fetch(`${API_SERVER}/movie/${id}`, options);
        const movie = await response.json();
        const detalleContainer = document.querySelector('#detalleContainer');
        detalleContainer.innerHTML = `
            <h2 class ="tituloPelicula">${movie.title}</h2>
            <img class="imgPelicula" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <p class="resumen">Resumen: ${movie.overview}</p>
            <p class="fechaLanzamiento">Fecha de lanzamiento: ${movie.release_date}</p>
            <p class="clasificacion">Calificación: ${movie.vote_average}</p>
        `;
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};

// Llama a la función para cargar los detalles de la película al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarDetallePelicula();
});
