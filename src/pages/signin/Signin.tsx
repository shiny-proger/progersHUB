import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

function Signin(){
     return (
          <>
               <div className='md:mt-50 mt-40 mb-30 text-center'>
                    <h1 className='text-center mb-20'>Регистрация аккаунта</h1>
                    <div className='lg:items-start lg:grid-cols-2 lg:gap-x-30 lg:gap-y-15 inline-grid sm:grid-cols-1'>
                        <input type="name" placeholder='name'/>
                        <input type="email" placeholder='email'/>
                        <input type="password" placeholder='password'/>
                        <Link to="/">
                              <Button text='Регистрация' numCSS={true} margin='items-center mr-0 mt-10  lg:-mt-4 '/>  
                        </Link>
                        
                    </div>
                </div>
          </>
     )
}
export default Signin;