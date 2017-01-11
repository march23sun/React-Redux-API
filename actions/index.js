export const UPDATE_LIST = 'UPDATE_LIST';
export const RECEIVE_TRAINLIST = 'RECEIVE_TRAINLIST';
import {QueryMRT} from '../api';


export const fetchTrainList = () => {

	return (dispatch)=> {QueryMRT()
		.catch(() => console.log('catch'))
		.then((data) => dispatch(receiveTrainList(data)));}
};


export const receiveTrainList = (data) => ({
	type: RECEIVE_TRAINLIST,
	data
});
