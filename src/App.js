import React, { Component } from 'react';
import Title from './components/Title';
import Lorem from './components/Lorem';
import {hot} from 'react-hot-loader';

export class App extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Hello World App</h1>
                <Title />
                <Lorem />
            </div>
        );
    }
}


export default hot ? hot(module)(App) : App;