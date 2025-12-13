const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

/* document.addEventListener('click',(e)=>{
  console.log("document event listener")
})

document.body.addEventListener('click',(e)=>{
  console.log("body event listener")
})


green.addEventListener('click',(e)=>{
  console.log("green event listener")
})


pink.addEventListener('click',(e)=>{
  console.log("pink event listener")
})


blue.addEventListener('click',(e)=>{
  console.log("blue event listener")
}) 

blue.addEventListener('click',(e)=>{
  e.stopPropagation() // used to stop event bubbling
  console.log("blue event listener")
}) */

document.addEventListener('click',(e)=>{
  console.log("document event listener")
},{capture:true})

document.body.addEventListener('click',(e)=>{
  console.log("body event listener")
},{capture:true})


green.addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log("green event listener")
},{capture:true})


pink.addEventListener('click',(e)=>{
  console.log("pink event listener")
},{capture:true})


blue.addEventListener('click',(e)=>{
  console.log("blue event listener")
},{capture:true})