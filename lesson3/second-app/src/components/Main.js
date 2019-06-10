import React, { Component } from 'react';
import Info from './Info';

const API_JSON = {
    contacts: [
        {
            id: 1,
            image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg',
            course: 'Semos JS',
            name: "Janeeeeeeeeeee",
            start: 2017 
        },
        {
            id: 2,
            image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg',
            name: 'Pero',
            course: 'Semos HTML',
            start: 2018 
        },
        {
            id: 3,
            image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg',
            name: 'Sime',
            course: 'Semos CSS',
            start: 2019
        },
        {
            id: 4,
            image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg',
            name: 'Nekoj',
            course: 'Semos Neshto',
            start: 2019 
        },
        {
            id: 5,
            image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg',
            name: 'Klime',
            course: 'Semos Node',
            start: 2017
        }
    ]
}

class Main extends Component {

    changeHandler = (name) => {
        console.log("Me klikna " + name);
    }

    render() {
        const data = [...API_JSON.contacts];
        return (
            <div>
                {/* <Info name={data[0].name} image={data[0].image} course={data[0].course} start={data[0].start} />
                <Info name={data[1].name} image={data[1].image} course={data[1].course} start={data[1].start} />
                <Info name={data[2].name} image={data[2].image} course={data[2].course} start={data[2].start} /> */}
                
                {
                    data.map( (oneContact, index) => 
                        <Info 
                        key={index}
                        name={oneContact.name} 
                        image={oneContact.image} 
                        course={oneContact.course} 
                        start={oneContact.start}
                        click={this.changeHandler}
                        />
                        // <div> 
                        //     <img width="50" src={oneContact.image} />
                        //     <h3>{oneContact.name}</h3>
                        //     <p>Kurs: {oneContact.course}</p>
                        //     <p>Pocetok: {oneContact.start}</p>
                        //     <hr /> 
                        // </div>
                        
                        )
                }

            </div>
        );
    }

}

export default Main;
