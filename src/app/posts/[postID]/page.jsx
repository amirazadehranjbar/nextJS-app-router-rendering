
export const getPostDetails = async (postID)=>{

    const res = await fetch(`http://localhost:3500/posts/${postID}`);
    const post = await res.json();
    return post;

}


async function PostId({params}) {

   const {postID} = await params;

   const post =await getPostDetails(postID);

    return (
        <div>
            <h1>post id : {postID}</h1>
            <p>{post.title}</p>
        </div>
    )
}

export default PostId
