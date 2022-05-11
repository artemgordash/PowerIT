const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
}

const displayName = (person) => {
    let {first, last, company} = person
    console.log(`Name: ${first} ${last}, Company: ${company}`)
}

displayName(person)