const endpoint = ("https://jsonplaceholder.typicode.com/users")
fetch(endpoint)
.then((result) => result.json())
.then((data) => console.log(data))