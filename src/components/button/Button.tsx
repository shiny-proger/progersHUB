type ButProp = {
    text: string,
    margin: string,
    numCSS: Boolean,

}

function Button({text, margin, numCSS,}: ButProp){
     return (
          <button className={`${margin} ${numCSS ? "signUp" : "login"}`}>{text}</button>
     )
}
export default Button;