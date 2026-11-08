import { useState } from "react";
import type { Repo } from '../../types/github'
import Chip from "../../components/ui/chip/Chip";
import { CheckBox } from "../../components/ui/CheckBox/CheckBox";
import Badge from "../../components/ui/badge/Badge";

const owner = "shiny-proger";
const repo = "reactLib"

export default function ApiLab(){
    const [text, setText] = useState("Нажми кнопку")
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    async function load() {
        setText("Loading");

        const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/repos/${owner}/${repo}`)
        console.log("status: ", response.status, " ok: ", response.ok)

        const data: Repo = await response.json()
        console.log("Data: ", data)

        setText(`${data.full_name}: ${data.stargazers_count} звёзд, lang: ${data.language ?? "нет основного ЯП"}`)
    }

    return(
        <div className="p-10 mt-100">
            <Chip text="Проверка" col={1} />
            <Chip text="Проверка" col={2} />
            <Chip text="Проверка" col={3} />
            <Chip text="Проверка" col={4} />
            <CheckBox 
                checked={isEnabled} 
                onChange={setIsEnabled} 
                label="Включить уведомления" 
            />
            
            <Badge />
            <button className="rounded-lg bg-sky-500 px-4 py-2 text-white" onClick=
            {load}>Button</button>
            <p className="mt-4">{text}</p>
        </div>
    )
}
