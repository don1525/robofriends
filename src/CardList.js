import React from 'react';
import { robots } from './robots.js';

const CardList = () => {
    return(
        robots.map(user => {
            return <Card user={user}/>
        })
    )
}

export default CardList;