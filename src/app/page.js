import Link from "next/link";

export default function Home() {
    return (
        <div className="m-4 flex flex-col space-y-2">

            <Link href={"/posts"} className="p-2 mt-2 border rounded-md bg-gray-500">posts</Link>

            <Link href={"/users"} className="p-2 mt-2 border rounded-md bg-gray-500">users</Link>

        </div>
    );
}
