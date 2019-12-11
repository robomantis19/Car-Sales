

export const setPrice = () => { 
    return { type: "UPDATE_ADDITIONAL_PRICE"};
}

export const setFeature = (input) => { 
    return { type: "UPDATE_FEATURE", payload: input};
}