let header = document.getElementById("header1");

header.innerHTML += "<p>Texto inserido via javascript</p>";

header.classList.add("texto");
console.log(header.innerHTML);

let novoElemento = document.createElement("textarea");
novoElemento.setAttribute("name", "areaTexto");
novoElemento.setAttribute("id", "areaTexto");

header.appendChild(novoElemento);
