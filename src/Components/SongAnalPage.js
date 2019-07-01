import React, { Component } from 'react'
import './SongAnalPage.css'

class SongAnalPage extends Component {
    state = {}
    render() {
        return (
            <div className="song-page-content">
                <div className="upper-bar">
                    <div>
                        <input></input>
                        <span><button>Search</button></span>
                    </div>
                </div>
                <div className="song-content">
                    <div className="song-info"></div>
                    <div className="song-features"></div>
                </div>
            </div>);
    }
}

export default SongAnalPage;