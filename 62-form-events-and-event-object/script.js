const userInput = document.querySelector("#username");
const paragraph = document.querySelector("p");
const form = document.querySelector('form')

/* userInput.addEventListener('click',()=>{
  console.log('hii')
})

userInput.addEventListener('dblclick',()=>{
  console.log('input double clicked')
})
 */

/* let inputValue
userInput.addEventListener('input',(e)=>{
  console.log(e.target.value)
  inputValue = e.target.value
  paragraph.innerText = e.target.value
  console.log('input event fired')
}) */

/* let inputValue;
userInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  inputValue = e.target.value;
  paragraph.innerText = e.target.value;
  // console.log("input event fired");
});
 */

/* let inputValue;
userInput.addEventListener("focus", (e) => {
  console.log(e.type)
  console.log(e.target.value);
  inputValue = e.target.value;
  paragraph.innerText = e.target.value;
  // console.log("input event fired");
});
 */

/* let inputValue;
userInput.addEventListener("blur", (e) => {
  console.log(e.type)
  console.log(e.target.value);
  inputValue = e.target.value;
  paragraph.innerText = e.target.value;
  // console.log("input event fired");
}); */

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const myFormData = new FormData(form)

  for(const p of myFormData.entries()){
    console.log(p)
  }
})
