import { useState } from "react";
import Save from "../../ui/button/Save";
import Chip from "../../ui/chip/Chip"
import { CheckBox } from "../../ui/CheckBox/CheckBox"
import useSave from "../../../hooks/useSave";
import { AnimatePresence, motion } from "motion/react";

type propRepo={
    name: string,
    par: string,
    level: string,
    lang: string,
    format: string,
    stars: number,
}


export default function Repo({name, par, level, lang, format, stars}: propRepo){
    const [isEnabled, setIsEnabled]=useState(false);

    const {isSave, isHidden, saveRepo, unsaveRepo}=useSave(name);

    function handleSave(){
        if (isSave){
            unsaveRepo()
        } else{
            saveRepo()
        }
    }

    return (
        <>
            <AnimatePresence>
                {isHidden && (
                    
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex text-3xl items-center text-center justify-center rounded-lg bg-(--osn-or) px-5 py-3 font-bold text-(--bg) shadow-lg"
                    >
                        {isHidden}
                    </motion.div>
                   
                )}
            </AnimatePresence>
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
            {/* {isHidden!=="" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-(--bg)/90 animate-overlay-in">
                    <div className="rounded-lg bg-(--osn-or) px-5 py-3 font-bold text-(--bg) shadow-lg animate-message-in">
                        {isHidden}
                    </div>
                </div>
            )} */}
            
        </>
    )
}
