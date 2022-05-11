dt = new Date(2014, 10, 2);

const add_years = (dt, years) => {
    return new Date(dt.setFullYear(dt.getFullYear() + years))
}

console.log(add_years(dt, 10).toString());
