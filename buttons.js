// WRITE YOUR CODE IN HERE:



for (let i = 1; i < 101; i++) {
    const newButton = document.createElement('button');
    newButton.innerText='Button!';
    const buttonDiv = document.querySelector('#container');
    buttonDiv.appendChild(newButton);    
}
