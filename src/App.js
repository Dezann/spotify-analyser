import React, { Component } from 'react'
import WelcomePage from './Components/WelcomePage'
import SongAnalPage from './Components/SongAnalPage'
import './App.css';

class App extends Component {
  state = {
    isBtnClicked: false,
  }

  submitSong = () => {
    this.setState({ isBtnClicked: true })
  }

  render() {
    return (
      !this.state.isBtnClicked ? <WelcomePage submitSong={this.submitSong} /> : <SongAnalPage />
    );
  }
}

export default App;
