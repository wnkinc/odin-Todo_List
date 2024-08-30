import 'normalize.css'; // Importing normalize.css from node_modules

import "./styles.css";
import { createTodoFromForm, createProjectFromForm } from './AppLogic';
import { createTodoForm, createProjectForm } from './DOM-Stuff';

// Adding the forms to the sidebar
const sidebar = document.getElementById('sidebar');
sidebar.appendChild(createTodoForm());
sidebar.appendChild(createProjectForm());
// hide forms
const todoForm = document.querySelector('#todoForm');
todoForm.style.display = 'none';
const projectForm = document.querySelector('#projectForm');
projectForm.style.display = 'none';

// Add event listener to the form
document.getElementById('todoForm').addEventListener('submit', createTodoFromForm);
document.getElementById('projectForm').addEventListener('submit', createProjectFromForm);

// reveal forms
let addTodoForm = document.createElement('button');
addTodoForm.classList.add('addButton');
addTodoForm.textContent = 'Add To-Do';
addTodoForm.addEventListener('click', () => {
    todoForm.style.display = 'flex';
    const addButton = document.querySelector('.addButton');
    addButton.style.display = 'none';
});
sidebar.insertBefore(addTodoForm, projectForm);

let addProjectForm = document.createElement('button');
addProjectForm.classList.add('addProject');
addProjectForm.textContent = 'Add Project';
addProjectForm.addEventListener('click', () => {
    projectForm.style.display = 'flex';
    const addProject = document.querySelector('.addProject');
    addProject.style.display = 'none';
});
sidebar.appendChild(addProjectForm);