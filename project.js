var _a;
(_a = document.getElementById("project")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var tasks = {
        id: parseInt(document.getElementById("ID").value),
        title: document.getElementById("title").value,
        states: document.getElementById("states").value,
        StartDate: document.getElementById("StartDate").value,
        endDate: document.getElementById("endDate").value,
    };
    var storedTasks = JSON.parse(localStorage.getItem("taskData") || "[]");
    storedTasks.push(tasks);
    localStorage.setItem("taskData", JSON.stringify(storedTasks));
    document.getElementById("ID").value = '';
    displayTasks(storedTasks);
});
function displayTasks(tasks) {
    var projDiv = document.getElementById("proj");
    projDiv.innerHTML = "";
    tasks.forEach(function (task) {
        projDiv.innerHTML += "\n            <div class=\"card\">\n                <h3>".concat(task.title, "</h3>\n                <p>").concat(task.states, "</p>\n                <p><strong>Start Date: </strong>").concat(task.StartDate, "</p>\n                <p><strong>End Date: </strong>").concat(task.endDate, "</p>\n            </div>\n        ");
    });
}
window.onload = function () {
    var savedTasks = localStorage.getItem("taskData");
    if (savedTasks) {
        var tasks = JSON.parse(savedTasks);
        displayTasks(tasks);
    }
};
