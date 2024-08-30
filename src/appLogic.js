// Constructor functions
function Projects(title, description, dueDate, priority, notes, todo = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.todo = todo;
}

function Todo(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
}

let todos = [];
let projects = [];

function updateProjectInTodo() {
    const todoSelect = document.querySelector('#project');
    todoSelect.textContent = '';
    const anotherOption = document.createElement('option');
    // Set the attributes
    anotherOption.value = ''; // or option.setAttribute('value', '');
    anotherOption.disabled = true; // or option.setAttribute('disabled', '');
    anotherOption.selected = true; // or option.setAttribute('selected', '');
    anotherOption.hidden = true; // or option.setAttribute('hidden', '');
    anotherOption.textContent = 'Select a project';
    todoSelect.appendChild(anotherOption);

    projects.forEach((project) => {
        const anotherOption = document.createElement('option');
        anotherOption.value = project.title;
        anotherOption.textContent = project.title;
        todoSelect.appendChild(anotherOption);
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

    // Use the array to create a new Todo object
    const newTodo = new Todo(...todoData);

    const modTodoForm = document.querySelector('#todoForm');
    modTodoForm.style.display = 'none';
    const modAddButton = document.querySelector('.addButton');
    modAddButton.style.display = 'block';

    todos.push(newTodo);
    console.log(todos);

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
    const priority = document.getElementById('pPriority').checked;
    const notes = document.getElementById('pNotes').value;
    const todo = []; // Initialize with an empty array or gather from form if applicable

    // Put the values into an array
    const projectData = [title, description, dueDate, priority, notes, todo];

    // Use the array to create a new Project object
    const newProject = new Projects(...projectData);

    let modProjectForm = document.querySelector('#projectForm');
    modProjectForm.style.display = 'none';
    let modAddProject = document.querySelector('.addProject');
    modAddProject.style.display = 'block';

    projects.push(newProject);
    console.log(projects);

    updateProjectInTodo();

    // Reset the form fields
    event.target.reset(); // Resets the form to its initial state
}