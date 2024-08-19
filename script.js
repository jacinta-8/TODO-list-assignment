const submit = document.querySelector('#submitButton');
const newTask = document.querySelector('#taskInput');

submit.disabled = true;

newTask.addEventListener('input', function() {
    if (newTask.value.trim() !== '') {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

document.querySelector('#taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const task = newTask.value.trim();

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const taskList = document.querySelector('#taskList');
    taskList.append(listItem);

    newTask.value = '';
    submit.disabled = true;

    return false;
});
