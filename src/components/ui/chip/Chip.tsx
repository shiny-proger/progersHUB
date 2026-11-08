type chipType={
    text: string
    col: number
}

export default function Chip({text, col}: chipType){
    let style="  inline-block whitespace-nowrap px-2 py-1 rounded-full "
    switch(col){
        case 1:
            style+=" bg-(--text)/10 border-1"
            break;
        case 2:
            style+="text-(--bl-or) border-(--osn-or) bg-(--lig-or)/20 border-1"
            break;
        case 3:
            style+="text-(--error) bg-(--error)/10"
            break;
        case 4:
            style+="text-(--right) bg-(--right)/10"
            break;
    }
    return (
        <p className={style}>{text}</p>
    )
}

