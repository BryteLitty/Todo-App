import './style.css';
import {
  loadItems, addTodo, removeItem, updateItem,
} from '../modules/functionalities.js';
import { itemCheck, clearCompleted } from '../modules/interactivity.js';

loadItems();
addTodo();
removeItem();
updateItem();
itemCheck();
clearCompleted();