import { useSelector } from 'react-redux'
import { LikeOutlined } from '@ant-design/icons';
import { Statistic, Card } from 'antd';

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  
  return (
      <>
        {posts.map((post)=> (
        <div key={post._id}>
          <Card title={post.name}>
            <p>{post.post}</p>
            <Statistic value={post.likes.length} prefix={<LikeOutlined />}/>
            {post.comments.length > 0 && <h3>{post.comments.length} comentarios </h3>}
            {post.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <Card type="inner">
                    {comment.comment}
                  </Card>
                </div>
              )
            })}
          </Card>
        </div>
        ))}
      </>
    )
  }
  
  export default Post