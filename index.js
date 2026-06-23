

const all_tasks = document.querySelector('.all-tasks')
const loading  = document.getElementById('loading')

const button = document.querySelector('.button_add_task')
const input = document.querySelector('.input-for-add-task')

const error = document.querySelector('.error')


const deleteTask = (container) => {
    const buttonDelete = container.querySelector('.delete-task');
        buttonDelete.addEventListener('click', (event) => {
            const task = event.target.closest('.task-list');
            task.remove();
        })

}
const buildTask = (task) => {
    const container = document.createElement('div');
    container.classList.add('task-list');

    container.innerHTML =
        `<span>${task.title}</span> 
         <span>${task.body?.slice(0,20)}</span>
         <button class="delete-task">Удалить</button>`

    deleteTask(container)


    return container;
}

function displayTasks(tasks) {
    tasks.forEach((task) => all_tasks.append(buildTask(task)))
}

async function getTodos() {
    loading.style.display = 'block';
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            displayTasks(json.slice(0,9))
        }catch(err){
            console.log(err)
            error.style.display = 'block';

        }finally{
            loading.style.display = 'none';
        }
}


function addTasks(){
    button.addEventListener('click',()=>{
    const newTasks = {
        title:input.value,
        completed:false,
    };
    postTasks(newTasks)
    all_tasks.append(buildTask(newTasks));
    input.value = '';
})
}

async function postTasks(data){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        console.log(await response.json())
    }catch(err){
        console.log(err)
    }
}


getTodos()
addTasks()
