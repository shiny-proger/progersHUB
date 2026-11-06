type StepProp = {
     num: number,
     head: string,
     parag: string,
     col: boolean,
}

function StepByStep({num, head, parag, col}: StepProp){
     return (
          <>
               <div className=' max-w-sm'>
                     <span className={(col ? "bg-(--text) " :"bg-(--osn-or) ") + ("my-1 flex size-10 items-center justify-center rounded-full font-semibold text-(--bg)")}>
                     {num}
                     </span>
                     <h5 className='my-1'>{head}</h5>
                     <p className='my-1'>{parag}</p>
                </div>
          </>
     )
}
export default StepByStep;