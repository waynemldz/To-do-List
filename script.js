const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task

function addTask() {
  if (inputBox.value === "") {
    return alert("You must write something!");
  } else {
    let li = document.createElement("li");
    listContainer.appendChild(li);

    // Span text
    let textSpan = document.createElement("span");
    textSpan.className = "text-span";
    textSpan.textContent = inputBox.value;
    li.appendChild(textSpan);

    // Remove button
    let span = document.createElement("span");
    span.className = "remove-btn"
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Checked Button
    let checkBtn = document.createElement("span");
    checkBtn.className = "check-btn";
    li.prepend(checkBtn);
  }
  inputBox.value = "";
  saveData();
}

// Task editor

function taskEditor(e) {
  const li = e.target;

  if (li.querySelector(".task-editor")) {
    return;
  }

  let textSpan = document.querySelector(".text-span");

  let editorDiv = document.createElement("div");
  editorDiv.className = "task-editor";
  li.appendChild(editorDiv);

  let inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = textSpan.textContent;
  editorDiv.appendChild(inputEdit);

  let okButton = document.createElement("button");
  okButton.innerText = "Ok";
  editorDiv.appendChild(okButton);

  okButton.addEventListener("click", () => {
    textSpan.textContent = inputEdit.value;
    editorDiv.remove();
    saveData();
  });
}

// Checked and remove task

listContainer.addEventListener(
  "click",
  (e) => {

    const li = e.target.closest("li");
    if(!li) return;
    
    if (
      e.target.tagName === "LI" ||
      e.target.classList.contains("text-span")
    ) {
      taskEditor(e);
    } 
    
    else if (e.target.tagName === "SPAN" && !e.target.classList.contains("check-btn") && !e.target.classList.contains("text-span")) {
      e.target.parentElement.remove();
      saveData();
    }

    if (e.target.classList.contains("check-btn")) {
    li.classList.toggle("checked");
    saveData();
    return;
  }
  }
);

// Save and show task

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Enter to add task

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
