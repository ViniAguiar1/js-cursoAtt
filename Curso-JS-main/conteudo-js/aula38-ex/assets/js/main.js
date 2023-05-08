const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;

console.log(backGroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = "#ffffff"
}