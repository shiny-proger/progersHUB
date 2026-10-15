import { Link } from 'react-router-dom'

function ProgerHub(){
     return (
          <>
               <div className="text-center lg:mt-80 mt-40">
                    <h1 >Каждый шаг обучения подтверждён кодом <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
               </div>
               <div className="flex justify-center mt-20">
                    <Link to="/catalog"><button className="signUp md:mx-20 mx-3">Открыть каталог</button></Link>
                    <button className="login md:mx-20 mx-3">Как сделать первый PR</button>
               </div>
          </>
     )
}
export default ProgerHub;

