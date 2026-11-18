import { useState, useEffect } from "react";


export default function useSave(name:string){
    const [isSave, setIsSave]=useState(()=>
        Boolean(localStorage.getItem(name))
    );
    const [isHidden, setIsHidden]= useState("");

    function saveRepo(){
        setIsSave(!isSave);
        localStorage.setItem(name, JSON.stringify(isSave))
        setIsHidden("Добавлено в избранное");
    }
    function unsaveRepo(){
        setIsSave(!isSave);
        localStorage.removeItem(name);
        setIsHidden("Удалено из избранного");
    }

    useEffect(() => {
        if (!isHidden) return;

        const timer = setTimeout(() => {
        setIsHidden("");
        }, 1000);

        return () => clearTimeout(timer);
    }, [isHidden, 1000]);

    return {isSave, isHidden, saveRepo, unsaveRepo};
}
