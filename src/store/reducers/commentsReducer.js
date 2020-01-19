import * as actionTypes from '../actions/actionTypes';

import comments from '../../data/comments';

const initialState = {
    ...comments
};


export default (state = initialState, action) => {
    console.log(state, action);
    return state;
}
