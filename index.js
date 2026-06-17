

const all_tasks = document.querySelector('.all-tasks')



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => json.forEach((task) => {

        const container = document.createElement('div');
        container.classList.add('task-list');
        container.innerHTML =
            `<span>${task.title}</span> 
        <span>${task.completed}</span>`

        all_tasks.append(container);
    }))


