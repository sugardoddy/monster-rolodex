import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.components'
export const CardList = props =>
{
    console.log(props);
    return <div className='card-list'>
    {
        props.people.map((person)=>
          <Card key={person.id} people={person} />
         )
    }
  
    </div>
};