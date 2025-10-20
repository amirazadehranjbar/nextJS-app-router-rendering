import Link from "next/link";
import {revalidatePath} from "next/cache";

export const getUsers = async () => {

    const res = await fetch("http://localhost:3500/users");
    return await res.json();

}

export const getFormData = async (formData) => {
    'use server'
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
    }

    const res = await fetch("http://localhost:3500/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rawFormData)
    })


    if (res.status === 201) {

        revalidatePath("/users")
    }

}

async function Users() {

    const users = await getUsers();

    return (
        <div>
            <h1 className="text-4xl">users list</h1>


            <form action={getFormData} className="p-2 border rounded-md flex-col flex space-y-2">
                <h3>add new user</h3>
                <input name="name" placeholder="name" className="border rounded-md p-1"/>
                <input name="email" placeholder="email" className="border rounded-md p-1"/>
                <button type="submit" className="p-2 border rounded-md cursor-pointer">submit</button>
            </form>


            {users && users.map((user, index) => {
                return (
                    <div key={index}
                         className={`p-2 border mt-2 rounded-md ${Number.isInteger((index + 1) / 2) ? "bg-gray-500" : "bg-blue-400"}`}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link></div>
                );
            })}
        </div>
    )
}

export default Users
