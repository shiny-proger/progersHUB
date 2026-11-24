import Repo from "../../components/catalog/Repo/Repo"
import catalog from "../../data/catalog.json"



export default function Profile(){
    
    let count =0;
    catalog.map((elem)=>{
        if(localStorage.getItem(elem.name)){
            count++;
        }
    })

    return(
          <div className="grid items-center gap-5 mb-10">
               <div className="text-start xl:mt-40 mt-20 mb-10">
                    <h1>Личный кабинет <span className="text-grad text-nowrap">PROGERS HUB</span></h1>
                    <p>{count} избранных репозитория</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                     {catalog.map((elem)=>{
                     return(
                           localStorage.getItem(elem.name) && <Repo name={elem.name} owner={elem.owner} par={elem.description} level={elem.level} lang={elem.contentLanguage} format={elem.format} recomend={elem.recommended} />
                          )
                     })
                     }
                </div>
          </div>
    )
}
