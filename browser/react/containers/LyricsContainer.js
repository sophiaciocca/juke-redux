import React, { Component } from 'react';
import store from '../store';
import { setLyrics } from '../action-creators/lyrics.js';
import axios from 'axios';
import Lyrics from '../components/Lyrics';

export default class LyricsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());

        this.handleArtistInput = this.handleArtistInput.bind(this);
        this.handleSongInput = this.handleSongInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleArtistInput(artist) {
        this.setState({ artistQuery: artist })
    }

    handleSongInput(song) {
        this.setState({ songQuery: song })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.artistQuery && this.state.songQuery) {
            store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
        }
    }

    componentDidMount() {

        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }


    render() {
        console.log("RENEDERRING")
        return (
            <div>
                <Lyrics
                    text={this.state.text}
                    setArtist={this.handleArtistInput}
                    setSong={this.handleSongInput}
                    artistQuery={this.state.artistQuery}
                    songQuery={this.state.songQuery}
                    handleSubmit={this.handleSubmit} />
            </div>
        )
    }





}
