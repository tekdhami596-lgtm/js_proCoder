const user = {
  name: "tek",
  age: 23,
};

try {
  console.log(user.address.city);
} catch (err) {
  console.log(err);
}

/* try{
  console.log(a)
} catch(err){
  console.log(err)
}

console.log(2+7)
console.log('hello') */

async function makeAsyncRequest() {
  try {
    const url =
      "https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
makeAsyncRequest().then((data) => {
  console.log(data);
});
