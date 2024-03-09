import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import { getByUser } from '../../redux/posts/postsSlice'
import '../Posts/Posts.style.scss'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const { userPosts } = useSelector((state) => state.posts)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlePostDetail = (id) => {
    localStorage.setItem('prevSection', JSON.stringify('/profile'))
    navigate(`/post/${id}`)
  }

  useEffect(() => {
    dispatch(getByUser(user._id))
  }, [])

  return (
    <>
      <h2>Datos personales</h2>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.email}</p>
      <h2>Posts</h2>
      <div className="container">
        {userPosts?.length > 0 ? (
          userPosts.map((post) => (
            <div div className="container__posts" key={post._id}>
              <Card
                className="card-container"
                style={{ cursor: 'pointer' }}
                onClick={() => handlePostDetail(post._id)}>
                <p className="card-container__title">{post.name}</p>
              </Card>
            </div>
          ))
        ) : (
          <>No hay posts publicados aún</>
        )}
      </div>
    </>
  )
}

export default Profile
