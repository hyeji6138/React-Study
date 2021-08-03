import * as types from '../actions/ActionTypes';

const initalState = {
    number : 0
};

export default function counter(state = initalState, action){
    /*if(typeof state == 'undefined'){
        return initalState;
    }*/
    switch(action.type){
        case types.INCREMENT:
            return {number : state.number + 1}; //{ ...state, number : state.number + 1}
        case types.DECREMENT:
            return {number : state.number - 1};
        default : 
            return state;
    }
}