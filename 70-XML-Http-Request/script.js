const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((json) => {
//       image.src = json.message
//     })


const Xhr = new XMLHttpRequest()

Xhr.responseType = 'json'

Xhr.addEventListener('load',()=>{
  console.log(Xhr.response)
  image.src =  Xhr.response.message
})
Xhr.open('GET','https://dog.ceo/api/breeds/image/random')
Xhr.send()
})