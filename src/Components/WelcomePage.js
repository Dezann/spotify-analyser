import React, { Component } from 'react'
import './WelcomePage.css'

class WelcomePage extends Component {
    state = {}
    render() {
        return (
            <div className="welcome-page-content">
                <p>Search for a song from spotify</p>
                <input className="song-input" placeholder="Song title..."></input>
            </div>);
    }
}

export default WelcomePage;