const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Remove button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
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

  let editorDiv = document.createElement("div");
  editorDiv.className = "task-editor";
  li.appendChild(editorDiv);

  let inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = li.firstChild.textContent;
  editorDiv.appendChild(inputEdit);

  let okButton = document.createElement("button");
  okButton.innerText = "Ok";
  editorDiv.appendChild(okButton);

  okButton.addEventListener("click", () => {
    li.firstChild.textContent = inputEdit.value;
    editorDiv.remove();
    saveData();
  });
}

// Checked and remove task

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      taskEditor(e);
      // e.target.classList.toggle("checked");
      // saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
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
