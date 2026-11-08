import { useState, useEffect } from "react"
import { motion } from "motion/react"

export default function UpButton(){

  // Создаем состояние, пролистал ли пользователь больше 300px
  const [isScrolledPastLimit, setIsScrolledPastLimit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Каждый раз при скролле проверяем текущую позицию
      if (window.scrollY > 800) {
        setIsScrolledPastLimit(true);
      } else {
        setIsScrolledPastLimit(false);
      }
    };

        // Вешаем слушатель на окно браузера
        window.addEventListener('scroll', handleScroll);

        // Обязательно удаляем слушатель при размонтировании компонента, чтобы не было утечки памяти
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Пример условия: кнопка появляется только если пользователь пролистал вниз
    if (!isScrolledPastLimit) return null;

    return (
        <>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                >
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed sm:bottom-20 sm:right-20 bottom-10 right-10 w-10 h-10 font-bold bg-(--osn-or) text-(--text-or) rounded-sm">↑</button>
            </motion.div>
        </>    
            
    )
}
