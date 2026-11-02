function combineTask(event){
    //event.preventDefault();
    let task = new Object;
    console.log(task);
    console.log(typeof(task));
    task.description = document.getElementById('inputTask').value;
    task.deadline = new Date(document.getElementById('deadline').value).getTime();
    task.created = new Date().getTime();
    task.status = 0;
        // localStorage.setItem(++localStorage.length,JSON.stringify(task));
        localStorage.setItem(crypto.randomUUID(),JSON.stringify(task));
     console.log(task);
}
console.log(localStorage.length)
document.querySelector('form').addEventListener('submit', combineTask)
let tableTasks = document.querySelector('table');
for(let i =0; i<=localStorage.length; i++){
    let currentTask = JSON.parse(localStorage.getItem(localStorage.key(i)));
    let uidKey = localStorage.key(i);
    console.log(currentTask)
    console.log(uidKey)
    if(currentTask != null){
        let status ='';
        let styleDeadline = '';
        const Deadline = (currentTask.deadline - new Date().getTime()) / 1000 /60/60 ;

        if(currentTask.status == 1){styleDeadline = 'completed'}
        else if(Deadline<=0){styleDeadline = 'deadlined'}
        else if(Deadline<24){styleDeadline = 'deadline24'}
        if(currentTask.status== 0)status =`<button onclick=change_taskStatus('${uidKey}')\>выполнить</button>`;
        else{status =`<button onclick=change_taskStatus('${uidKey}') class='completed'>выполнено</button>`}
        tableTasks.innerHTML += `<tr>
                <td>${i+1}</td>
                <td>${currentTask.description}</td>
                <td>${new Date(currentTask.created).toLocaleString('ru')}</td>
                <td class='${styleDeadline}'>${new Date(currentTask.deadline).toLocaleString('ru')}</td>
                <td>${status}</td>
                <td>
                    <button onclick="localStorage.removeItem('${uidKey}'); location.reload();" >удалить</button>
                </td>

            </tr>`;
    }    
}
function change_taskStatus(key){
    let currentTask = JSON.parse(localStorage.getItem(key));
    if(currentTask.status== 0)currentTask.status =1;
    else{currentTask.status =0;}
    localStorage.setItem(key, JSON.stringify(currentTask));
    location.reload();
}
let currentDateHuman = new Date();
let currentDateTM = currentDateHuman.getTime();
console.log(currentDateHuman);
console.log(currentDateTM);
console.log(new Date(currentDateTM));
