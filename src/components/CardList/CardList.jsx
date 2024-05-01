import React, {useState} from 'react';
import Card from '../Card/Card.jsx/';
import classes from './CardList.module.css';
import Button from '../Button/Button.jsx';

const cards = [
    {id: 1, name: 'Javascript', description: 'Мультипарадигменный язык программирования', percentage: 70},
    {
        id: 2,
        name: 'React.js',
        description: 'JavaScript-библиотека для создания пользовательских интерфейсов',
        percentage: 20
    },
    {id: 3, name: 'PHP', description: 'Скриптовый язык программирования общего назначения', percentage: 60},
    {
        id: 4,
        name: 'Node.js',
        description: 'Среда выполнения JavaScript, используемая для создания масштабируемых веб-приложений',
        percentage: 10
    },
    {id: 5, name: 'SQL', description: 'Язык структурированных запросов к базам данных', percentage: 55}
]
const CardList = () => {
    const [displayedCards, setDisplayedCards] = useState(cards)
    const [areShown, setAreShown] = useState(true)

    const filterCards = (filterCallback) => {
        setDisplayedCards(cards.filter(filterCallback));
    }
    const changeShown = () => {
        setAreShown(!areShown);
    }

    const displayAll = () => {
        setDisplayedCards(cards);
    }
    return (
        <>
            <div className={classes.menu}>
                <Button text={areShown ? 'Скрыть карточки' : 'Показать карточки'} onClick={changeShown}/>
                <Button text={'Уровень знаний более 50%'} onClick={() => filterCards(card => card.percentage >= 50)}/>
                <Button text={'Уровень знаний менее 50%'} onClick={() => filterCards(card => card.percentage < 50)}/>
                <Button text={'Любой уровень знаний'} onClick={displayAll}/>
            </div>
            {areShown && (
                <div className={classes.cardlist}>
                    {displayedCards.map((card) => (
                        <Card key={card.id} name={card.name} percentage={card.percentage}
                              description={card.description}/>
                    ))}
                </div>
            )}
        </>
    )
}
export default CardList;
