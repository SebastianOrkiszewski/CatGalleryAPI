const btn = document.querySelector('#btn');
const img = document.querySelector('#cat');

btn.addEventListener('click', nextCat);

function nextCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        img.innerHTML = `<img src=${data.file} alt="cat" />`
    });
}

console.log(nextCat());
