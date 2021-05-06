import {ALL_DATA} from "../actions/actionTypes";


const initialState={
   data:undefined
};


const allDataReducer =(state=initialState,action)=>{
switch(action.type){
    case ALL_DATA:
        return{...state,
            data:action.data
        }
        default:
            return state;
}
}

export default allDataReducer;