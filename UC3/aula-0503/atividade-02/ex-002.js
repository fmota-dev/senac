const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

for (let i = 0; i < paragrafos.lenght; i++) {
  console.log(paragrafos[i].innerText);
}

paragrafos.foreach (function (paragrafo) {
  console.log(paragrafo.innerText);
});
