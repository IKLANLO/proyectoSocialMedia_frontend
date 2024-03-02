import { useSelector } from 'react-redux'

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  
  return (
    <>
      {posts.map((post)=> (
        <div key={post._id}>
          <h2>{post.name}</h2>
          <p>{post.post}</p>
          {post.comments.length > 0 && <h3>Comentarios:</h3>}
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