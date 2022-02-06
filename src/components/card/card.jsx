import React from "react";
import {Card} from './card.styled'

const card = ({text}) => {
    return (
        <Card>
            <p>{text}</p>
        </Card>
    );
}

export default card;