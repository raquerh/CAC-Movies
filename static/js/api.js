const container = document.getElementById('imageContainer');
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTY3NGU3OGE1ZWY1MDFlNWY3OTk3OGZjN2Y1YTdmYiIsInN1YiI6IjY2NTBkNGQ1N2ZmODgwZThmZDU1NzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETYLjf6QIHhxrGKj-a0jGCOfkoVVmZ4mwSiup8wwmVM'
    }
};

fetch('https://api.themoviedb.org/3/account/21287555/favorite/movies', options)
    .then(response => response.json())
    .then(datos => {
        datos.results.forEach(element => {
            const div = document.createElement('div');
            const img = document.createElement('img'); // Cambio a img

            img.src = element.image;
            img.alt = element.name;
            img.style.width = '200px';

            const p = document.createElement('p');
            p.textContent = element.name;

            div.appendChild(img);
            div.appendChild(p);
            container.appendChild(div);
        });
    })
    .catch(err => console.log(err));



