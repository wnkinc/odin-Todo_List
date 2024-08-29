// Function to create the To-Do form
export function createTodoForm() {
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
export function createProjectForm() {
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