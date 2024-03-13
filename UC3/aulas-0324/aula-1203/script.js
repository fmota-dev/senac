let cores = ["#0ceca5", "#9a4033", "#36b9ee"];

primeiraCor = cores[0];
segundaCor = cores[1];
terceiraCor = cores[2];

paragrafos = document.querySelectorAll("p");

paragrafos[0].style.backgroundColor = primeiraCor;
paragrafos[1].style.backgroundColor = segundaCor;
paragrafos[2].style.backgroundColor = terceiraCor;

paragrafos.forEach((paragrafo) => {
  paragrafo.addEventListener("mouseover", destacarTexto);
  paragrafo.addEventListener("mouseout", resetarTexto);
});

function destacarTexto(event) {
  event.target.style.color = "white";
  event.target.style.fontWeight = "bold";
}

function resetarTexto(event) {
  event.target.style.color = "black";
  event.target.style.fontWeight = "normal";
}
