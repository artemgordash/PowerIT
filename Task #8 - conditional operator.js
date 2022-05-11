const user = {
    name: '12345',
    password: '12345',
}

const inputLogin = prompt('Login');
const inputPassword = prompt('Password');

if (inputLogin === user.name && inputPassword === user.password) {
    alert('Hello')
} else if (inputLogin === user.name && inputPassword !== user.password) {
    alert('Invalid password')
} else if (inputLogin !== user.name && inputPassword === user.password) {
    alert('Invalid login')
} else {
    alert('Error of validation')
}