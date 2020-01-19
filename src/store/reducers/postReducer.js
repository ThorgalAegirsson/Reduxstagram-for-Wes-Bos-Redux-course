import * as actionTypes from '../actions/actionTypes';

import posts from '../../data/posts';

const initialState = [...posts];


export default (state = initialState, action) => {
    console.log(state, action);
    return state;
}
