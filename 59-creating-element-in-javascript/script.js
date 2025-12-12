const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
//  const firstImage = document.querySelector('img')

const paragraph = document.createElement('p')
// paragraph.innerText="Hello"
// container.append(paragraph)
// paragraph.classList.add("myPara")

/* 
 for(let i=0;i<=100;i++){
  const newImage = firstImage.cloneNode();
  newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  container.append(newImage)

 } */

  const img = document.createElement("img")
  // img.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
  

  for(let i=2; i<=100;i++){
    
    const newImage = img.cloneNode()
    // newImage.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
      newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(newImage)
    
  }


