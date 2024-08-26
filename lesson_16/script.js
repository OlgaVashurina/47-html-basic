const img = document.querySelector('#img-dog');
const btn = document.querySelector('#btn-upload');
const stop = document.querySelector('#btn-stop')

async function getDog() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  img.src = data.message;
}

const interval = setInterval(() => {
  getDog()
}, 3000);


btn.addEventListener('click', () => {
  getDog()
})

stop.addEventListener('click', () => {
  clearInterval(interval)
})