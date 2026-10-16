type StepProp = {
     num: number,
     head: string,
     parag: string,
}

function StepByStep({num, head, parag}: StepProp){
     return (
          <>
               <div className=' max-w-sm'>
                     <span className="my-1 flex size-10 items-center justify-center rounded-full bg-(--text) font-semibold text-(--bg)">
                     {num}
                     </span>
                     <h5 className='my-1'>{head}</h5>
                     <p className='my-1'>{parag}</p>
                </div>
          </>
     )
}
export default StepByStep;