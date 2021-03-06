import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCard from '../singleCard/SingleCard';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://whispering-sierra-50046.herokuapp.com/lists')
            .then(res => res.json())
            .then(data => setCards(data));
        
    },[])
    console.log(cards);
    return (
        <Row xs={1} md={1} className="g-3 mx-3 my-3 d-flex flex-column-reverse">
            {
                cards.map(singleCard => <SingleCard
                    key={singleCard.name}
                    singleCard={singleCard}
                ></SingleCard>)
            }
        </Row>
    );
};

export default Cards;