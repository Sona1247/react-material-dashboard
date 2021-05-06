import {ALL_DATA} from "../actions/actionTypes";


const initialState={
   
};


const allDataReducer =(state=initialState,action)=>{
switch(action.type){
    case ALL_DATA:
        return{...state,
            data:action.data
        }
        default:return state
}
}

export default allDataReducer;