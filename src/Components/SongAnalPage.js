import React, { Component } from 'react'
import './SongAnalPage.css'

class SongAnalPage extends Component {
    state = {
        audioData: [],
        audioFeatures: []
    }

    getSongFeatures = () => {
        let accessToken = "BQB5hR_-J_V1ArmGraI4Yi4a2qAg8XoqKyJDiHtaYp7ZFgee3EPz944vZrSY8PNJLvxdS_XFeMCzhOaC7J4j3iQKCiz3Lk5wo0gunsjCKRWUp2OMa04kuTYm8STqBdRT8aT9ldCdXWmZI_g"
        let options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        }
        fetch("https://api.spotify.com/v1/audio-features/6EsBn1Md8C5YdbCzvwvZq8", options)
            .then(data => { return data.json() })
            .then(res => {
                this.setState({ audioFeatures: res })
            })
    }
    getSongInfo = () => {
        let accessToken = "BQB5hR_-J_V1ArmGraI4Yi4a2qAg8XoqKyJDiHtaYp7ZFgee3EPz944vZrSY8PNJLvxdS_XFeMCzhOaC7J4j3iQKCiz3Lk5wo0gunsjCKRWUp2OMa04kuTYm8STqBdRT8aT9ldCdXWmZI_g"
        let options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        }

        fetch("https://api.spotify.com/v1/tracks/6EsBn1Md8C5YdbCzvwvZq8", options)
            .then(data => { return data.json() })
            .then(res => {
                this.setState({ audioData: res })
                console.log(res)
            })
    }
    componentDidMount() {
        this.getSongInfo()
        this.getSongFeatures()
        console.log(this.state.audioData)
        console.log(this.state.audioFeatures)
    }
    render() {
        return (
            <div className="song-page-content">
                <div className="upper-bar">
                    <div>
                        <input className='song-input anal' placeholder="Song title..."></input>
                        <button className='submit-btn anal'>Search</button>
                    </div>
                </div>
                <div className="song-content">
                    <div className="song-info">
                        <p>{this.state.audioData.name}</p>
                        <img ></img>
                    </div>
                    <div className="song-features">
                        <div>
                            <div>
                                <p>Acousticness:</p>
                                <p>Danceability:</p>
                                <p>Energy:</p>
                                <p>Instrumentalness:</p>
                                <p>Liveness:</p>
                            </div>
                            <div>
                                <p>{this.state.audioFeatures.acousticness}</p>
                                <p>{this.state.audioFeatures.danceability}</p>
                                <p>{this.state.audioFeatures.energy}</p>
                                <p>{this.state.audioFeatures.instrumentalness}</p>
                                <p>{this.state.audioFeatures.liveness}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default SongAnalPage;