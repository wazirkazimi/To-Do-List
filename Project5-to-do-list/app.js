const InputValue = document.querySelector(".input-box");
const ListItems = document.querySelector(".list-container");

function addTask() {
  if (InputValue.value == '') {
    alert("You must add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputValue.value;
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    
    li.appendChild(span);
    ListItems.appendChild(li);
  }

  // Clear the input value after adding the task
  InputValue.value = '';
  SaveData() 
}

ListItems.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    SaveData() 
  } else if (e.target.tagName === "SPAN") {
    // Remove the parent li element when the span (close button) is clicked
    let li = e.target.parentElement;
    ListItems.removeChild(li);
    SaveData() 
  }
}, false);


function SaveData() {
    localStorage.setItem("data",ListItems.innerHTML)
    
}

function ShowTask() {
    ListItems.innerHTML = localStorage.getItem("data")    
}   
ShowTask() 