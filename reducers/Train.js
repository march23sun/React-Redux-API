/**
 * Created by user on 2017/1/10.
 */
const initialState = {

	info: {count: 0}, trainList: []}
;
const TrainList = (state = initialState, action) => {
	switch (action.type) {

		case 'RECEIVE_TRAINLIST':
			return Object.assign({}, state, {info: action.data.result, trainList: action.data.result.results})
				;
		default:
			return state;
	}
};

export default TrainList;
