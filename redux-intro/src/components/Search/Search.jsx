import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from 'antd'
import '../Posts/Post/Post.styles.scss'
import '../Posts/Posts.style.scss'

const Search = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { searchPosts } = useSelector((state) => state.posts)

  const handlePostDetail = (post) => {
    localStorage.setItem('prevSection', JSON.stringify(`/search/${id}`))
    navigate(`/post/${post._id}`)
  }

  return (
    <div className="container">
      <h2>Posts</h2>
      {searchPosts.length > 0 ? (
        searchPosts.map((post) => (
          <div className="container__posts" key={post._id}>
            <Card
              className="card-container"
              style={{ cursor: 'pointer' }}
              onClick={() => handlePostDetail(post)}>
              <p className="card-container__title">{post.name}</p>
            </Card>
          </div>
        ))
      ) : (
        <p>No existen posts con ese título</p>
      )}
    </div>
  )
}

export default Search
