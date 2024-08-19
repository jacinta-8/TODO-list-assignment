// Query for the submit button and input task field once at the beginning
const submit = document.querySelector('#submitButton');
const newTask = document.querySelector('#taskInput');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', function() {
    if (newTask.value.trim() !== '') {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

// Listen for submission of form
document.querySelector('#taskForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Find the task the user just submitted
    const task = newTask.value.trim();

    // Create a list item for the new task
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Add the new element to our unordered list
    const taskList = document.querySelector('#taskList');
    taskList.append(listItem);

    // Clear the input field and disable the submit button again
    newTask.value = '';
    submit.disabled = true;

    // Return false to prevent default submission
    return false;
});
