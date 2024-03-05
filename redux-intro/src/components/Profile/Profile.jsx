import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.posts)
  const userData = JSON.parse(localStorage.getItem('user'))
  const userPosts = posts.filter((post) => post.userId === userData._id)
  const navigate = useNavigate()

  const handlePostDetail = (post) => {
    console.log('hola')
    localStorage.setItem('prevSection', JSON.stringify('/profile'))
    navigate(`/post/${post._id}`)
  }

  return (
    <>
      <h2>Perfil</h2>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.email}</p>
      <h2>Posts</h2>
      {userPosts &&
        userPosts.map((post) => (
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

export default Profile
