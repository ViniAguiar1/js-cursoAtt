const numero = Number(prompt('Digite um numero'));
const numeroTitulo = window.document.getElementById("numero-titulo");
// const texto1 = prompt("Digite um texto");
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
// texto.innerHTML = `<p>Seu numero + 2 é ${numero + 2} `;
texto.innerHTML += `<p>Raiz quadrade: ${numero ** (1/2)}.</p>`;
texto.innerHTML += `<p>${numero} é  ${Number.isInteger(numero)}:</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p>`;
