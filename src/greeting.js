// greeting.js
export function loadHomePage() {
    const bodyElement = document.querySelector('body');

    const createH1 = document.createElement('h1');
    createH1.textContent = 'Hello, World!';
    bodyElement.appendChild(createH1);

    const greeting = "Hello, Odinite!";
    console.log(greeting);
}