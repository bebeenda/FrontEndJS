import getFilmes from "./filmesAPI.js";
import { getGenero } from "./filmesAPI.js";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";
const coruja = document.getElementById("coruja");

window.addEventListener("DOMContentLoaded", () => {
    mostrarFilmes();
    setupModal();
});

const mostrarFilmes = async () => {
    const filmes = await getFilmes();
    const generos = await getGenero();

    const grid = document.getElementById("cartazFilmes");
    grid.innerHTML = "";

    const todosFilmes = filmes.results.slice(0, 10);
    const linhas = [
        todosFilmes.slice(0, 3),
        todosFilmes.slice(3, 7),
        todosFilmes.slice(7, 10),
    ];

    let indexGlobal = 0;

    linhas.forEach((linha) => {
        const row = document.createElement("div");
        row.className = "filmes-row";

        linha.forEach((filme) => {
            const generosStr = mostrarGenero(filme.genre_ids, generos);
            const posterUrl = IMG_BASE + filme.poster_path;
            const nota = filme.vote_average.toFixed(1);

            const card = document.createElement("article");
            card.className = "filme-card";
            card.style.animationDelay = `${indexGlobal * 0.06}s`;

            card.innerHTML = `
                <span class="filme-rank">#${indexGlobal + 1}</span>
                <div class="filme-poster-wrap">
                    <img
                        class="filme-poster"
                        src="${posterUrl}"
                        alt="Cartaz de ${filme.title}"
                        loading="lazy"
                    >
                </div>
                <div class="filme-info">
                    <h2 class="filme-titulo">${filme.title}</h2>
                    <div class="filme-meta">
                        <span class="filme-nota">${nota}</span>
                        <span class="filme-genero">${generosStr}</span>
                    </div>
                </div>
                <button
                    class="btn-saiba-mais"
                    data-titulo="${escHtml(filme.title)}"
                    data-nota="${nota}"
                    data-poster="${posterUrl}"
                    data-overview="${escHtml(filme.overview)}"
                    data-generos="${escHtml(generosStr)}"
                    aria-label="Saiba mais sobre ${filme.title}"
                >
                    Saiba Mais
                </button>
            `;

            card.addEventListener("click", (e) => {
                const btn = card.querySelector(".btn-saiba-mais");
                if (!e.target.closest(".btn-saiba-mais")) {
                    abrirModal(btn.dataset);
                }
            });

            row.appendChild(card);
            indexGlobal++;
        });

        grid.appendChild(row);
    });
};

const setupModal = () => {
    const modal = document.getElementById("modal");
    const backdrop = document.getElementById("modalBackdrop");
    const btnClose = document.getElementById("modalClose");

    backdrop.addEventListener("click", fecharModal);
    btnClose.addEventListener("click", fecharModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") fecharModal();
    });

    document.getElementById("cartazFilmes").addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-saiba-mais");
        if (btn) abrirModal(btn.dataset);
    });
};

const explodirEstrelas = () => {
    const container = document.createElement("div");
    container.className = "estrelas-explosao";
    document.body.appendChild(container);

    // cria 3 ondas em sequência
    for (let i = 0; i < 3; i++) {
        const onda = document.createElement("div");
        onda.className = "onda-luz";
        onda.style.animationDelay = `${i * 0.15}s`;
        container.appendChild(onda);
    }

    setTimeout(() => {
    document.getElementById("modal").classList.add("open");
    document.body.style.overflow = "hidden";
}, 700); // era 500
};

const abrirModal = ({ titulo, nota, poster, overview, generos }) => {
    explodirEstrelas();

    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalNota").textContent = nota;
    document.getElementById("modalOverview").textContent = overview;
    document.getElementById("modalPoster").src = poster;
    document.getElementById("modalPoster").alt = `Cartaz de ${titulo}`;

    const genDiv = document.getElementById("modalGeneros");
    genDiv.innerHTML = generos.split(", ").map(g =>
        `<span class="genero-tag">${g}</span>`
    ).join("");

    setTimeout(() => {
        document.getElementById("modal").classList.add("open");
        document.body.style.overflow = "hidden";
    }, 500);

    coruja.src = "imagem/logoOculos.png";
};

const fecharModal = () => {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
    coruja.src = "imagem/logoSemOculos.png";
};

const mostrarGenero = (ids, idGeneros) => {
    let nomesGeneros = "";
    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < idGeneros.genres.length; j++) {
            if (idGeneros.genres[j].id === ids[i]) {
                nomesGeneros = nomesGeneros
                    ? nomesGeneros + ", " + idGeneros.genres[j].name
                    : idGeneros.genres[j].name;
            }
        }
    }
    return nomesGeneros;
};

const escHtml = (str = "") =>
    str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");