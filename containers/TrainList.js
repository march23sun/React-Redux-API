import React, {Component} from 'react';
import {connect} from 'react-redux';

class TrainList extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		const {info,trainList} = this.props;

		return (

<div>
	<hr/>
			<div>數量:{info.count}</div>

			<div>
				{trainList.map((item, index) => (
					<div>
						<p>
							{item.Destination} - {item.Station}

						</p>
						<p>
							{item.UpdateTime}
						</p>
					</div>

				))

				}

			</div>
		</div>
		);
	}

}

const mapStateToProps = (state) => {

	return {
		info:state.TrainListReducers.info,
		trainList:state.TrainListReducers.trainList
	}
};

export default connect(mapStateToProps)(TrainList);
