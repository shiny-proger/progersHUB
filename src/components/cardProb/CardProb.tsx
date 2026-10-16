import { Link } from 'react-router-dom'

type BlockPLprop = {
     prob: string,
     resh: string,
     parag: string,
     linkText: string,
     link: string,
}

function CardProb({prob, resh, parag, linkText, link}: BlockPLprop){
     return (
          <>
               <div className="border-2 border-(--text)/50 rounded-md max-w-full p-10">
                    <div>
                        <p className="text-(--error) font-bold">Проблема</p>
                        <h3 className='text-wrap text-[clamp(2px,2vw,36px)]'>{prob}</h3>
                    </div>
                    <hr className="text-(--text) md:my-5 sm:my-3 my-2"/>   
                    <div>
                        <p className="text-(--right) font-bold">Решение</p>
                        <h3 className='text-wrap text-[clamp(2px,2vw,36px)]'>{resh}</h3>
                        <p>{parag}</p>
                        <Link to={link}>
                            <p className='text-(--text) font-bold'>{linkText}</p>
                        </Link>
                        
                    </div>
               </div>
          </>
     )
}
export default CardProb;