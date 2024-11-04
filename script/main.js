const jogosContainer = document.querySelector(".jogos-container");

const jogos = ["mario-jump"];

Array.from(jogos).forEach((jogo) => {
  jogosContainer.innerHTML += `
        <div class="jogo">
            <a href="./jogos/${jogo}/index.html">
                <img src="./jogos/${jogo}/capa.png" alt="capa">
                <p>${jogo}</p>
            </a>
        </div>
    `;
});

function loadJogo(link) {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = link;
}

// window.addEventListener("load", function () {
const linksJogos = document.querySelectorAll(".jogos-container .jogo a");

linksJogos.forEach((jogo) => {
  jogo.addEventListener("click", function (event) {
    event.preventDefault();
    loadJogo(event.currentTarget.href);
    // console.log(event.currentTarget.href);
    // console.log(event.currentTarget.children[1].innerHTML);
  });
});
// });
