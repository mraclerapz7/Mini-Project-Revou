let todos = [];

function renderTodos() {
    const table = document.getElementById("todo-table");
    table.innerHTML = "";

    if (todos.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="4" class="kosong">No task found</td>
            </tr>
        `;
        return;
    }

    todos.forEach((todo, index) => {
        table.innerHTML += `
            <tr>
                <td>${todo.task}</td>
                <td>${todo.date}</td>
                <td>${todo.completed ? "Done" : "Pending"}</td>
                <td>
                    <button onclick="toggleStatus(${index})" class="btn-status">
                        ${todo.completed ? "Undo" : "Done"}
                    </button>

                    <button onclick="deleteTodo(${index})" class="btn-delete">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

document.getElementById("add-btn").addEventListener("click", () => {
    const task = document.getElementById("todo-input").value.trim();
    const date = document.getElementById("todo-date").value;

    if (task === "" || date === "") {
        alert("Task dan tanggal harus diisi!");
        return;
    }

    todos.push({
        task: task,
        date: date,
        completed: false
    });

    document.getElementById("todo-input").value = "";
    document.getElementById("todo-date").value = "";

    renderTodos();
});

function toggleStatus(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

document.getElementById("delete-all-btn").addEventListener("click", () => {
    todos = [];
    renderTodos();
});
