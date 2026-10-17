import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

function Login(){
     return (
          <>
                <div className='mt-50 text-center md:mb-100 mb-50'>
                    <h1 className='text-center mb-20'>Войти в аккаунт</h1>
                    <div>
                        <input type="email" placeholder='email or name'/>
                        <input type="password" placeholder='password'/>
                    </div>
                    <Link to="/">
                        <Button text='Вход' numCSS={false} margin='items-center mr-0 mt-10 '/>
                    </Link>
                </div>
          </>
     )
}
export default Login;