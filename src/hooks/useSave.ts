import { useState } from "react";

export default function useSave(name:string){
    const [isSave, setIsSave]=useState(()=>
        Boolean(localStorage.getItem(name))
    );

    
    function saveRepo(){
        setIsSave(!isSave);
        localStorage.setItem(name, JSON.stringify(isSave))
    }
    function unsaveRepo(){
        setIsSave(!isSave);
        localStorage.removeItem(name);
    }
    return {isSave, saveRepo, unsaveRepo};
}
