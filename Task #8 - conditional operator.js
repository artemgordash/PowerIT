const user = {
    name: '12345',
    password: '12345',
}

const login = prompt('Login');
const password = prompt('Password');

if (login === user.name && password === user.password) {
    alert('Hello')
} else if (login === user.name && password !== user.password) {
    alert('Invalid password')
} else if (login !== user.name && password === user.password) {
    alert('Invalid login')
} else {
    alert('Error of validation')
}