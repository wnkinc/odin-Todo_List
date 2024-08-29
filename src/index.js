import 'normalize.css'; // Importing normalize.css from node_modules

import "./styles.css";
import { createTodoFromForm, createProjectFromForm } from './appLogic.js';
import { createTodoForm, createProjectForm } from './DOM-Stuff';

// Adding the forms to the sidebar
const sidebar = document.getElementById('sidebar');
sidebar.appendChild(createTodoForm());
sidebar.appendChild(createProjectForm());

// Add event listener to the form
document.getElementById('todoForm').addEventListener('submit', createTodoFromForm);
document.getElementById('projectForm').addEventListener('submit', createProjectFromForm);