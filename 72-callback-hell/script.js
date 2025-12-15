function makeHTTPRequest(method,url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
    callback(xhr.response)
    const xhr2 = new XMLHttpRequest();
  });

  xhr.open(method,url);
  xhr.send();
}

makeHTTPRequest('GET', "https://dummyjson.com/users", (data)=>{
  console.log(data.users[0])
})
// makeHTTPRequest('GET', "https://dummyjson.com/users/1")
