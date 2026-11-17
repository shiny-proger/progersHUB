import { useState } from "react";
import Save from "../../ui/button/Save";
import Chip from "../../ui/chip/Chip"
import { CheckBox } from "../../ui/CheckBox/CheckBox"
import useSave from "../../../hooks/useSave";


type propRepo={
    name: string,
    par: string,
    level: string,
    lang: string,
    format: string,
    stars: number,
}


export default function Repo({name, par, level, lang, format, stars}: propRepo){
    const [isEnabled, setIsEnabled]=useState(true);

    const {isSave, saveRepo, unsaveRepo}=useSave(name);

    function handleSave(){
        if (isSave){
            unsaveRepo()
        } else{
            saveRepo()
        }
    }

    return (
        <div className="grid gap-2 border-2 rounded-md p-5 items-center">
            <div className="flex justify-between">
                <h3>{name}</h3>
                <Chip text={"★ " + stars} col={3} />
            </div>
            <p>{par}</p>
            <div className="flex justify-baseline gap-2">
                <Chip text={level} col={2} />
                <Chip text={format} col={1} />
                <Chip text={lang} col={4} />
            </div>
            <hr />
            <div className="flex justify-between">
                <div className="flex justify-baseline gap-3 items-center">
                    <CheckBox 
                        checked={isEnabled} 
                        onChange={setIsEnabled}  
                    />
                    <p>сравнить</p>
                </div>
                <Save clickFun={handleSave} text={isSave ? "★" : "☆"} margin="" numCSS={true} col={isSave ? 3 : 2} />
            </div>
        </div>
    )
}
