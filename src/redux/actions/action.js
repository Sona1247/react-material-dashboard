import {ALL_DATA,SIDEBAR_LINK} from "./actionTypes";

export const changeLink=(key)=>{
    return{type: SIDEBAR_LINK,key}
}

export const addData=(data)=>{
    return{ type:ALL_DATA, data}
}