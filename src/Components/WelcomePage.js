import React, { Component } from 'react'
import './WelcomePage.css'

class WelcomePage extends Component {
    state = {}
    render() {
        return (
            <div className="welcome-page-content">

                <p>Search for a song from Spotify</p>
                <input type="text" className="song-input" placeholder="Song title..."></input>
                <button className="submit-btn" type="submit" onClick={this.props.submitSong}>Search</button>

            </div>);
    }
}

export default WelcomePage;