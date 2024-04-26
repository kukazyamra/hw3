import React from "react";
import classes from "./Card.module.css";

const Card = ({name, description, percentage}) => {
    return (
        <div className={classes.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p><b>Уровень знаний:</b> {percentage}%</p>
        </div>
    )
}
export default Card;
