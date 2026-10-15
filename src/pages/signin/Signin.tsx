import { Link } from 'react-router-dom'

function Signin(){
     return (
          <>
               <div className='md:mt-50 mt-20 text-center'>
                    <h1 className='text-center mb-20'>Регистрация аккаунта</h1>
                    <div className='lg:items-start lg:grid-cols-2 lg:gap-x-30 lg:gap-y-15 inline-grid sm:grid-cols-1'>
                        <input type="name" placeholder='name'/>
                        <input type="email" placeholder='email'/>
                        <input type="password" placeholder='password'/>
                        <Link to="/">
                              <button className='signUp items-center mr-0 mt-10  lg:-mt-4'>Создать</button>
                        </Link>
                        
                    </div>
                </div>
          </>
     )
}
export default Signin;