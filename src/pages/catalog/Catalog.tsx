import BlockPL from "../../components/blockPL/BlockPL"
import js from "../../assets/langs/js.png"
import ts from "../../assets/langs/ts.png"
import python from "../../assets/langs/python.png"
import java from "../../assets/langs/java.png"
import cpp from "../../assets/langs/C++.png"
import c from "../../assets/langs/C.png"
import { motion } from "motion/react"

const cards = [
     { src: js, head: "JavaScript", parag: "Изучаем JavaScript по GitHub-репозиториям!" },
     { src: ts, head: "TypeScript", parag: "Изучаем TypeScript по GitHub-репозиториям!" },
     { src: python, head: "Python", parag: "Изучаем Python по GitHub-репозиториям!" },
     { src: java, head: "Java", parag: "Изучаем Java по GitHub-репозиториям!" },
     { src: c, head: "C (Си)", parag: "Изучаем язык C по GitHub-репозиториям!" },
     { src: cpp, head: "C++", parag: "Изучаем C++ по GitHub-репозиториям!" },
     { src: js, head: "JavaScript", parag: "Изучаем JavaScript по GitHub-репозиториям!" },
     { src: ts, head: "TypeScript", parag: "Изучаем TypeScript по GitHub-репозиториям!" },
     { src: python, head: "Python", parag: "Изучаем Python по GitHub-репозиториям!" },
     { src: java, head: "Java", parag: "Изучаем Java по GitHub-репозиториям!" },
     { src: c, head: "C (Си)", parag: "Изучаем язык C по GitHub-репозиториям!" },
     { src: cpp, head: "C++", parag: "Изучаем C++ по GitHub-репозиториям!" },
]


function Catalog(){
     return (
          <>
               <div className="text-center xl:mt-80 mt-50">
                    <h1>Каталог ЯП <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
               </div>
               <div className="flex justify-center mt-20">
                    <button className="signUp md:mx-20 mx-3">Смотреть Roadmap</button>
                    <button className="login md:mx-20 mx-3">Как сделать первый PR</button>
               </div>
               <h2 className="lg:mt-100  mt-50 mb-10">Выбирай язык программирования</h2>
               <div className="flex justify-center ">
                    <div className="inline-grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-3 items-center lg:mb-100 mb-50">
                         {cards.map((elem, index) => (
                              <motion.div
                              key={elem.head}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{
                                   opacity: 1,
                                   y: 0,
                                   transition: { duration: 0.5, delay: index * 0.15 },
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              >
                                   <BlockPL 
                                        src={elem.src} 
                                        head={elem.head} 
                                        parag={elem.parag} 
                                        />
                              </motion.div>
                         ))}
                    </div>
               </div>
          </>

     )
}
export default Catalog;