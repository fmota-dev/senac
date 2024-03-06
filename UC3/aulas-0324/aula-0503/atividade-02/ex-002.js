const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach(function (paragrafo) {
	console.log(paragrafo.innerText);
});
