import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
// redux imports
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';

class ItemView extends Component {

    constructor(props) {
        super(props);
        // set Id here
        let id = parseInt(props.match.params.id);
        this.state = {
            ...props
        };

        // load item here
        this.reloadItem(id);
    }

    reloadItem(id) {
        var i = 0;
        // call redux action will change the id
        this.props.itemActions.fetchItem();
      // after async load 
      //this.setState({item:o});
    }

    render() {
        return (
            <div>
                Item Id:{this.props.item.id}
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

export default connect(mapStateToProps, mapDispatchToProps)(hot ? hot(module)(ItemView) : ItemView);