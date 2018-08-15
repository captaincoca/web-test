import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
// redux imports
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';

class Aside extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    change(event) {
        this.props.itemActions.fetchItem();
    }

    render() {
        return (
            <div>
                <button onClick={this.change.bind(this)}>Change</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      item: state.item
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      itemActions: bindActionCreators(itemActions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(hot ? hot(module)(Aside) : Aside);