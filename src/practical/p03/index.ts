import { getPostalAddress } from "../p01";

export async function filterUserById(id: number) {
    const users = await getPostalAddress()
    const user = users.find(user => user.id == id)
    if (!user) {
        return "Invalid id"
    }
    return user;
}
