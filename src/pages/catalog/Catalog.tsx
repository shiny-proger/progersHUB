import BlockPL from "../../components/blockPL/BlockPL"
import js from "../../assets/langs/js.png"
import ts from "../../assets/langs/ts.png"
import python from "../../assets/langs/python.png"
import java from "../../assets/langs/java.png"
import cpp from "../../assets/langs/C++.png"
import c from "../../assets/langs/C.png"
import csharp from "../../assets/langs/csharp.png"
import golang from "../../assets/langs/golang.png"
import github from "../../assets/langs/github.png"
import web from "../../assets/langs/web.png"
import database from "../../assets/langs/database.png"
import dart from "../../assets/langs/dart.png"
import php from "../../assets/langs/php.png"
import swift from "../../assets/langs/swift.png"
import kotlin from "../../assets/langs/kotlin.png"

import { motion } from "motion/react"

const cards = [
     { src: js, head: "JavaScript", parag: "Изучаем JavaScript по GitHub-репозиториям!" },
     { src: ts, head: "TypeScript", parag: "Грокаем TypeScript по GitHub-репозиториям!" },
     { src: python, head: "Python", parag: "Изучаем Python по GitHub-репозиториям!" },
     { src: c, head: "C (Си)", parag: "Осваиваем язык C по GitHub-репозиториям!" },
     { src: cpp, head: "C++", parag: "Исследуем C++ по GitHub-репозиториям!" },
     { src: csharp, head: "Csharp", parag: "Зарываемся в C++ по GitHub-репозиториям!" },
     { src: java, head: "Java", parag: "Препарируем Java по GitHub-репозиториям!" },
     { src: golang, head: "Golange", parag: "Ковыряем Golange по GitHub-репозиториям!" },
     { src: github, head: "GitHub", parag: "Эксперементируем с GitHub по GitHub-репозиториям!" },
     { src: web, head: "WEB (HTML & CSS)", parag: "Разбираемся в вебе по GitHub-репозиториям!" },
     { src: database, head: "DataBase", parag: "Штудируем Базы Данных по GitHub-репозиториям!" },
     { src: dart, head: "Dart", parag: "Обкатываем Dart по GitHub-репозиториям!" },
     { src: php, head: "Php", parag: "Курим php по лучшим GitHub-репозиториям!" },
     { src: swift, head: "Swift", parag: "Анализируем swift по GitHub-репозиториям!" },
     { src: kotlin, head: "Kotlin", parag: "Тестим Kotlin по GitHub-репозиториям!" },
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