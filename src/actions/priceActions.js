

// export const setPrice = () => { 
//     return { type: "UPDATE_ADDITIONAL_PRICE"};
// }
export const UPDATE_FEATURES = 'UPDATE_FEATURES';
export const REMOVE_FEATURES = "REMOVE_FEATURES"; 

export const setFeature = (input) => { 
    return { type: UPDATE_FEATURES, payload: input};
}

export const setRemove = (output) =>  { 
    return {type: REMOVE_FEATURES, payload: output}
}