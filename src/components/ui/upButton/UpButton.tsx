import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"

export default function UpButton(){

  // Создаем состояние, пролистал ли пользователь больше 300px
  const [isScrolledPastLimit, setIsScrolledPastLimit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastLimit(window.scrollY>500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isScrolledPastLimit) return null;

    return (
        <>
          <AnimatePresence>
            {isScrolledPastLimit && (
              <motion.button
                key="scroll-top"
                type="button"
                aria-label="Наверх"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed sm:bottom-20 sm:right-20 bottom-10 right-10 w-10 h-10 font-bold bg-(--osn-or) text-(--text-or) rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
          </motion.button>)}
        </AnimatePresence>
        </>    
    )
}
