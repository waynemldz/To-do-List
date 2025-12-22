const task = document.getElementById("input-box");

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

    let span = document.createElement("span");
    span.innerText = "x";
    li.appendChild(span)

    span.addEventListener("click", ()=>{
      li.remove()
    })
  }
}

