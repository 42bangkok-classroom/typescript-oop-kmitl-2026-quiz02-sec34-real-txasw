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
    const user = await filterUserById(id)
    if (!Array.isArray(user)) return "Invalid id"
    if (user.length === 0) return "Invalid id"

    const todos = await getTodos()

    const user_todos = todos.filter((todo: {userId:number}) => todo.userId == id)

    return { ...user, todos: user_todos || [] }

}