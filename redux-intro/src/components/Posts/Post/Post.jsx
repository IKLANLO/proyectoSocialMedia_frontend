import { useSelector } from 'react-redux'
import { LikeOutlined } from '@ant-design/icons';
import { Statistic, Card } from 'antd';
import './Post.styles.scss'

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  
  return (
      <>
        {posts.map((post)=> (
        <div key={post._id}>
          <Card title={post.name} className='card-container'>
            <div className='card-container__leftalign'>
              <p>{post.post}</p>
            </div>
            <Statistic className='card-container__rightalign'
               value={post.likes.length} prefix={<LikeOutlined />}/>
            {post.comments.length > 0 && 
              <h3 className='card-container__leftalign'>{post.comments.length} comentarios </h3>}
            {post.comments.map((comment) => {
              return (
                <div key={comment._id} className='card-container__leftalign'>
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