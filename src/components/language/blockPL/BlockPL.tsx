
type BlockPLprop = {
     src: string
     head: string
     parag: string
}

function BlockPL({src, head, parag}: BlockPLprop){
     return (
          <>
               <div className="BlockPL">
                    <div className="sm:flex sm:flex-col sm:justify-start sm:items-start flex flex-row items-center justify-around">
                         <img src={src} alt="" />
                         <h3>{head}</h3>                 
                    </div>
                    <p>{parag}</p>   
               </div>
          </>
     )
}
export default BlockPL;