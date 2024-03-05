import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getById } from '../../../redux/posts/postsSlice'
import { LikeOutlined } from '@ant-design/icons'
import { Statistic, Card } from 'antd'
import '../Post/Post.styles.scss'

const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { post } = useSelector((state) => state.posts)
  const prevSection = JSON.parse(localStorage.getItem('prevSection'))
  let likes = 0,
    comments = 0

  post.likes ? (likes = post.likes.length) : 0
  post.comments ? (comments = post.comments.length) : 0

  useEffect(() => {
    dispatch(getById(id))
  }, [])

  return (
    <>
      <h2>PostDetail</h2>
      <Card title={post.name} className="card-container">
        <div className="card-container__leftalign">
          <p>{post.post}</p>
        </div>
        {post.likes && (
          <Statistic
            className="card-container__rightalign"
            value={likes}
            prefix={<LikeOutlined />}
          />
        )}
        {comments > 0 && (
          <h3 className="card-container__leftalign">{comments} comentarios </h3>
        )}
        {comments > 0 &&
          post.comments.map((comment) => {
            return (
              <div
                key={comment._id}
                className="card-container__leftalign card-container__comment">
                <Card type="inner">{comment.comment}</Card>
              </div>
            )
          })}
      </Card>
      <button
        onClick={() => (prevSection ? navigate(prevSection) : navigate('/'))}>
        Volver
      </button>
    </>
  )
}

export default PostDetail
