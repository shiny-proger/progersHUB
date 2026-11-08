import Chip from "../../ui/chip/Chip"

export default function Filters(){
    return (
        <div className="border-1 border-(--text) text-start p-5 rounded-md mb-10 grid gap-3 sm:gap-5">
            <div className="grid ">
                <h4>Язык</h4>
                <div className="flex gap-3 flex-wrap">
                    <Chip text="Python" col={1} />
                    <Chip text="JavaScript" col={1} />
                    <Chip text="TypeScript" col={1} />
                    <Chip text="Golange" col={2} />
                    <Chip text="Java" col={1} />
                    <Chip text="C++" col={1} /> 
                    <Chip text="C" col={1} />
                    <Chip text="C#" col={1} />
                    <Chip text="Swift" col={1} />
                    <Chip text="Kotlin" col={1} />
                    <Chip text="Dart" col={1} />
                    <Chip text="Php" col={1} />
                    <Chip text="DataBase" col={1} />
                    <Chip text="Git\Github" col={2} />
                </div>
            </div>
            <div className="grid ">
                <h4>Направление</h4>
                <div className="flex gap-3 flex-wrap" >
                    <Chip text="Web" col={1} />
                    <Chip text="Data\ML" col={2} />
                    <Chip text="GameDEV" col={1} />
                    <Chip text="DevOps" col={1} />
                    <Chip text="Mobile" col={2} />
                    <Chip text="Алгоритмы" col={1} /> 
                    <Chip text="Безопасность" col={1} />
                </div> 
            </div>
            <div className="grid ">
                <h4>Уровень</h4>
                <div className="flex gap-3 flex-wrap"> 
                    <Chip text="С нуля" col={1} />
                    <Chip text="Базовый" col={2} />
                    <Chip text="Средний" col={1} />
                    <Chip text="Продвинутый" col={1} />
                </div> 
            </div>
            <div className="grid ">
                <h4>Формат</h4>
                <div className="flex gap-3 flex-wrap">
                    <Chip text="python" col={2} /> 
                    <Chip text="python" col={2} />
                </div>
            </div>
            <div className="grid ">
                <h4>Язык материала</h4>
                <div className="flex gap-3 flex-wrap">
                    <Chip text="RU" col={1} /> 
                    <Chip text="EN" col={1} /> 
                    <Chip text="Любой" col={1} /> 
                </div>
            </div>
            
        </div>
    )
}