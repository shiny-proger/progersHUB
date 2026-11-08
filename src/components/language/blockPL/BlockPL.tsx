import Chip from "../../ui/chip/Chip";

type BlockPLprop = {
     src: string
     head: string
     parag: string
}

function BlockPL({src, head, parag}: BlockPLprop){
     return (
          <>
               <div className="BlockPL text-grad-hover">
                    
                    <div className="flex flex-col justify-start items-start ">
                         <img src={src} alt="" />
                         <h3>{head}</h3>                 
                         <p>{parag}</p>   
                    </div>
                    <Chip text="5 репо" col={2} />
               </div>
          </>
     )
}
export default BlockPL;