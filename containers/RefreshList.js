import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

class RefreshList extends Component {

	constructor(props) {
		super(props);
	}


    render() {
        const {actions} = this.props;

        return (
					<button onClick={actions.fetchTrainList}>取得資料</button>
        );
    }

}


const mapDispatchToProps  = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
};
export default connect(null,mapDispatchToProps)(RefreshList);
