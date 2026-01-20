import { filterUserById } from "../p03"

export async function safeFetchUser(id: number) {
    if (id <= 0) return null
    const user = await filterUserById(id)
    if (!user) return null
    return user
}
