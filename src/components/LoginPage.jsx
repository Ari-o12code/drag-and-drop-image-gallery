import Login from './Login';
import loginBackground from '../assets/billy.jpg'


const LoginPage = () => {
  const style = {
    backgroundImage: `url(${loginBackground})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

  return (
    <div style={style} className='login-page'>
      <h1>Welcome, Idan</h1>
      <div>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage
