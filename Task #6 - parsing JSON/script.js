/* Используя структуру из предыдущей задачи, создайте массив сотрудников и напишите следующий функционал:
вывод в странице всех сотрудников
вывод в отдельный HTML блок общей информации о ЗП сотрудников
средняя ЗП по всем сотрудникам
минимальная ЗП
максимальная ЗП
сумма всех ЗП  */

const employeesJSON = JSON.stringify([
  {
    "about": {
      "fullName": "Jack Mouse",
      "dateOfBirth": "13/05/2022",
      "placeOfBirth": "Texas, USA",
      "sex": "male",
      "IDNP": 123456789123,
      "positon": "Intern",
      "salaryPerYear": 18000,
      "stage": "4 years",
      "schedule": "8:00 - 17:00"
    },
    "contacts": {
      "phone": "+37378326131",
      "email": "jhonwilson@gmail.com"
    }
  },
  {
    "about": {
      "fullName": "Jack Wilson",
      "dateOfBirth": "13/05/2022",
      "placeOfBirth": "Texas, USA",
      "sex": "male",
      "IDNP": 123456789123,
      "positon": "Intern",
      "salaryPerYear": 23000,
      "stage": "4 years",
      "schedule": "8:00 - 17:00"
    },
    "contacts": {
      "phone": "+37378326131",
      "email": "jhonwilson@gmail.com"
    }
  },
  {
    "about": {
      "fullName": "Jack Orban",
      "dateOfBirth": "13/05/2022",
      "placeOfBirth": "Texas, USA",
      "sex": "male",
      "IDNP": 123456789123,
      "positon": "Intern",
      "salaryPerYear": 25000,
      "stage": "4 years",
      "schedule": "8:00 - 17:00"
    },
    "contacts": {
      "phone": "+37378326131",
      "email": "jhonwilson@gmail.com"
    }
  }
])

const employees = JSON.parse(employeesJSON)

employees.forEach(el => {
  document.querySelector('.employees')
  .appendChild(document.createElement('p'))
  .textContent = `Name: ${el.about.fullName}`
});

const totalSalaries = employees.reduce((acc, curr) => {
  return acc + curr.about.salaryPerYear
}, 0)

document.querySelector('.salaries')
  .appendChild(document.createElement('p'))
  .textContent = `Average salary: ${totalSalaries / employees.length}$`


document.querySelector('.salaries')
  .appendChild(document.createElement('p'))
  .textContent = `Min salary: ${employees.sort((a, b) => {
    return b.about.salaryPerYear - a.about.salaryPerYear 
  })
  .slice(-1)[0].about.salaryPerYear}$`


document.querySelector('.salaries')
  .appendChild(document.createElement('p'))
  .textContent = `Min salary: ${employees.sort((a, b) => {
    return b.about.salaryPerYear - a.about.salaryPerYear
  })
  .slice(0)[0].about.salaryPerYear}$`

document.querySelector('.salaries')
  .appendChild(document.createElement('p'))
  .textContent = `Sum of salaries: ${totalSalaries}$`







