import Button from "../../components/ui/button/Button";
import Filters from "../../components/catalog/filters/Filters";
import Repo from "../../components/catalog/Repo/Repo";

interface Reposes {
  owner: string;
  stars: number;
  name: string;
  url: string;
  tech:string;
  direction: string;
  level: string;
  format: string;
  contentLanguage: string;
  recommended: boolean;
  description: string;
  tutor: string;
}

const repos = [
  {
    "owner": "javascript-tutorial",
    "stars": 32,
    "name": "ru.javascript.info",
    "url": "https://github.com/javascript-tutorial/ru.javascript.info",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "начальный",
    "format": "книга",
    "contentLanguage": "ru",
    "recommended": true,
    "description": "Исходники русского учебника javascript.info: язык, браузер (DOM, события), дополнительные темы.",
    "tutor": "Идите по главам по порядку и в конце каждой решайте задачи. Примеры сразу запускайте в консоли браузера."
  },
  {
    "owner": "getify",
    "stars": 322,
    "name": "You-Dont-Know-JS",
    "url": "https://github.com/getify/You-Dont-Know-JS",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "продвинутый",
    "format": "книга",
    "contentLanguage": "en",
    "recommended": false,
    "description": "Серия книг об устройстве языка: области видимости, замыкания, объекты, классы, типы.",
    "tutor": "Читайте после базового курса, по одной книге серии. Всё непонятное проверяйте маленькими примерами в консоли."
  },
  {
    "owner": "leonardomso",
    "stars": 834,
    "name": "33-js-concepts",
    "url": "https://github.com/leonardomso/33-js-concepts",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "средний",
    "format": "awesome-список",
    "contentLanguage": "en",
    "recommended": false,
    "description": "Список из 33 ключевых концепций JS со ссылками на статьи.",
    "tutor": "Используйте как чек-лист: берите тему, читайте две-три статьи по ссылкам и переходите к следующей. Русский перевод ищите в README."
  },
  {
    "owner": "Asabeneh",
    "stars": 322,
    "name": "30-Days-Of-JavaScript",
    "url": "https://github.com/Asabeneh/30-Days-Of-JavaScript",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "начальный",
    "format": "курс",
    "contentLanguage": "en",
    "recommended": true,
    "description": "Курс на 30 дней: теория, примеры и упражнения в каждой папке.",
    "tutor": "Проходите по одной папке в день: читайте README, повторяйте примеры руками, затем делайте упражнения. К следующему дню переходите, когда задачи решены."
  },
  {
    "owner": "lydiahallie",
    "stars": 322,
    "name": "javascript-questions",
    "url": "https://github.com/lydiahallie/javascript-questions",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "средний",
    "format": "тренажёр",
    "contentLanguage": "ru",
    "recommended": false,
    "description": "Сотни вопросов «что выведет код» с объяснениями.",
    "tutor": "Сначала ответьте на вопрос сами, не запуская код, потом откройте ответ и сравните. Ошибочные вопросы выписывайте и повторяйте позже."
  },
  {
    "owner": "mbeaudru",
    "stars": 322,
    "name": "modern-js-cheatsheet",
    "url": "https://github.com/mbeaudru/modern-js-cheatsheet",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "начальный",
    "format": "шпаргалка",
    "contentLanguage": "ru",
    "recommended": false,
    "description": "Шпаргалка по ES6+: деструктуризация, стрелочные функции, промисы, модули.",
    "tutor": "Прочтите целиком один раз, затем возвращайтесь за нужным разделом. Каждый пример перепишите руками, а не копируйте."
  },
  {
    "owner": "denysdovhan",
    "stars": 322,
    "name": "wtfjs",
    "url": "https://github.com/denysdovhan/wtfjs",
    "tech": "JavaScript",
    "direction": "Основы и продвинутые концепции",
    "level": "средний",
    "format": "шпаргалка",
    "contentLanguage": "ru",
    "recommended": false,
    "description": "Странное поведение языка с объяснениями.",
    "tutor": "Читайте после основ: угадайте результат, затем читайте объяснение. Это закрепляет приведение типов и особенности языка."
  },
]
function Catalog(){
     return (
          <div className="grid items-center gap-5 mb-10">
               <div className="text-start xl:mt-40 mt-20 mb-10">
                    <h1>Каталог репозиториев <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
                    <p>74 репозитоориев собрано по вашему запросу</p>
               </div>
               <div className="grid sm:flex gap-5">
                    <Filters />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         {repos.map((elem)=>{
                         return(
                              <Repo name={elem.name} par={elem.description} level={elem.level} lang={elem.contentLanguage} format={elem.format} stars={elem.stars} />
                              )
                         })

                         }
                         
                    </div>
                   
               </div>
               <Button text="Показать еще" margin='' numCSS={true} col={3} />
          </div>

     )
}
export default Catalog;