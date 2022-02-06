import React from "react";
import {Card} from './Card.styled'

const card = ({text}) => {
    return (
        <Card>
            <p>{`${text}`}</p>
        </Card>
    );
}

export default card;