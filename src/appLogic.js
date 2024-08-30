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
    const newTodo = new Todo(...todoData); // Assuming Todo is in the global scope or correctly imported

    const modTodoForm = document.querySelector('#todoForm');
    modTodoForm.style.display = 'none';
    const modAddButton = document.querySelector('.addButton');
    modAddButton.style.display = 'block';

    console.log(newTodo);
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
    const newProject = new Projects(...projectData); // Assuming Projects is in the global scope or correctly imported

    let modProjectForm = document.querySelector('#projectForm');
    modProjectForm.style.display = 'none';
    let modAddProject = document.querySelector('.addProject');
    modAddProject.style.display = 'block';

    console.log(newProject);
}
