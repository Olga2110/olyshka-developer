

const all_tasks = document.querySelector('.all-tasks')

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
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const json = await response.json()
        displayTasks(json.slice(0,9))
}

getTodos()
