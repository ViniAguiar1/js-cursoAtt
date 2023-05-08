/* const tresHora = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHora + umDia);
console.log(data.toString()); */

// const data = new Date(2019, 3, 20, 15, 14, 27, 500);
// console.log(data.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
  }
  
  function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
  
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }
  
  const data = new Date();
  const dataBrasil = formataData(data);
  console.log(dataBrasil);