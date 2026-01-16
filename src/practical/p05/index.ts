import { filterUserById } from "../p03"

export async function safeFetchUser(id: number) {
    if (id <= 0) return null

    const users = await filterUserById(id)
    if (!users) return null
    if (typeof users === "string") return null
    return users
}
