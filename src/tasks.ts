const form = document.querySelector<HTMLFormElement>(".form");
const input = document.querySelector<HTMLInputElement>(".form-input");
const list = document.querySelector<HTMLUListElement>(".list");

// const button = document.querySelector<HTMLButtonElement>(".btn");

type Task = {
    description: string;
    isDone: boolean;
};

const tasks: Task[] = loadTasks();
tasks.forEach(renderTask);

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
}

form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskDescription = input?.value;
    if (taskDescription) {
        const task: Task = { description: taskDescription, isDone: false };
        // add task to list
        addTask(task);
        // render tasks
        renderTask(task);
        // update local storage
        updateStorage();
        input.value = "";
        return;
    }
    alert("Please write the task description!");
});

function addTask(task: Task): void {
    tasks.push(task);
}

function renderTask(task: Task): void {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.description;
    list?.appendChild(taskElement);
    // checkbox

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = task.isDone;

    checkBox.addEventListener("change", () => {
        task.isDone = !task.isDone;
        updateStorage();
    });
    taskElement.appendChild(checkBox);
    list?.appendChild(taskElement);
}

function updateStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
