// grab essentail elements from document
const todoItems = document.querySelector('.todo-items');
const form = document.querySelector('.input-form');
const newItem = document.querySelector('.form-data');

const items = JSON.parse(localStorage.getItem('TodoList')) || [];

// function to load items dynamically
// eslint-disable-next-line no-use-before-define
const loadItems = () => {
  todoItems.innerHTML = ' ';
  items.forEach((item) => {
    const content = `
        <li class="flex-item" id="${item.index}">
            <form class="list-item" id="edit-list">
                <input type="checkbox" class="checkbox">
                <input type="text" class="desc" value="${item.description}">
            </form>
            <i class="fa-solid fa-ellipsis-vertical" id="drag"></i>
            <i class="fa-regular fa-trash-can hidden" id="delete"></i>
        </li>        
        `;
    todoItems.innerHTML += content;
  });

  // eslint-disable-next-line no-use-before-define
  removeItem();
  // eslint-disable-next-line no-use-before-define
  updateItem();
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
    localStorage.setItem('TodoList', JSON.stringify(items));
    form.reset();
    // eslint-disable-next-line no-use-before-define
    loadItems();
  });
};

const removeItem = () => {
  const deleteBtn = document.querySelectorAll('#delete');
  const dragBtn = document.querySelectorAll('#drag');

  dragBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btn.classList.add('hidden');
      deleteBtn[index].classList.remove('hidden');
      deleteBtn[index].addEventListener('click', (e) => {
        const btnID = e.target.parentNode.id - 1;

        items.splice(items[btnID], 1);
        items.forEach((todo, idx) => {
          todo.index = idx + 1;
        });
        localStorage.setItem('TodoList', JSON.stringify(items));
        loadItems();
      });
    });
  });
};

// funtion to edit item
const updateItem = () => {
  const editList = document.querySelectorAll('#edit-list');

  editList.forEach((item, index) => {
    item.addEventListener('input', (e) => {
      items[index].description = e.target.value;
      localStorage.setItem('TodoList', JSON.stringify(items));
    });
  });
};

export {
  loadItems, addTodo, removeItem, updateItem,
};