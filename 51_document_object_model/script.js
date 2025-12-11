const h1 = document.querySelector("h1");
h1.style.color = "hotpink";
h1.style.backgroundColor = "green";

const links = document.querySelectorAll("a");
/* link.forEach((tag)=>{
tag.style.color = "red"
}) */

for (const link of links) {
  // link.style.color="teal"
  // link.style.textDecorationLine="none"
  // link.style.fontWeight = 700;
  // link.style.fontFamily="cursive"

/*   link.style.cssText = `color:teal;
  font-size: 18px;
  font-family: cursive;
  font-weight: 700;
  text-decoration-line: none;
`*/
// link.className = 'green-link wavy-link'
//  const green-link = link.setAttribute('class','green-link');
// link.className = 'wavy-link'

link.classList.add('green-link')
link.classList.remove('my-link')
}
const h2 = document.querySelector('h2');
h2.classList.add('hidden')
h2.classList.remove('hidden')
h2.classList.toggle('hidden')

const firstLink = document.querySelector("body > p:nth-child(4) > a:nth-child(2)")







