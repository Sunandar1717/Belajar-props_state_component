import React from "react";
class Greetings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value,
        };
    }


Tick(){
    this.setState ({value : this.state.value + 1})
}

componentDidMount(){
    setTimeout(()=> this.Tick(), 1000);
}

  render() {
    const person = this.props.person;
    return (
      <div>
        <h2> hello {person.name}</h2>
        <h2> nilai saat ini {this.state.value}</h2>

        <button onClick= {()=> this.Tick()} >
            Tambah Data
        </button>
      </div>
    );
  }
}

export default Greetings;
