import axios from "axios";
import { getPostalAddress } from "../p01";
import { filterUserById } from "../p03";

export async function getTodosByUserId(id: number) {

    const todos = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data
    const user = await filterUserById(id)
    
    return {
        user: user,
        todos: todos.filter((todo: { userId: number; }) => todo.userId === id)
    };
    
}
