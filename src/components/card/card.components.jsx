import React from 'react';
import './card.styles.css'
export const Card = (props) => (
    <div className ='card-container'>
    <img alt="people" src = {`https://robohash.org/${props.people.id}?set=1%size=180x180`} />
        <h2>{props.people.name}</h2>
        <p>{props.people.email}</p>
        <p>phone # {props.people.phone}</p>
        <p>Address</p>
        <p>{props.people.address.street}, {props.people.address.suite}</p>
        <p>{props.people.address.city}, {props.people.address.state} {props.people.address.zipcode}</p>
        <p></p>
        <p></p>
    </div>
);