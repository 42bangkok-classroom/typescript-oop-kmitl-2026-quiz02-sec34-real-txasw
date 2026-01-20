import axios from "axios"

export async function getPostalAddress(){
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  const users = res.data

  const output = users.map((user: { id: any; name: any; phone: any; address: any }) => {
    return {
      id: user.id,
      name: user.name,
      phone: user.phone,
      address: user.address ?? null,
    }
  })
  return output
}