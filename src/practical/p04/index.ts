import axios from "axios";
import { getPostalAddress } from "../p01";

async function getTodos() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        const todos = res.data
        return todos || []
    } catch (error) {
        return []
    }
}

export async function getTodosByUserId(id: number) {
    let todos = await getTodos();
    let users = await getPostalAddress();

    let filterUser = users.filter((user: { id: number; }) => user.id == id);
    let filterTodo = todos.filter((todo: { userId: number; }) => todo.userId == id);
    if (filterUser.length == 1) {
        return { ...filterUser[0], todos: filterTodo };
    } else {
        return "Invalid id";
    }
}