import React, { Component } from 'react';
import store from '../store';
import {setLyrics} from '../action-creators/lyrics.js';
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
        console.log(this.state);
         axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        .then(response => {
            console.log(response, 'response')
          const setLyricsAction = setLyrics(response.data.lyric);
          store.dispatch(setLyricsAction);           
        })

    }

  


    componentDidMount() {
        //subscribe to store

        //call set state with store's state when store updates

        this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }


    render() {
        console.log("RENEDERRING")
        return 
            <Lyrics
                text={this.state.text}
                setArtist={this.handleArtistInput}
                setSong={this.handleSongInput}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit} />)
        
    }





}

