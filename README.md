# Third-Party-API-Task-Board-UCI

# Description
In this challenge I was tasked with creating a working Task Board that would allow the user to craete multiple tasks and create cards that the user would then be able to drag between "to-do, in-progress, and done"

# Usage
When the page is loaded the user will click on the "add task" button at the top of the page. Then the user will fill out the required feilds and then click "save task." The card will then appear on the page with the provided information. The user can then drag the card between the various completion levels as they want. 

# Completed Tasks 
WHEN I open the task board
THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)
WHEN I view the task board for the project
THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)
WHEN I click on the button to define a new task
THEN I can enter the title, description and deadline date for the new task into a modal dialog
WHEN I click the save button for that task
THEN the properties for that task are saved in localStorage
WHEN I drag a task to a different progress column
THEN the task's progress state is updated accordingly and will stay in the new column after refreshing
WHEN I click the delete button for a task
THEN the task is removed from the task board and will not be added back after refreshing
WHEN I refresh the page
THEN the saved tasks persist
![Screenshot 2024-02-29 at 9 20 58 PM](https://github.com/jasondang4/Third-Party-API-Task-Board-UCI/assets/159833505/862f7b53-84c1-40d5-b72c-44a48fd96a35)

