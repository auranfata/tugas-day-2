fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => {
    const usernames = json.map((user) => user.username);
    console.log(usernames)
});