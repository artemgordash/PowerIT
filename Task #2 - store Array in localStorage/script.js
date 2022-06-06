const todoSubtitle = document.querySelector('.todo__subtitle');
const todoInput = document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__button');
const todosDiv = document.querySelector('.todo__tasks');

const todo = {
  init() {
    const fromStorage = localStorage.getItem('todo');
    if (fromStorage) {
      todosDiv.innerHTML = fromStorage;
      todo.subtitle.update();
    }
  },
  add() {
    if (todoInput.value) {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'todo__task task';
      taskDiv.innerHTML = `
        <span class="task__text">${todoInput.value}</span>
        <button class="task__edit">&#9998;</button>
        <button class="task__remove">&#10060;</button>`;
      todosDiv.appendChild(taskDiv);
      todo.save();
      todo.subtitle.update();
      todo.input.clear();
    }
  },
  save() {
    localStorage.setItem('todo', todosDiv.innerHTML);
  },
  action(e) {
    if (e.target.classList.contains('task__edit')) {
      const taskText = e.target.previousElementSibling;
      taskText.contentEditable = true;
      taskText.addEventListener('blur', () => {
        taskText.contentEditable = false;
        todo.save();
      });
    } else if (e.target.classList.contains('task__remove')) {
      e.target.parentElement.remove();
      todo.save();
      todo.subtitle.update();
    }
  },
  subtitle: {
    update() {
      todoSubtitle.textContent = `${todosDiv.querySelectorAll('.task').length || 0} tasks`;
    },
  },
  input: {
    clear() {
      todoInput.value = '';
    },
  },
};
todo.init();

todoButton.addEventListener('click', todo.add);
todosDiv.addEventListener('click', todo.action);
