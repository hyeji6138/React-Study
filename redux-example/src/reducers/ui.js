import * as types from '../actions/ActionTypes';

const initalState = {
    color : [255,255,255]
};

export default function ui(state = initalState, action){
    if(action.type === types.SET_COLOR){
        return {
            color : action.color
        };
    }else{
        return state;
    }
}