type ButProp = {
    text: string,
    margin: string,
    numCSS: Boolean,
    col: number,
}

function Button({text, margin, numCSS, col}: ButProp){
     let style=`${margin} ${numCSS ? "signUp" : "login"}`
     switch(col){
          case 1:
               style+=" bg-(--text) text-(--bg) border-(--text) hover:bg-(--bg) hover:text-(--text) "
               break;
          case 2:
               style+=" bg-(--bg) text-(--text) border-(--text) hover:bg-(--text) hover:text-(--bg) transition-all duration-300"
               break;
          case 3:
               style+=" bg-(--osn-or)/10 text-(--bl-or) border-(--osn-or) hover:bg-(--bl-or) hover:text-(--text-or)"
               break;
          case 4:
               style+=" "

     }
     return (
          <button className={style}>{text}</button>
     )
}
export default Button;
