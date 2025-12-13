const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
// const addCard = document.querySelector('.add-card')

/* function sayHi(){
  console.log('Hii')
}

function secondSayHi(){
  console.log('second Hii')
}

// h1.onclick = sayHi
// h1.onclick=secondSayHi
h1.addEventListener('click',sayHi)
h1.addEventListener('click',secondSayHi)
card.addEventListener('click',function(){
  console.log('clicked card one')
}) */

  let count =1;
  card.addEventListener('click',function(){
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML =count++
    container.append(newCard)
  })