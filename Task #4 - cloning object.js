const user1 = {
	name: `User 1`,
	age: 123,
}

const user2 = {}

for (el in user1) {
    user2[el] = user1[el]
}


user2.name = `User 2`
user2.age = 321

console.log(user1)
console.log(user2)