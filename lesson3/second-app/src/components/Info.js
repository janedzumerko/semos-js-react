import React from 'react';

function Info(props) {
    return (
            <div onClick={() => props.click(props.name)}>
                <img width="50" src={props.image} />
                <h3>{props.name}</h3>
                <p>Kurs: {props.course}</p>
                <p>Pocetok: {props.start}</p>
                <hr />
            </div>
    );
}

export default Info;
