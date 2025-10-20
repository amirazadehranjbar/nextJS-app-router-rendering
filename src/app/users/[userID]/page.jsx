

export const getUserDetals = async (userID)=>{

    const res = await fetch(`http://localhost:3500/users/${userID}`);
    return await res.json();

}


export const updateUserData = async (userID)=>{

    const newDate = {
        name:"qwqqq",
        email:"www.wwww"
    }

    const res = await fetch(`http://localhost:3500/users/${userID}` , {
       method:"UPDATE",
       headers:{
           "Content-Type":"application/json"
       } ,
       body:JSON.stringify(newDate)
    })

}


async function UserID({params}) {

    const {userID} = await params;
    const user = await getUserDetals(userID);


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center w-full bg-gray-500 p-2 mb-4">user details</h1>

            {user.name}
            <hr className="h-2 bg-slate-700 w-3/4 mt-2 mb-2 rounded-md"/>

            {user.email}

            <button className="border-2 border-slate-400 p-2 rounded-md w-1/2 mt-6 font-mono font-bold text-slate-300 bg-slate-700 cursor-pointer" onClick={updateUserData}>edit data</button>
        </div>
    )
}

export default UserID
