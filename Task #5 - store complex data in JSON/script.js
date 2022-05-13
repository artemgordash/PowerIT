/* Создайте JSON в котором будет хранится информация о сотруднике:
ФИО
дата рождения
номер мобильного телефона
адрес проживания
е-мэйл
пол
должность
дата начала работы
IDNP
сумма ЗП
место рождения
общий стаж работы (в годах)
отдел (подразделение где работает сотрудник)
номер домашнего телефона
рабочий график (с 8:00 до 17:00 и обед с 12: до 13:00)
Важно: разделите структуру на несколько уровней.

Создайте эту структуру при помощи https://jsoneditoronline.org/ и сохраните так чтобы созданный JSON был доступен по ссылке. Ссылку добавьте в JS файл (в комментариях).
Выводите созданный JSON в страницу (создайте для этого HTML+CSS шаблон) */

const employeeJSON = JSON.stringify({
    "about": {
      "fullName": "Jack Wilson",
      "dateOfBirth": "13/05/2022",
      "placeOfBirth": "Texas, USA",
      "sex": "male",
      "IDNP": "123456789123",
      "positon": "Intern",
      "salaryPerYear": "23000$",
      "stage": "4 years",
      "schedule": "8:00 - 17:00"
    },
    "contacts": {
      "phone": "+37378326131",
      "email": "jhonwilson@gmail.com"
    }
  })

const employee = JSON.parse(employeeJSON)

document.body.appendChild(document.createElement('p')).textContent = `Name: ${employee.about.fullName}`
document.body.appendChild(document.createElement('p')).textContent = `Birthday: ${employee.about.dateOfBirth}`
document.body.appendChild(document.createElement('p')).textContent = `Place of birth: ${employee.about.placeOfBirth}`
document.body.appendChild(document.createElement('p')).textContent = `Sex: ${employee.about.sex}`
document.body.appendChild(document.createElement('p')).textContent = `IDNP: ${employee.about.IDNP}`
document.body.appendChild(document.createElement('p')).textContent = `Position: ${employee.about.positon}`
document.body.appendChild(document.createElement('p')).textContent = `Salary per year: ${employee.about.salaryPerYear}`
document.body.appendChild(document.createElement('p')).textContent = `Stage: ${employee.about.stage}`
document.body.appendChild(document.createElement('p')).textContent = `Schedule: ${employee.about.schedule}`
document.body.appendChild(document.createElement('p')).textContent = `Phone: ${employee.contacts.phone}`
document.body.appendChild(document.createElement('p')).textContent = `Email: ${employee.contacts.email}`

