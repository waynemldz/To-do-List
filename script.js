const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")


// Add task

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);


    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
    inputBox.value = ""
    saveData();
}

// Checked and remove task

listContainer.addEventListener("click", (e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove()
      saveData();
    }
  
}, false)

// Save and show task

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

// Enter to add task

inputBox.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    addTask()
  }
})

inputBox.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    addTask()
  }
})