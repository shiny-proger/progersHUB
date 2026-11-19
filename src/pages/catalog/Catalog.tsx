import Button from "../../components/ui/button/Button";
import Filters from "../../components/catalog/filters/Filters";
import Repo from "../../components/catalog/Repo/Repo";
import catalog from "../../data/catalog.json"
import { useState } from "react";


function Catalog(){
    const [count, setCount] = useState(5);
    
     return (
          <div className="grid items-center gap-5 mb-10">
               <div className="text-start xl:mt-40 mt-20 mb-10">
                    <h1>Каталог репозиториев <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
                    <p>74 репозитоориев собрано по вашему запросу</p>
               </div>
               <div className="grid sm:flex gap-5">
                    <Filters />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         {catalog.slice(0, count).map((elem)=>{
                         return(
                              <Repo name={elem.name} par={elem.description} level={elem.level} lang={elem.contentLanguage} format={elem.format} recomend={elem.recommended} />
                              )
                         })
                         }
                    </div>
               </div>
               <Button text="Показать еще" margin='' numCSS={true} col={3} onClick={()=>{setCount(count+3)}} />
          </div>
     )
}
export default Catalog;
