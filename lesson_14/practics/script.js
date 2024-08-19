const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");
const clearBtn = document.querySelector("#clear-btn");

let taskArr = [];
let tasks = [];

function clearList() {
    list.innerHTML = "";
}

function deleteTask(e) {
    const taskName = e.target.dataset.task;

    taskArr = taskArr.filter(task => task.task !== taskName);
    tasks = tasks.filter(task => task !== taskName);

    clearList();
    renderTasks();
}

function renderTasks() {
    taskArr.map(el => {
        const li = document.createElement("li");

        li.onclick = deleteTask;

        li.textContent = `${el.task}: ${el.desc} (Ответственный: ${el.responsible})`;
        li.dataset.task = el.task;
        list.appendChild(li);
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();

    let task = {
        task: e.target.task.value.toLowerCase(),
        desc: e.target.desc.value.toLowerCase(),
        responsible: e.target.responsible.value.toLowerCase()
    };

    e.target.task.value = "";
    e.target.desc.value = "";
    e.target.responsible.value = "";

    if (tasks.includes(task.task)) {
        alert("Такая задача уже существует! Введите другую задачу.");
    } else {
        tasks.push(task.task);
        taskArr.push(task);

        clearList();
        renderTasks();
    }
});

clearBtn.addEventListener("click", () => {
    taskArr = [];
    tasks = [];
    clearList();
});