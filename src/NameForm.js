import React from 'react';
import './index.css';
import Game from './Game';


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Player1: '',
        Player2: '',
        gameRender: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
  
    handleChange(event) {
      let name = event.target.name;
      let val = event.target.value;
  
  
  
  
      this.setState({ [name]: val });
    }
  
  
  
    handleSubmit(event) {
  
      let Player1 = this.state.Player1;
      let Player2 = this.state.Player2;
  
      if (!Player1 || !Player2) {
  
        alert("Please Fill Out Both Text Fields");
  
      } else {
        
        this.setState({ gameRender: true})
  
      }
      event.preventDefault();
    }
  
    render() {
  
      if (this.state.gameRender){
        return <Game 
        Player1= {this.state.Player1}
        Player2= {this.state.Player2} />
      } 
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Player 1 [X] :
            <input type="text" name="Player1" value={this.state.Player1} onChange={this.handleChange} />
          </label>
  
          <label>
            Player 2 [O] :
            <input type="text" name="Player2" value={this.state.Player2} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;