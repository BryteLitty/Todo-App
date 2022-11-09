import './style.css';

// Tasks array
const items = [
  {
    index: 1,
    description: 'Fish out important girls',
    completed: false,
  },
  {
    index: 2,
    description: 'Spread out love',
    completed: false,
  },
  {
    index: 3,
    description: 'Initiate the best times',
    completed: false,
  },
];

// grab essentail elements from document
const todoItems = document.querySelector('.todo-items');
const form = document.querySelector('form');
const newItem = document.querySelector('.form-data');

// function to load items dynamically
const loadItems = () => {
  todoItems.innerHTML = ' ';
  items.forEach((item) => {
    const content = `
        <li class="flex-item" id="${item.id}">
            <div class="list-item">
                <input type="checkbox">
                <p class="item">${item.description}</p>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </li>
        `;
    todoItems.innerHTML += content;
  });
};

// function to add new item to do
const addTodo = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodo = {
      index: items.length + 1,
      description: newItem.value,
      completed: false,
    };

    items.push(newTodo);
    form.reset();
    loadItems();
  });
};

loadItems();
addTodo();
