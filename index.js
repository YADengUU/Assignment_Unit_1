const inputBox = $('#input-box')
const listContainer = $('#list-container')

const addTask = () => {
    if (inputBox[0].value === '') {
        alert('You must something')
    } else {
        listContainer.append(`<li>${inputBox[0].value}<span>\u00d7</span></li>`)

    }
    inputBox[0].value === ''
}
listContainer[0].addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

const saveData = () => {
    localStorage.setItem('data', listContainer[0].innerHTML)
}
const showTasks = () => {
    listContainer[0].innerHTML = localStorage.getItem('data')
}
console.log(showTasks)
showTasks();