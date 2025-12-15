/* fetch("https://dummyjson.com/products", {
  method: 'GET'
})
.then((res) => res.json())
.then((data)=>console.log(data))
 */

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  body: JSON.stringify({
    title: 'BMW Pencil',
    category: 'Stationary'
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log)
.catch((err)=>{
  console.log(err)
})

