// src/app/posts/page.js
import Link from "next/link";
import RevalidateButton from "@/components/RevalidateButton";
import {revalidatePath, revalidateTag} from "next/cache";


async function getPosts() {
    console.log("revalidated");
    const res = await fetch("http://localhost:3500/posts" ,  {
        next: { tags: ['posts'] }});
    return res.json();

}


const addPost = async (formData)=>{

    "use server"
    const rawFormData = {
        title: formData.get('title'),
        userId: 2,
        id:Math.random().toString()
    }

    const res = await fetch("http://localhost:3500/posts" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(rawFormData)
    })


    if(res.status === 201){
        revalidatePath("/posts")
    }

}

export default async function PostsPage() {
    const data = await getPosts();

    return (
        <div className="flex flex-col content-center items-center m-2">
            <h1 className="myH3">Posts</h1>

            <RevalidateButton type="tag" value="posts"/>

            <form className="formContainer" action={addPost}>
                <h3 className="text-2xl text-center font-bold font-mono">add new post</h3>

                <input name="title" className="input" placeholder="title"/>
                <input name="userId" className="border" hidden={true}/>
                <button className="button" type="submit">submit</button>

            </form>


            {data.map((post) => (
                <div key={post.id} className="p-1 mt-2 border rounded-md bg-gray-500 w-full">
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    );
}
