import React, { Component } from 'react';

class App extends Component {

  // constructor() {
  //   super();

  //   this.handleChangeName = this.handleChangeName.bind(this); 
  // }

  state = {
    animals: [
      {
        name: 'Grizli',
        type: 'Bear',
        image: ''
      },
      {
        name: 'Lesi',
        type: 'Dog',
        image: ''
      },
      {
        name: 'Ghost',
        type: 'Wolf',
        image: ''
      },
      {
        name: 'Suzana',
        type: 'Cow',
        image: ''
      },
    ],
    someExtraVariable: 77,
    isClicked: false
  }

  handleChangeName = () => {
    const newAnimals = [...this.state.animals];
    if (this.state.isClicked === false) {
      newAnimals[0].name = "Novo ime";
    } else {
      newAnimals[0].name = "Grizli";
    }
    this.setState({ animals: newAnimals, someExtraVariable: 66, isClicked: !this.state.isClicked });
  }

  render() {
    console.log("render method called")
    return (
      <>
        {
          this.state.animals.map(animal => <div key={animal.name}>
            <p>{animal.name}</p>
            <p>{animal.type}</p>
            <hr />
          </div>
          )

        }

        <p>{this.state.someExtraVariable}</p>
        <button onClick={this.handleChangeName}>CHANGE Bear Name</button>

      </>
    );
  }
}

export default App;
