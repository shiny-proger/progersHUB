import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import CardProb from "../../components/cardProb/CardProb"
import StepByStep from '../../components/stepbystep/StepByStep'
import Dropdown from '../../components/dropDown/DropDown'
import Button from '../../components/button/Button'

const stepByStep = [
     { num: 1, head: "Выбираешь репо", parag: "Из каталога, с бейджами свежести, или проверяешь выбранный самостоятельно" },
     { num: 2, head: "Изучаешь основы ЯП по репо", parag: "В каталоге собраны репозитории для изучения основ любых языков программирования" },
     { num: 3, head: "Решаешь задания", parag: "Автопроверка через GitHub Actions: без ментора, без долгого ожидания" },
     { num: 4, head: "Изучаешь работу с pull request", parag: "Что такое пулл реквесты, для чего они нужны, как они помогают в обучении и на собесах" },
     { num: 5, head: "Выбираешь репо-проект", parag: "Из подборки проектов для практики пулл реквестов, любой интересный проект на выбор" },
     { num: 6, head: "Запускаешь в браузере", parag: "Codespaces или StackBlitz, без сложной установки десятков библиотек" },
     { num: 7, head: "Пишешь новые фичи в проект", parag: "Это буквально практика на реальных интересных проектах + хорошее дополнение к вашему резюме" },
     { num: 8, head: "Копишь принятые PR", parag: "Вклады видны в твоём профиле, лучшие можно удобно перенести в резюме" },
]

const problems = [
     {prob: "Репо устарели", resh: "Проверка актуальности", parag: "Бейдж живое или устарело по дате коммитов и версиям стека.", link: "/", linkText: "Смотреть каталог →",},
     {prob: "Не запускается проект", resh: "Запуск в один клик", parag: "Codespaces или StackBlitz открывают репо прямо в браузере.", link: "/", linkText: "Попробовать запуск →",},
     {prob: "Страшно делать PR", resh: "Гид и Мои вклады", parag: "Пошаговый гид и страница, где видны все твои pull request.", link: "/", linkText: "Читать гид →", },
]



function ProgerHub(){
     return (
          <>   
               <div className='max-h-full'>
                    <div className="text-center lg:mt-80 mt-40">
                         <h1 >Каждый шаг обучения подтверждён кодом <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
                    </div>
                    <div className="flex justify-center mt-20 ">
                         <Link to="/catalog">
                              <Button text='Открыть каталог' numCSS={true} margin='md:mx-20 mx-3'/>
                         </Link>
                         
                         <Button text='Твой первый PR' numCSS={false} margin='md:mx-20 mx-3'/>
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
               <h1 className='mb-5 md:mb-10'>Знакоме проблемы. Понятные решения&gt;</h1>
               <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 mb-20 md:mb-50'>
                    {problems.map((elem)=>(
                         <CardProb 
                         prob={elem.prob}
                         resh={elem.resh} 
                         parag={elem.parag}
                         link={elem.link}
                         linkText={elem.linkText} 
                    />
                    ))}
               </div>
               <h1 className='mb-5 md:mb-10'>Как это работает?...</h1>
               <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-5 sm:flex-row sm:justify-around flex-col  sm:mb-50 mb-20'>
                    {stepByStep.map((elem, index)=>(
                         <motion.div
                              key={elem.head}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{
                                   opacity: 1,
                                   y: 0,
                                   transition: { duration: 0.5, delay: index * 0.15 },
                              }}
                              viewport={{ once: true }}
                              >
                              <StepByStep num={elem.num} head={elem.head} parag={elem.parag} />
                              </motion.div>
                    ))}
               </div>
               <div className='mb-50'>
                    <h1>Частые вопросы</h1>
                    <Dropdown title='Это бесплатно?' children='Выбираешь репозиторий из каталога и начинаешь изучать.' />
                    <Dropdown title='Нужен ли GitHub-аккаунт?' children='Выбираешь репозиторий из каталога и начинаешь изучать.' />
                    <Dropdown title='Что если я совсем новичок?' children='Выбираешь репозиторий из каталога и начинаешь изучать.' />
                    <Dropdown title='Как считаются PR в рейтинге?' children='Выбираешь репозиторий из каталога и начинаешь изучать.' />
               </div>
               
          </>
     )
}
export default ProgerHub;

