import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

class ItemView extends Component {

    constructor(props) {
        super(props);
        // set Id here
        let id = parseInt(props.match.params.id);
        this.state = {
            ...props,
            item: [],
        };

        // load item here
        this.reloadItem(id);
    }

    reloadItem(id) {
        var i = 0;
      // after async load 
      //this.setState({item:o});
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default hot ? hot(module)(ItemView) : ItemView;