import * as actionTypes from '../actions/actionTypes';

import posts from '../../data/posts';

const initialState = [...posts];


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_LIKES:
            const index = action.index;
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    likes: state[index].likes + 1
                },
                ...state.slice(index + 1)

            ];
        default: return state;
    }
}
