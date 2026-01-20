import { getPostalAddress } from "../p01";

export async function filterUserById(id: number) {
    const users = await getPostalAddress()
    const [found] = users.filter((user: {id:number}) => user.id == id)
    if (!found) return "Invalid id"
    return found
}

