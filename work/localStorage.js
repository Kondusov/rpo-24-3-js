function combineTask(event){
    //event.preventDefault();
    let task = new Object;
    console.log(task);
    console.log(typeof(task));
    task.description = document.getElementById('inputTask').value;
    task.deadline = document.getElementById('deadline').value;
    task.created = new Date();
    task.status = 0;
        localStorage.setItem(localStorage.length++,JSON.stringify(task));
     console.log(task);
}
console.log(localStorage.length)
document.querySelector('form').addEventListener('submit', combineTask)
let tableTasks = document.querySelector('table');
for(let i =0; i<localStorage.length; i++){
    let currentTask = JSON.parse(localStorage.getItem(i));
    let status ='';
    if(currentTask.status== 0)status =`<button onclick=change_taskStatus(${i})\>выполнить</button>`;
    else{status =`<button onclick=change_taskStatus(${i}) class='completed'>выполнено</button>`}
    tableTasks.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${currentTask.description}</td>
            <td>${currentTask.created}</td>
            <td>${currentTask.deadline}</td>
            <td>${status}</td>
            <td>
                <button onclick="localStorage.removeItem(${i}); location.reload();" >удалить</button>
            </td>

        </tr>`;
}
function change_taskStatus(key){
    let currentTask = JSON.parse(localStorage.getItem(key));
    if(currentTask.status== 0)currentTask.status =1;
    else{currentTask.status =0;}
    localStorage.setItem(key, JSON.stringify(currentTask));
    location.reload();
}

