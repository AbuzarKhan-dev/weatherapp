import { GET_DATA } from "./Action";

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
} 

