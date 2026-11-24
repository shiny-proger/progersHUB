import { useParams } from "react-router-dom"
import catalog from "../../data/catalog.json";
import Save from "../../components/ui/button/Save";
import useSave from "../../hooks/useSave";
import { AnimatePresence, motion } from "motion/react";
import Button from "../../components/ui/button/Button";
import { NavLink } from "react-router-dom";

type Prop={ owner: string; 
    name: string; 
    url: string; 
    tech: string; 
    direction: string; 
    level: string; 
    format: string; 
    contentLanguage: string; 
    recommended: boolean; 
    description: string; 
    tutor: string; 
}

export default function RepoAll(){
    

    const { repoName } = useParams();
    console.log(repoName)
    const obj: Prop | undefined =catalog.find((repo)=>repo.name===repoName);

    const {isSave, isHidden, saveRepo, unsaveRepo}=useSave(obj.name);
        function handleSave(){
            if (isSave){
                unsaveRepo()
            } else{
                saveRepo()
            }
        }

    if (!obj){
        return (
            <h1>Такого репо нет</h1>
        )
    } else {
        return (
            <>
        
        <div className="xl:mt-40 mt-20 mb-10">
            <div className="border-1 border-(--text) p-5 rounded-md bg-(--text)/5">
                <h1>{obj.owner}<span className="text-(--osn-or)/85 text-6xl">/{obj.name}</span></h1>
                <Save clickFun={handleSave} text={isSave ? "★" : "☆"} margin="" numCSS={true} col={isSave ? 3 : 2} />
                <NavLink to={"https://github.com/"+obj.owner+"/"+name} className="grid">
                    <Button text="GitHub ↗" margin="md:px-20 px-14" numCSS={true} col={2} />
                </NavLink>
            </div>
            <AnimatePresence >
                {isHidden && (
                    
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mb-5 mt-5 flex text-3xl items-center text-center justify-center rounded-lg bg-(--osn-or) px-5 py-3 font-bold text-(--bg) shadow-lg"
                    >
                        {isHidden}
                    </motion.div>
                   
                )}
            </AnimatePresence>
            <div>
                <p>{obj.description}</p>
            </div>
        </div>
        
        </>
    )
    }
    
}