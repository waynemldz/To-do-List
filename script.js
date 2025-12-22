const task = document.getElementById("Task");

function addTask() {
  if (task.value === "") {
    alert("Type anything");
  }else{
    let taskValue = task.value;

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = taskValue;
    ul.appendChild(li);

    task.value = ""
  }
}
