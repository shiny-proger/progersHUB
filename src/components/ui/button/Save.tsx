type ButProp = {
    text: string,
    margin: string,
    numCSS: Boolean,
    col: number,
    clickFun: ()=>void,
}

function Save({text, margin, numCSS, col, clickFun}: ButProp){
     let style=`${margin} ${numCSS ? "signUp" : "login"} text-3xl`
     switch(col){
          case 1:
               style+=" bg-(--text) text-(--bg) border-(--text) hover:bg-(--bg) hover:text-(--text) "
               break;
          case 2:
               style+=" bg-(--bg) text-(--text) border-none hover:bg-(--text) hover:text-(--bg) transition-all duration-300"
               break;
          case 3:
               style+=" bg-(--osn-or)/30 text-(--osn-or) border-none hover:bg-(--bl-or) hover:text-(--text-or)"
               break;
          case 4:
               style+=" "
     }     

     return (
          <button onClick={clickFun} className={style}>{text}</button>
     )
}
export default Save;
