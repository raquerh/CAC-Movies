
let miHeader = `
    <nav class="navegacion">
    <a class="logo" href="#">
        <i class="fas fa-film"></i>
        <span class="logo-text">CAC - Movies</span>
    </a>
    <ul class="nav-links">
        <li class="navItem"><a class="navLink" href="#popular">Tendencias</a></li>
        <li class="navItem"><a class="navLink" href="./templates/register.html">Registrate</a></li>
        <li class="navItem"><a class="navLink" id="btnInicioSesion" href="./templates/iniciosesion.html">Iniciar
                Sesion</a>
        </li>
    </ul>
    </nav>

`

document.querySelector("header").innerHTML = miHeader

let miFooter = `
        <nav class="navegacion">
            <ul class="nav-links">
                <li class="navItem"><a class="navLink" href="">Términos y condiciones</a></li>
                <li class="navItem"><a class="navLink" href="">Preguntas frecuentes</a></li>
                <li class="navItem"><a class="navLink" href="">Ayuda</a></li>
                <li class="navItem"><a class="navLink" id="administradorPeliculas" href="">Administrador Películas</a>
                </li>
            </ul>
        </nav>
        <a href="#" class="irArriba">
            <img src="./static/img/flecha-hacia-arriba.png" alt="flecha Ir Arriba">
        </a>
        `

document.querySelector("footer").innerHTML = miFooter

let misTendencias = ``

for(let peli of tendencia)

    misTendencias = misTendencias+ `
        <div class="movie-item">
            <a href="./templates/detail-movie.html">
                <div class="pelicula">
                    <img class="imgTendencia" src="${peli.image}" alt="pelicula">
                    <div class="tituloPelicula">
                    <h4>${peli.name}</h4>
                    </div>
                </div>
            </a>
        </div>

`
document.querySelector(".listaTendencia").innerHTML = misTendencias
