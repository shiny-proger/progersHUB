import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import CardProb from "../../components/cardProb/CardProb"

function ProgerHub(){
     return (
          <>   
               <div className='max-h-full'>
                    <div className="text-center lg:mt-80 mt-40">
                         <h1 >Каждый шаг обучения подтверждён кодом <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
                    </div>
                    <div className="flex justify-center mt-20 ">
                         <Link to="/catalog"><button className="signUp md:mx-20 mx-3">Открыть каталог</button></Link>
                         <button className="login md:mx-20 mx-3">Как сделать первый PR</button>
                    </div>
               </div>
               <motion.div
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ duration: 0.6, ease: "easeOut" }}
               >
               <hr className='md:mt-100 mt-50  text-(--text)' />
               </motion.div>
               <div className='flex justify-around text-center sm:flex-row flex-col '>
                   
                    <div className='my-10'>
                         <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.5 }}
                         >
                              <div className='numBig'>34</div>
                              <div className='textStat'>Репо в каталоге</div>
                         </motion.div>
                    </div>
                    <div className='my-10'>
                         <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.5 }}
                         >
                         <div className='numBig'>4</div>
                         <div className='textStat'>Принято PR</div>
                         </motion.div>
                    </div>
                    <div className='my-10'>
                         <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.5 }}
                         >
                         <div className='numBig'>34</div>
                         <div className='textStat'>Участников</div>
                         </motion.div>
                    </div>    
               </div>
               <motion.div
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ duration: 0.6, ease: "easeOut" }}
               >
               <hr className='md:mb-50 mb-20 text-(--text)' />
               </motion.div>
               <h1>Знакоме проблемы. Понятные решения&gt;</h1>
               <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mb-20 md:mb-50'>
                    <CardProb 
                         prob="Репо устарели" 
                         resh="Проверка актуальности" 
                         parag="Бейдж живое или устарело по дате коммитов и версиям стека." 
                         link="/" 
                         linkText='Смотреть каталог →' 
                    />
                    <CardProb 
                         prob="Не запускается" 
                         resh="Запуск в один клик" 
                         parag="Codespaces или StackBlitz открывают репо прямо в браузере." 
                         link="/" 
                         linkText='Попробовать запуск →' 
                    />
                    <CardProb 
                         prob="Страшно делать PR" 
                         resh="Гид и Мои вклады" 
                         parag="Пошаговый гид и страница, где видны все твои pull request." 
                         link="/" 
                         linkText='Читать гид →' 
                    />
               </div>
               
          </>
     )
}
export default ProgerHub;

