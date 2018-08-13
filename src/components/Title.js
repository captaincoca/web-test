import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

class Title extends Component {

    componentDidMount() {
        var i = 0;
    }

    render() {
        return (
            <h1>Hello World Title</h1>
        );
    }
}

export default hot ? hot(module)(Title) : Title;