import 'normalize.css'; // Importing normalize.css from node_modules

import "./styles.css";
import { createTodoFromForm, createProjectFromForm, getCurrrentDate } from './AppLogic';
import { revealForms, addHideForms } from './DOM-Stuff';

addHideForms();

// Add event listener to the form
document.getElementById('todoForm').addEventListener('submit', createTodoFromForm);
document.getElementById('projectForm').addEventListener('submit', createProjectFromForm);

revealForms();

// **********************

getCurrrentDate();
