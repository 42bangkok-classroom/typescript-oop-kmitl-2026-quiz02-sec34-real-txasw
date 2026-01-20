import axios from "axios";
import { filterUserById } from "../p03";

async function getTodos() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    const todos = res.data
    return todos ?? []
}

export async function getTodosByUserId(id: number) {
    const user = await filterUserById(id)
    if (!user) return "Invalid id"

    const todos = await getTodos()

    const user_todos = todos.filter((todo: {userId:number}) => todo.userId == user.id)

    return {...user, todos: user_todos??[]}
}
