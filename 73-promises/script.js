const Resolvebutton = document.getElementById("Resolve-btn");
const rejectBtn = document.getElementById('reject-btn')

const p = new Promise((resolve, reject) => {
  Resolvebutton.addEventListener("click", () => {
    resolve("promise resolved");
  });

  rejectBtn.addEventListener('click',()=>{
    reject('Promise rejected')
  })
});

p.then((data) => {
  console.log(data);
  return 155
}).then((data) => {
  console.log(data);
  return 'Anurag'
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})