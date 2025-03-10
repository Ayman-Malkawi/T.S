interface Task {
    id: number;
    title: string;
    states: string;
    StartDate: string;
    endDate: string;
}

document.getElementById("project")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const tasks: Task = {
        id: parseInt((document.getElementById("ID") as HTMLInputElement).value),
        title: (document.getElementById("title") as HTMLInputElement).value,
        states: (document.getElementById("states") as HTMLInputElement).value,
        StartDate: (document.getElementById("StartDate") as HTMLInputElement).value,
        endDate: (document.getElementById("endDate") as HTMLInputElement).value,
    };

    let storedTasks: Task[] = JSON.parse(localStorage.getItem("taskData") || "[]");
    storedTasks.push(tasks);
    localStorage.setItem("taskData", JSON.stringify(storedTasks));

    (document.getElementById("title") as HTMLInputElement).value ='';

    displayTasks(storedTasks);
});

function displayTasks(tasks: Task[]) {
    const projDiv = document.getElementById("proj")!;
    projDiv.innerHTML = "";

    tasks.forEach(task => {
        projDiv.innerHTML += `
            <div class="card">
                <h3>${task.title}</h3>
                <p>${task.states}</p>
                <p><strong>Start Date: </strong>${task.StartDate}</p>
                <p><strong>End Date: </strong>${task.endDate}</p>
            </div>
        `;
    });
}

window.onload = function () {
    const savedTasks = localStorage.getItem("taskData");
    if (savedTasks) {
        const tasks: Task[] = JSON.parse(savedTasks);
        displayTasks(tasks);
    }
};


