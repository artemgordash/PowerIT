/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
Результат (дерево):
Рыбы
форель
лосось
Деревья
Огромные
секвойя
дуб
Цветковые
яблоня
магнолия

Выберите один из двух способов решения этой задачи:

Создать строку, а затем присвоить через container.innerHTML.
Создавать узлы через методы DOM.
Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.
 */

const data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
    },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      },
    }
  };

const container = document.getElementById('container')

const createTree = (container, obj) => {
    for (el in obj) {
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        container.appendChild(ul).appendChild(li).textContent = el
        if (Object.keys(obj[el]).length > 0) {
            createTree(ul, obj[el])
        }
    }
}

createTree(container, data)
