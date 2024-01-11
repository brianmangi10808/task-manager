function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskList =document.getElementById('taskList');
    
    const taskDescription = taskInput.value;

  if (taskDescription.trim() !== ''){
    const listItem = document.createElement('li');
    listItem.className = 'task';

    listItem.innerHTML =`<span>${taskDescription}</span>
    
    <button class = "deleteButton" onclick = "deleteTask(this)">Delete</button>`;

    taskList.appendChild(listItem);
    taskInput.value = '';
  }

}
function deleteTask(button){
    const listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}