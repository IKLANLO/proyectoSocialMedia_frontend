import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../../redux/posts/postsSlice'


const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getById(id))
  }, [])

  return (
    <>
      <h1>PostDetail</h1>
      <p>{post.name}</p>
      <p>{post.post}</p>
    </>
  )
}

export default PostDetail