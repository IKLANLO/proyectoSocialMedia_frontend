import { useSelector } from 'react-redux'

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  
  return (
    <>
      {posts.map((post)=> (
        <div key={post._id}>
          <h2>{post.name}</h2>
          <p>{post.post}</p>
          { post.likes.length === 1 ? <h3>{post.likes.length} like</h3> : <h3>{post.likes.length} likes</h3>}
          {post.comments.length > 0 && <h3>{post.comments.length} comentarios: </h3>}
          {post.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <p>{comment.comment}</p>
              </div>
            )
          })}
        </div>
      ))}
    </>
    )
  }
  
  export default Post