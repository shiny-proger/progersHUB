import { useParams } from "react-router-dom"
import catalog from "../../data/catalog.json";
import Save from "../../components/ui/button/Save";
import useSave from "../../hooks/useSave";
import { AnimatePresence, motion } from "motion/react";
import Button from "../../components/ui/button/Button";
import { NavLink } from "react-router-dom";
import Chip from "../../components/ui/chip/Chip";
import type { Repo } from '../../types/github'
import { useState, useEffect } from "react";
import PageSkeleton from "../../components/layout/pageSceleton/PageSceleton";
import ErrorAPI from "../Errors/ErrorAPI";

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
    const obj: Prop | undefined =catalog.find((repo)=>repo.name===repoName);

    const [dataAPI, setDataAPI] = useState<Repo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    if (!obj){
        return (
            <h1>Такого репо нет</h1>
        )
    } else {
        const {isSave, isHidden, saveRepo, unsaveRepo}=useSave(obj.name);
        function handleSave(){
            if (isSave){
                unsaveRepo()
            } else{
                saveRepo()
            }
        }

        useEffect(()=>{
            const controller = new AbortController();
            async function DataGitHub() {
                try{
                    setLoading(true);
                    if (obj){
                        const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/repos/${obj.owner}/${obj.name}`);
                        const data: Repo=await response.json();
                        setDataAPI(data);
                        
                        if(!response.ok){
                            throw new Error("Ошибка при обращении к АПИ ГИТХАБА")
                        }
                    }
                }catch(error){
                    if (error instanceof Error && error.name !== 'AbortError') {
                        setError(error)
                        return (
                            <h1>{("ПРОИЗОШЛА ОШИБКА, перезайди на страницу! Error: " + error)}</h1>
                        )
                }
                } finally{
                    setLoading(false);
                }
            }
        
            DataGitHub();

    
            return () => controller.abort();
        }, []); // пустой массив значит запуск только при открытии 
        
        if(loading) return <PageSkeleton/>;
        if (error) return <ErrorAPI/>;

        if (dataAPI){
            const lastUpdateRepo = new Date(dataAPI.updated_at)
            .toLocaleDateString("ru-RU")
            return (
                <>  
                    <div className="xl:mt-40 mt-30 mb-10 grid sm:gap-3 gap-1">
                        <div className="grid border-1 border-(--text)/50 hover:border-(--text) p-5 rounded-md bg-(--text)/5 gap-5 ">
                            <div className="flex sm:flex-row flex-col justify-between">
                                <div className="grid">
                                    <h1 className="p-0 text-[clamp(20px,3vw,70px)]">{obj.owner}<span className="text-(--osn-or)/85 text-[clamp(15px,2vw,60px)]">/{obj.name}</span></h1>
                                    <p>{obj.description}</p>
                                </div>
                                <div className="flex flex-row gap-3 ">
                                    <Save clickFun={handleSave} text={isSave ? "★" : "☆"} margin=" self-start " numCSS={true} col={isSave ? 3 : 2} />
                                    <NavLink to={"https://github.com/"+obj.owner+"/"+obj.name} className="grid">
                                        <Button text="Открыть на GitHub ↗" margin=" py-2 self-start" numCSS={true} col={2} />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="sm:flex sm:flex-row grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
                                <Chip text={obj.tech} col={2} />
                                <Chip text={obj.format} col={1} />
                                <Chip text={"Язык репо: " + obj.contentLanguage} col={3} />
                                <Chip text={obj.recommended ? "Рекомендуется для новчика" : "Не рекомендуется"} col={4} />
                            </div>
                            <div className="sm:flex gap-3 grid grid-cols-2">
                                <p>★ stars: <span className="font-bold text-(--text-h)">{dataAPI.stargazers_count}</span></p>
                                <NavLink to={"https://github.com/"+obj.owner+"/"+obj.name+"/forks"}>
                                    <p>⑂ forks: <span className="font-bold text-(--text-h)">{dataAPI.forks_count}</span></p>
                                </NavLink>
                                <p>Обновлен: <span className="font-bold text-(--text-h)">{lastUpdateRepo}</span></p>
                                <p>Лицензия: <span className="font-bold text-(--text-h)">{dataAPI.license?.name}</span></p>
                            </div>
                        </div>

                        <AnimatePresence >
                            {isHidden && (
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="z-50 mb-5 mt-5 flex text-3xl items-center text-center justify-center rounded-lg bg-(--osn-or) px-5 py-3 font-bold text-(--bg) shadow-lg"
                                >
                                    {isHidden}
                                </motion.div>
                            
                            )}
                        </AnimatePresence>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                            <div className="grid sm:gap-3 gap-1 ">
                                <div className=" border-1 border-(--text)/50 hover:border-(--text) p-5 rounded-md bg-(--text)/5 gap-5 ">
                                    <h2 className="text-[clamp(10px,4vw,40px)]">Как обучаться по данному репозиторию?...</h2>
                                    <p className="text-[clamp(10px,1.5vw,50px)]">{obj.tutor}</p>
                                    <div className="sm:flex gap-3 grid ">
                                        <Chip text={("Уровень: " + obj.level.toUpperCase())} col={4} />
                                        <Chip text={("Изучишь: " + obj.direction)} col={1} />
                                    </div>
                                </div>
                                <div className=" grid gap-5 border-1 border-(--text)/50 hover:border-(--text) p-5 rounded-md bg-(--text)/5 gap-5 ">
                                    <div className="flex items-center justify-between ">
                                        <h3>README</h3>
                                        <Chip text="Есть" col={4} />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <h3>Тесты и CI</h3>
                                        <Chip text="Есть" col={4} />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <h3>Инструкция по запуску!</h3>
                                        <Chip text="Нет" col={3} />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <h3>ЗАПУСТИТЬ</h3>
                                        <Button text="Один клик ↗" margin=" py-2 self-start" numCSS={true} col={3} />
                                    </div>
                                
                                </div>
                            </div>
                            <div className="h-fit sm:w-1/4 border-1 border-(--text)/50 hover:border-(--text) p-5 rounded-md bg-(--text)/5 gap-5">
                                <div className="grid gap-5">
                                    <h4>Ссылки проекта</h4>
                                    <div className="grid gap-3">
                                        <NavLink to={"https://github.com/"+obj.owner+"/"+obj.name}>
                                            <h5>Исходный код ↗</h5>
                                        </NavLink>
                                        <hr />
                                        <NavLink to={"https://github.com/"+obj.owner+"/"+obj.name+"/issues"}>
                                            <h5>Issues ↗</h5>
                                        </NavLink>
                                        <hr />
                                        <NavLink to={"https://github.com/"+obj.owner+"/"+obj.name+"/issues"}>
                                            <h5>README ↗</h5>
                                        </NavLink>
                                        <hr />
                                        <NavLink to={"https://github.com/"+obj.owner}>
                                            <h5>Автор репо ↗</h5>
                                        </NavLink>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        )
    }
    }
    
}