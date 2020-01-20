import * as actionTypes from '../actions/actionTypes';

import comments from '../../data/comments';

const initialState = {
    ...comments
};

const postComments = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case actionTypes.REMOVE_COMMENT:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

export default (state = initialState, action) => {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}
