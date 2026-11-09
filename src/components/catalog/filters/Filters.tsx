import { useState } from "react";

import Chip from "../../ui/chip/Chip"
import { CheckBox } from "../../ui/CheckBox/CheckBox"
import Button from "../../ui/button/Button";

export default function Filters(){
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    return (
        <div className="border-2 border-(--text) text-start p-5 rounded-md mb-10 grid gap-3 sm:gap-5 sm:w-1/4">
            <h2>Фильтры:</h2>
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
                    <Chip text="Курс" col={2} /> 
                    <Chip text="Книга" col={1} />
                    <Chip text="Шпаргалка" col={1} /> 
                    <Chip text="Интерактив" col={1} />
                    <Chip text="Учебный проект" col={2} /> 
                    <Chip text="Задачи" col={2} />
                    <Chip text="Awesome" col={1} /> 
                    
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
            <div className="grid ">
                <h4>Обновлялся</h4>
                <div className="flex gap-3 flex-wrap">
                    <Chip text="За месяц" col={1} /> 
                    <Chip text="За 6 месяцев" col={1} /> 
                    <Chip text="За год" col={1} /> 
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <h4>Скрыть архивные →</h4>
                <CheckBox 
                checked={isEnabled} 
                onChange={setIsEnabled} 
                label="Включить уведомления" 
            />
            </div>
            <div className="flex justify-between items-center ">
                <h4>Есть good first issue →</h4>
                <CheckBox 
                checked={isEnabled} 
                onChange={setIsEnabled} 
                label="Включить уведомления" 
            />
            </div>
            <div className="flex justify-between items-center ">
                <h4>Запуск без установки →</h4>
                <CheckBox 
                checked={isEnabled} 
                onChange={setIsEnabled} 
                label="Включить уведомления" 
            />
            </div>
            <div className="grid gap-3 items-center ">
                <Button text='Применить фильтры' col={3} margin="" numCSS={true} />
                <Button text='Сбросить фильтры' col={1} margin="" numCSS={true} />
            </div>
        </div>
    )
}