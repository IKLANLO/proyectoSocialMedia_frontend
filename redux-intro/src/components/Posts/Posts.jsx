import Post from './Post/Post'
import { getAll, reset } from '../../redux/posts/postsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

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
      {isLoading ? <Spin indicator={<LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin/>}/> 
        : <Post />}
    </>
  )
}

export default Posts