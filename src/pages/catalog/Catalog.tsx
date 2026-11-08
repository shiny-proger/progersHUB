import Filters from "../../components/catalog/filters/Filters";

function Catalog(){
     return (
          <>
               <div className="text-start xl:mt-40 mt-20">
                    <h1>Каталог репозиториев <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
               </div>
               
               <Filters />
               
          </>

     )
}
export default Catalog;