const getState = () => JSON.parse(localStorage.getItem('TodoList')) || [];

const itemCheck = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const items = getState();

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', (e) => {
      items[index].completed = e.target.checked;
      localStorage.setItem('TodoList', JSON.stringify(items));
    });
  });
};

const clearCompleted = () => {
  const clearBtn = document.querySelector('.btn-clear');

  clearBtn.addEventListener('click', () => {
    const items = getState();
    const newItems = items.filter((item) => item.completed === false);
    newItems.forEach((todo, idx) => {
      todo.index = idx + 1;
    });
    localStorage.setItem('TodoList', JSON.stringify(newItems));

    window.location.reload();
  });
};

export { itemCheck, clearCompleted };