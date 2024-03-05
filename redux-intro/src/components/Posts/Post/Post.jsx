import { useSelector } from 'react-redux'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Post.styles.scss'

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  const navigate = useNavigate()

  const handlePostDetail = (post) => {
    localStorage.setItem('prevSection', JSON.stringify('/'))
    navigate(`/post/${post._id}`)
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
          <Card
            className="card-container"
            style={{ cursor: 'pointer' }}
            onClick={() => handlePostDetail(post)}>
            <p className="card-container__title">{post.name}</p>
          </Card>
        </div>
      ))}
    </>
  )
}

export default Post
