const person = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: `email@domain.com`
    },
    address: `Moldova`,

    get getName() {
        console.log(this.name)
    },
    get getAge() {
        console.log(this.age)
    },
    get getSalary() {
        console.log(this.salary)
    },
    get getContacts() {
        console.log(this.contacts.phone)
        console.log(this.contacts.email)
    },
    get getAdress() {
        console.log(this.address)
    },

}

person.getName
person.getAge
person.getContacts
person.getAdress
