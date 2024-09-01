import { format } from 'date-fns';

// Constructor functions
function Projects(title, description, dueDate, notes, todo = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.todo = todo;
}

function Todo(title, description, dueDate, priority, notes, project, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.id = id;

}

export const todos = [];
export const projects = [];
let todoID = 1;
const defaultProject = new Projects('No Project Selected', '', '', '',);
projects.push(defaultProject);
updateProjectsInProjects();

function updateProjectsInTodo() {
    const todoSelect = document.querySelector('#project');
    todoSelect.innerHTML = '';

    projects.forEach((project) => {
        const anotherOption = document.createElement('option');
        anotherOption.value = project.title;
        anotherOption.textContent = project.title;
        todoSelect.appendChild(anotherOption);
    });
}

function updateProjectsInProjects() {
    const projectButtons = document.querySelector('.projectButtons');
    projectButtons.innerHTML = '';

    projects.forEach((project) => {
        const projectButton = document.createElement('button');
        projectButton.classList.add('projectList');
        projectButton.textContent = project.title;


        projectButton.addEventListener('click', () => {
            const filteredTodos = todos.filter(todo => todo.project === project.title);
            updateTodoListByProject(filteredTodos);
            const projectTitleSelected = document.querySelector('.projectTitleSelected');
            projectTitleSelected.textContent = project.title;
        });
        projectButtons.appendChild(projectButton);
    });
}

function updateTodoListByProject(filteredTodos = todos) {
    const main = document.querySelector('.main');
    main.innerHTML = ''; // Clear the current list

    filteredTodos.forEach((todo) => { // Use filteredTodos here
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        itemContainer.dataset.id = todo.id;

        const itemButton = document.createElement('button');
        itemButton.classList.add('todoItem');
        const div1 = document.createElement('div');

        const removeBtn = document.createElement('span');
        removeBtn.classList.add('removeBtn');
        removeBtn.textContent = '❌';
        removeBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up to the button
        });
        removeBtn.addEventListener('click', () => {
            const todoIndex = todos.findIndex((t) => t.id === todo.id);
            if (todoIndex !== -1) {
                todos.splice(todoIndex, 1);
            }
            updateTodoListByProject(filteredTodos.filter(t => t.id !== todo.id));
        });

        div1.appendChild(removeBtn);

        const completeCheck = document.createElement('input');
        completeCheck.classList.add('complete');
        completeCheck.type = 'checkbox';
        div1.appendChild(completeCheck);

        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        div2.textContent = todo.title;
        if (todo.priority) div2.classList.add('priorityMark');
        if (todo.dueDate !== '') div3.textContent = format(new Date(todo.dueDate), 'MM/dd/yyyy');
        itemButton.append(div1, div2, div3);
        itemContainer.appendChild(itemButton);

        const toggleTodoDiv = document.createElement('div');
        toggleTodoDiv.classList.add('toggleTodo');
        itemContainer.appendChild(toggleTodoDiv);
        toggleTodoDiv.style.display = 'none';

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = todo.description;
        toggleTodoDiv.appendChild(descriptionDiv);

        const notesDiv = document.createElement('textarea');
        notesDiv.classList.add('notes');
        notesDiv.textContent = todo.notes;
        toggleTodoDiv.appendChild(notesDiv);

        itemButton.addEventListener('click', () => {
            toggleTodoDiv.style.display = toggleTodoDiv.style.display === 'flex' ? 'none' : 'flex';
        });

        notesDiv.addEventListener('input', () => {
            todo.notes = notesDiv.value;
        });

        completeCheck.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        completeCheck.addEventListener('change', (event) => {
            todo.complete = event.target.checked;
            div2.style.textDecoration = todo.complete ? 'line-through' : 'none';
        });

        main.appendChild(itemContainer);
    });
}






// Function to create a Todo from form input
export function createTodoFromForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Gather form input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').checked;
    const notes = document.getElementById('notes').value;
    const project = document.getElementById('project').value; // Get selected project value

    // Put the values into an array
    const todoData = [title, description, dueDate, priority, notes, project];
    todoData.push(todoID);
    todoID++;

    // Use the array to create a new Todo object
    const newTodo = new Todo(...todoData);

    const modTodoForm = document.querySelector('#todoForm');
    modTodoForm.style.display = 'none';
    const modAddButton = document.querySelector('.addButton');
    modAddButton.style.display = 'block';

    todos.push(newTodo);
    console.log(todos);

    // Filter todos based on the selected project
    const filteredTodos = todos.filter(todo => todo.project === project);

    // Pass the filtered todos to updateTodoListByProject
    updateTodoListByProject(filteredTodos);

    const projectTitleSelected = document.querySelector('.projectTitleSelected');
    projectTitleSelected.textContent = project;

    // Reset the form fields
    event.target.reset(); // Resets the form to its initial state
}

// Function to create a Project from form input
export function createProjectFromForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Gather form input values
    const title = document.getElementById('pTitle').value;
    const description = document.getElementById('pDescription').value;
    const dueDate = document.getElementById('pDueDate').value;
    const notes = document.getElementById('pNotes').value;
    const todo = []; // Initialize with an empty array or gather from form if applicable

    // Put the values into an array
    const projectData = [title, description, dueDate, notes, todo];

    // Use the array to create a new Project object
    const newProject = new Projects(...projectData);

    let modProjectForm = document.querySelector('#projectForm');
    modProjectForm.style.display = 'none';
    let modAddProject = document.querySelector('.addProject');
    modAddProject.style.display = 'block';

    projects.push(newProject);
    console.log(projects);

    updateProjectsInTodo();
    updateProjectsInProjects();

    // Reset the form fields
    event.target.reset(); // Resets the form to its initial state
}

export function getCurrrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const h1Date = document.querySelector('.currentDate');
    h1Date.textContent = `${month}/${day}/${year}`;
}