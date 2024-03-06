// GERAL

const paragrafosGeral = document.getElementsByTagName("p");
const resultadoGeral = document.getElementById("resultadoGeral");
resultadoGeral.innerText = "Resultado geral " + paragrafosGeral.length;


// ARTICLES

const paragrafosArticle = document.querySelectorAll("article p");
const resultadoArticle = document.getElementById("resultadoArticle");
resultadoArticle.innerText = "Resultado article " + paragrafosArticle.length;


