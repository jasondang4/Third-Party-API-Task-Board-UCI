// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const cardHtml = `
    <div class="card mb-3 task-card">
      <div class="card-body">
        <h5 class="card-title">${task.title}</h5>
        <p class="card-text">${task.description}</p>
        <p class="card-text"><strong>Deadline:</strong> ${task.deadline}</p>
      </div>
    </div>
  `;
  return cardHtml;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $('#todo-cards').empty();
    $('#in-progress-cards').empty();
    $('#done-cards').empty();
    
    taskList.forEach(task => {
      const cardHtml = createTaskCard(task);
      switch (task.status) {
        case 'todo':
          $('#todo-cards').append(cardHtml);
          break;
        case 'inProgress':
          $('#in-progress-cards').append(cardHtml);
          break;
        case 'done':
          $('#done-cards').append(cardHtml);
          break;
      }
    });
  
    // Make task cards draggable
    $('.task-card').draggable({
      containment: '.swim-lanes',
      revert: 'invalid',
      stack: '.task-card',
      cursor: 'move'
    });
  }

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form values
  const title = $('#taskTitle').val();
  const description = $('#taskDescription').val();
  const deadline = $('#taskDeadline').val();
  
  // Create new task object
  const newTask = {
    id: generateTaskId(),
    title: title,
    description: description,
    deadline: deadline,
    status: 'todo' // Initial status
  };
  
  // Add new task to taskList array
  taskList.push(newTask);

  // Save updated taskList and nextId to localStorage
  localStorage.setItem('tasks', JSON.stringify(taskList));
  localStorage.setItem('nextId', JSON.stringify(nextId));

  // Render updated task list
  renderTaskList();

  // Close modal
  $('#formModal').modal('hide');

  // Reset form fields
  $('#taskForm')[0].reset();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  renderTaskList(); // Render initial task list
  
  // Add event listener for form submission
  $('#taskForm').on('submit', handleAddTask);
});

