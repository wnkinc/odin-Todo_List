import { todoModule } from "./constructors";

// Function to create a Todo from form input
export function createTodoFromForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Gather form input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
    const project = document.getElementById('project').value; // Get selected project value

    // Put the values into an array
    const todoData = [title, description, dueDate, priority, notes, project];

    // Use the array to create a new Todo object
    const newTodo = new todoModule.Todo(...todoData);

    console.log(newTodo);
}