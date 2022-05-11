const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (object) => {
    for (el in object) {
        if (typeof(object[el]) === 'number') {
            object[el] *= 2
        }
    }
}

multiplyNumeric(menu)