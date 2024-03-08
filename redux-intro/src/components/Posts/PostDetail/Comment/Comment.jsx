import { Form, Input, Button } from 'antd'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { putComment } from '../../../../redux/posts/postsSlice'

const Comment = () => {
  const [form] = Form.useForm()
  const { id } = useParams()
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  const handleCancel = () => {
    form.resetFields()
  }

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values)
      dispatch(putComment({ id: id, comment: values, token: token }))
      form.resetFields()
    })
  }

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item
          name="comment"
          rules={[{ required: true, message: 'Por favor ingrese el texto' }]}>
          <Input.TextArea placeholder="añade un comentario" />
        </Form.Item>
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </Form>
    </>
  )
}

export default Comment
