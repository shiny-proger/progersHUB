import { Link } from "react-router-dom"


export default function Footer(){
    return (
        <>
           
            <hr className="max-w-full " />
            <div className="flex flex-col sm:flex-row  justify-between text-start items-start my-10">
                <div className="my-3">
                    <h3 className="text-grad text-3xl text-nowrap">Progers HUB</h3>
                    <p>Учись по живым репозиториям GitHub.</p>
                </div>
                <div className="my-3">
                    <h3 className="text-xl text-nowrap">Продукт</h3>
                    <p>Каталог</p>
                    <p>Roadmap</p>
                    <p>Гид по PR</p>
                    <p>Тарифы</p>
                </div>
                <div className="my-3">
                    <h3 className="text-xl text-nowrap">Ресурсы</h3>
                    <p>FAQ</p>
                    <p>Как это рабоатет</p>
                    <p>Рейтинг</p>
                </div>
                <div className="my-3">
                    <h3 className="text-xl text-nowrap">Связь</h3>
                    <Link to="https://t.me/proger_road">
                        <p>Telegram</p>
                    </Link>
                    <Link to="https://github.com/shiny-proger">
                        <p>GitHub</p>
                    </Link>
                    
                </div>
                
            </div>
            
        </>
    )
}