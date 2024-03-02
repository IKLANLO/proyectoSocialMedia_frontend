import Post from './Post/Post'
import { getAll, reset } from '../../redux/posts/postsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
  const { isLoading } = useSelector((state) =>state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
    dispatch(reset())
  }, [])
  return (
    <>
      <h1>Posts</h1>
      {isLoading ? 'Cargando...' : <Post />}
    </>
  )
}

export default Posts