import React from 'react';
import Axios from 'axios';
import './App.css';
import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({players: res.data});
      console.log(this.state.players);
    })
  }

  render() {
    return(
      <div className='App'>
        <h1>Womens World Cup Players</h1>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;