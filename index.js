document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.querySelector("form").addEventListener('submit', (event) => {
      event.preventDefault()

      let li = document.createElement("li")
      let task = document.getElementById("new-task-description").value

      li.appendChild(document.createTextNode(task))
      let tasks = document.getElementById("tasks")
      tasks.appendChild(li)
    })
});