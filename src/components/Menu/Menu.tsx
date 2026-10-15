import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

     return (
          <>     
                <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-(--bg)/80 2xl:px-50 xl:px-30 px-15 py-7">
                    <Link to="/" onClick={closeMenu}>
                        <h3 className="text-grad text-xl text-nowrap">Progers HUB</h3>
                    </Link>

                    <div className="hidden lg:flex lg:gap-6">
                        <Link to="/catalog">
                            <h3 className="pageMenu">Каталог</h3>
                        </Link>
                        <h3 className="pageMenu">Roadmap</h3>
                        <h3 className="pageMenu">Гид по PR</h3>
                        <h3 className="pageMenu">Тарифы</h3>
                    </div>

                    <div className="hidden lg:flex lg:gap-3 ">
                        <Link to="/login">
                            <button className="login">Войти</button>
                        </Link>
                        <Link to="/signin">
                            <button className="signUp">Регистрация</button>
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <FontAwesomeIcon
                            onClick={() => setIsOpen(open => !open)}
                            className="iconMenu cursor-pointer"
                            icon={isOpen ? faXmark : faSquareCaretDown}
                        />
                    </div>
                </div>
                

                    <div
                        className={`  
                            fixed inset-0 bg-(--bg) 
                            flex flex-col z-40 items-center justify-center gap-10 font-bold
                            transition-all duration-500 ease-in-out
                            ${isOpen
                                ? "translate-x-0" : "-translate-x-full"}
                        `}
                    >
                        <Link to="/catalog" onClick={closeMenu}>
                            <button className="">Каталог</button>
                        </Link>
                        <Link to="/" onClick={closeMenu}>
                            <button  className="">Roadmap</button>
                        </Link>
                        <Link to="/" onClick={closeMenu}>
                                <button onClick={closeMenu} className="">Гид по PR</button>
                        </Link>
                        <Link to="/" onClick={closeMenu}>
                                <button onClick={closeMenu} className="">Тарифы</button>
                        </Link>
                        <div className='flex justify-between'>
                            <Link to="/login" onClick={closeMenu}>
                                <button className="login">Войти</button>
                            </Link>
                            <Link to="/signin" onClick={closeMenu}>
                                <button className="signUp">Регистрация</button>
                            </Link>
                        </div>
                    </div>
          </>
     )
}

export default Menu;