import React, { useCallback, useState} from "react";
import Card from "../Card/Card";
import { Container } from "./Deck.styled";
import Button from "../Common/Button/Button.styled";
import cardList from "../../data/oblique-strategies.json"
import { getRndInteger } from "../../helpers/Maths";

const Deck = () => {

    const [cardText, setCardText] = useState("hello world")
    const drawCard = useCallback(() =>{
        setCardText(cardList.cards[getRndInteger(0,cardList.cards.length)])
    })
    return (
        <Container>
            <Card text={cardText}></Card>
            <Button onClick={drawCard}>Draw</Button>
        </Container>
    );
}

export default Deck;