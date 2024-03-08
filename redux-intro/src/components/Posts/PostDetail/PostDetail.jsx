import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getById,
  deletePost,
  putPost,
  putLike,
  deleteLike,
} from '../../../redux/posts/postsSlice'
import { LikeOutlined, LikeFilled } from '@ant-design/icons'
import { Card, message, Modal, Form, Input, Button } from 'antd'
import Comment from './Comment/Comment'
import '../Post/Post.styles.scss'

const PostDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { post } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.auth)
  const prevSection = JSON.parse(localStorage.getItem('prevSection'))
  const token = JSON.parse(localStorage.getItem('token'))
  let comments = 0,
    commentText = ' ='

  const isLiked = post.likes?.some((like) => like.userId === user?._id)

  const [messageApi, contextHolder] = message.useMessage()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [Likes, setLikes] = useState(0)
  const [form] = Form.useForm()

  const handlePutPost = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      dispatch(
        putPost({
          name: values.title,
          post: values.text,
          token: token,
          id: id,
        })
      )
      setIsModalVisible(false)
      form.resetFields()
      handleMessage('Post modificado correctamente')
    })
  }

  const handleLike = () => {
    if (isLiked) {
      dispatch(deleteLike({ id: post._id, token }))
    } else {
      dispatch(putLike({ id: post._id, token }))
    }
  }

  const handleMessage = (message) => {
    messageApi.open({
      type: 'success',
      content: message,
    })
    setTimeout(() => {
      navigate('/profile')
    }, 2000)
  }

  post.comments ? (comments = post.comments.length) : 0

  useEffect(() => {
    dispatch(getById(id))
  }, [dispatch])

  useEffect(() => {
    if (post.likes) {
      setLikes(post.likes.length)
    } else {
      setLikes(0)
    }
  }, [post.likes])

  let showButtons = []
  if (prevSection === '/profile') {
    showButtons = (
      <>
        {contextHolder}
        <button onClick={handlePutPost}>Editar</button>
        <button
          onClick={() => {
            dispatch(deletePost({ id, token }))
            handleMessage('Post eliminado correctamente')
          }}>
          Eliminar
        </button>
      </>
    )
  }

  return (
    <>
      <h2>Detalle del post</h2>
      <Card title={post.name} className="card-container">
        <div className="card-container__leftalign">
          <p>{post.post}</p>
        </div>
        {post.likes && (
          <div className="card-container__rightalign">
            {isLiked ? (
              <span>
                <LikeFilled onClick={handleLike} /> {Likes}
              </span>
            ) : (
              <span>
                <LikeOutlined onClick={handleLike} /> {Likes}
              </span>
            )}
          </div>
        )}
        {comments === 1
          ? (commentText = 'comentario')
          : comments > 1
          ? (commentText = 'comentarios')
          : ''}
        {comments > 0 && (
          <h3 className="card-container__leftalign">
            {comments} {commentText}{' '}
          </h3>
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
        <Comment />
      </Card>
      {showButtons}
      <button
        onClick={() => (prevSection ? navigate(prevSection) : navigate('/'))}>
        Volver
      </button>
      <Modal
        title="Modifica el post"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Enviar
          </Button>,
        ]}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Título"
            initialValue={post.name}
            rules={[
              { required: true, message: 'Por favor ingrese el título' },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="text"
            label="Texto"
            initialValue={post.post}
            rules={[{ required: true, message: 'Por favor ingrese el texto' }]}>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default PostDetail
