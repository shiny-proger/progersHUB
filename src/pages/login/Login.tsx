import { Link } from 'react-router-dom'

function Login(){
     return (
          <>
                <div className='md:mt-50 mt-20 text-center'>
                    <h1 className='text-center mb-20'>Войти в аккаунт</h1>
                    <div>
                        <input type="email" placeholder='email or name'/>
                        <input type="password" placeholder='password'/>
                    </div>
                    <Link to="/">
                        <button className='login items-center mr-0 mt-10'>Войти</button>
                    </Link>
                </div>
                
          </>
     )
}
export default Login;