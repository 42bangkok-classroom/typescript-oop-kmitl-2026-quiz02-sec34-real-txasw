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
    const todos = await getTodos();
    const users = await getPostalAddress();

    const [filteredUser] = users.filter((user: { id: number; }) => user.id == id);
    if (!filteredUser) return "Invalid id";
    const filteredTodo = todos.filter((todo: { userId: number; }) => todo.userId == id);
    return { ...filteredUser, todos: filteredTodo };
}