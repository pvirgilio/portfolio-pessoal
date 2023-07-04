document.addEventListener("DOMContentLoaded", function () {
    // Exibe o preloader
    document.getElementById("preloader").style.display = "flex";

    // Espera 3 segundos antes de exibir a tela normal
    setTimeout(showContent, 2000);
});

function showContent() {
    // Esconde o preloader
    document.getElementById("preloader").style.display = "none";
    // Exibe a tela normal
    document.getElementById("content").style.display = "block";
}




