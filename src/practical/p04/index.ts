import axios from "axios";
import { filterUserById } from "../p03";

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
    try {
        const user = await filterUserById(id)
        if (typeof user === "string" || !user) return "Invalid id"

        const todos = await getTodos()

        const user_todos = todos.filter((todo: { userId: number }) => todo.userId == id)

        return { ...user, todos: user_todos || [] }
    } catch (error) {
        return "Invalid id"
    }
}