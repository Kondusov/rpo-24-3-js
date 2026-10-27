function combineTask(event){
    event.preventDefault();
    let task = new Object;
    console.log(task);
    console.log(typeof(task));
    task.description = document.getElementById('inputTask').value;
    task.deadline = document.getElementById('deadline').value;
    task.created = new Date();
        localStorage.setItem(localStorage.length++,JSON.stringify(task));
     console.log(task);
}
document.querySelector('form').addEventListener('submit', combineTask)
let tableTasks = document.querySelector('table');
for(let i =0; i<localStorage.length; i++){
    let currentTask = JSON.parse(localStorage.getItem(i));
    tableTasks.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${currentTask.description}</td>
            <td>${currentTask.created}</td>
            <td>${currentTask.deadline}</td>
        </tr>`;
}
