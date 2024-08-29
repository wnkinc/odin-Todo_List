import 'normalize.css'; // Importing normalize.css from node_modules

import "./styles.css";
import { createTodoFromForm } from './callConstructor.js';

// Add event listener to the form
document.getElementById('todoForm').addEventListener('submit', createTodoFromForm);