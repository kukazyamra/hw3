import React, {useState} from 'react';
import Card from '../Card/Card.jsx/';
import classes from './CardList.module.css';
import Button from '../Button/Button.jsx';

const CardList = ({cards}) => {
    const [displayedCards, setDisplayedCards] = useState(cards)
    const [areShown, setAreShown] = useState(true)

    const changeShown = () => {
        setAreShown(!areShown);
    }
    const displayAbove50 = () => {
        setDisplayedCards(cards.filter(card => card.percentage >= 50));
    }
    const displayBelow50 = () => {
        setDisplayedCards(cards.filter(card => card.percentage < 50));
    }
    const displayAll = () => {
        setDisplayedCards(cards);
    }
    return (
        <>
            <div className={classes.menu}>
                <Button text={areShown ? 'Скрыть карточки' : 'Показать карточки'} onClick={changeShown}/>
                <Button text={'Уровень знаний более 50%'} onClick={displayAbove50}/>
                <Button text={'Уровень знаний менее 50%'} onClick={displayBelow50}/>
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
