type chipType={
    text: string
    col: number
}

export default function Chip({text, col}: chipType){
    let style=" border-2 inline-block px-2 py-1 rounded-full "
    switch(col){
        case 1:
            break;
        case 2:
            style+="text-(--lig-or) border-(--osn-or)"
            break;
        case 3:
            style+="text-(--error) border-(--error)/95"
            break;
        case 4:
            style+="text-(--right) border-(--right)/95"
            break;
    }
    return (
        <h6 className={style}>{text}</h6>
    )
}