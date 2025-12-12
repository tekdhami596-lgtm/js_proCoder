const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

// container.appendChild(h1) --> cut from original position and paste at the end of the container
// container.appendChild(h1.cloneNode(true)) --> copy from original position and paste at the end of the container
/* container.appendChild(card.cloneNode(if not true it does not copy content inside the element ))
<div class=​"card">​</div>​flex --> */

/* for(let i=2; i<=100;i++){
  const content= container.appendChild(card.cloneNode(true)).innerHTML=i;
  // content.innerHTML = i;
} */