export const todoModule = (function () {
    function Todo(title, description, dueDate, priority, notes, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
        
        // Add methods here if needed
    }

    return {
        Todo
    };
})();

export const projectModule = (function () {
    function Projects(title, description, dueDate, priority, notes, []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.todo = [];

        // Add methods here if needed
    }

    return {
        Projects
    };
})();

// Try wrapping it in some { curly braces } now,
// which makes it an object!
////////////console.log({ name, age, color });
// now it logs as - { name: "Bob", age: 28, color: "red" }