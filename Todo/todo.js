// let todoList = [
//     {
//         item: 'Buy milk',
//         dueDate: '08/06/2024'
//     },
//     {
//         item : 'Buy ketchup',
//         dueDate: '08/06/2024'
//     }
// ];

let todoList = [];
let storedList = localStorage.getItem('todoList') || JSON.parse(storedList);
displayItems();


function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    localStorage.setItem('todoList', JSON.stringify(todoList));

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';


    // displayElement.innerText = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        displayItems();">Delete</button> 
        `;
        // displayElement.innerText = displayElement.innerText + "\n" + todoList[i];
    }
    containerElement.innerHTML = newHtml;
}