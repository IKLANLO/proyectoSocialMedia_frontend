import { useSelector } from 'react-redux'
import { LikeOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  
  return (
    <>
      {posts.map((post)=> (
        <div key={post._id}>
          <h2>{post.name}</h2>
          <p>{post.post}</p>
          <Statistic value={post.likes.length} prefix={<LikeOutlined style={{color:'white'}} />}/>
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