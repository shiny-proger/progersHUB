export default function ErrorAPI(){
    return(
        <div className="mt-50 mb-50">
            <h1>Упс... Произошла <span className="text-(--error)">ошибка</span>, не удалось взять данные из GitHub API</h1>
            <h4 className="text-(--text)">Скорее всего у тебя плохо работает <span className="text-(--right)">интернет</span>, проверь подключение и перезагруси страницу</h4>
        </div>
    )
}