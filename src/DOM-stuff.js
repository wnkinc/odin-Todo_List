// Function to create the To-Do form
function createTodoForm() {
    const todoForm = document.createElement('form');
    todoForm.id = 'todoForm';

    todoForm.innerHTML = `
        <input type="text" id="title" placeholder="Title" />
        <input type="text" id="description" placeholder="Description" />
        <div>Due Date <input type="date" id="dueDate" /></div>
        <div class="checkbox"><input type="checkbox" id="priority" /> Priority</div>
        <textarea id="notes" placeholder="Notes"></textarea>
        <select id="project">
            <option value="" disabled selected hidden>Select a project</option>
            <option value="Personal">Personal</option>
        </select>
        <button type="submit">Create To-Do</button>
    `;

    return todoForm;
}

// Function to create the Project form
function createProjectForm() {
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';

    projectForm.innerHTML = `
        <input type="text" id="pTitle" placeholder="Title" />
        <input type="text" id="pDescription" placeholder="Description" />
        <div>Due Date <input type="date" id="pDueDate" /></div>
        <div class="checkbox"><input type="checkbox" id="pPriority" /> Priority</div>
        <textarea id="pNotes" placeholder="Notes"></textarea>
        <button type="submit">Create Project</button>
    `;

    return projectForm;
}

export function revealForms() {
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
}

export function addHideForms() {
    // Adding the forms to the sidebar
    const sidebar = document.getElementById('sidebar');
    sidebar.appendChild(createTodoForm());
    sidebar.appendChild(createProjectForm());
    // hide forms
    const todoForm = document.querySelector('#todoForm');
    todoForm.style.display = 'none';
    const projectForm = document.querySelector('#projectForm');
    projectForm.style.display = 'none';
}