import React, {Component} from 'react';
import store from '../store';

export default class LyricsContainer extends Component {

    constructor (props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        //subscribe to store

        //call set state with store's state when store updates
    }




}

