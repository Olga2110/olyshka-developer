

const all_tasks = document.querySelector('.all-tasks')
const loading  = document.getElementById('loading')


function displayTasks(tasks) {
    tasks.forEach((task) => {

        const container = document.createElement('div');
        container.classList.add('task-list');

        container.innerHTML =
            `<span>${task.title}</span> 
        <span>${task.completed}</span>`

        all_tasks.append(container);
    })
}

async function getTodos() {
    loading.style.display = 'block';
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            await new Promise(resolve => setTimeout(resolve, 2000))
            const json = await response.json()
            displayTasks(json.slice(0,9))
        }catch(err){
            console.log(err)
        }finally{
            loading.style.display = 'none';
        }
}

getTodos()
