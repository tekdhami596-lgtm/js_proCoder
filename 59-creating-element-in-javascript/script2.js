const container = document.querySelector(".container");
// const imgContainer = document.createElement("div");

// imgContainer.classList.add("img-container");

// const newImage = document.createElement("img");
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;

// const paragraph = document.createElement("p");
// paragraph.innerText = 1;

// imgContainer.append(newImage, paragraph);
// container.append(imgContainer);

/* for (let i = 0; i <= 100; i++) {
  const imgContainer = document.createElement("div");

  imgContainer.classList.add("img-container");

  const newImage = document.createElement("img");
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  const paragraph = document.createElement("p");
  paragraph.innerText = `${i}`;

  imgContainer.append(newImage, paragraph);
  container.append(imgContainer);
  
}
 */
let myHTML = ``;
for (let i = 1; i <= 10; i++) {
  myHTML += `
  <div class = "img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">

  <p>${i}</p>
    </div>
`;
}

container.innerHTML = myHTML;
