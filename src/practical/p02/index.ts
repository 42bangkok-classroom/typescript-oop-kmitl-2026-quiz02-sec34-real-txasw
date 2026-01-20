
import { getPostalAddress } from "../p01";
type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export async function addUser(newUser: newUser | null) {
  const users = await getPostalAddress()
  if (!newUser) return users
  const newuser = {
    id: users[-1].id + 1,
    name: newUser?.name,
    phone: newUser?.phone,
    address: newUser?.address ?? null
  }
  return [...users, newuser]
}