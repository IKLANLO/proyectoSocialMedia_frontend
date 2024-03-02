import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <h2>Perfil</h2>
      <p>Email: {user}</p>
    </>
  )
}

export default Profile