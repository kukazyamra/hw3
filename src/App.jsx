import CardList from "./components/CardList/CardList.jsx";
const cards = [
    { id: 1, name: 'Javascript', description: 'Мультипарадигменный язык программирования', percentage: 70 },
    { id: 2, name: 'React.js', description: 'JavaScript-библиотека для создания пользовательских интерфейсов', percentage: 20 },
    { id: 3, name: 'PHP', description: 'Скриптовый язык программирования общего назначения', percentage: 60 },
    { id: 4, name: 'Node.js', description: 'Среда выполнения JavaScript, используемая для создания масштабируемых веб-приложений', percentage: 10 },
    { id: 5, name: 'SQL', description: 'Язык структурированных запросов к базам данных', percentage: 55 }
]

function App() {
    return(
        <>
            <CardList cards={cards}/>
        </>
    )
}

export default App
