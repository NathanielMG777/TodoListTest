const todo = document.querySelector("#todo");
let list = document.getElementById("list");

let todoArray = [];

document.querySelector("#todoListForm").addEventListener("submit", function(event) {
    event.preventDefault();

    todoArray.push({
        task: (todo.value),
        complete: false
    })
    todo.value = "";
    updateList()
})

function updateList() {

    list.innerHTML = "";

    for (let i = 0; i < todoArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = todoArray[i].task;

            list.appendChild(li);

        if (todoArray[i].complete === true) {
            li.classList.add("completed");
        }

        let completeButton = document.createElement('button');
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function(event) {
            if (todoArray[i].complete === true) {
                todoArray[i].complete = false;
            } else {
                todoArray[i].complete = true;
            }
            updateList();
        });

            li.appendChild(completeButton);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(event) {
            todoArray.splice(i, 1);
            updateList();
        });

            li.appendChild(deleteButton);
    }
}