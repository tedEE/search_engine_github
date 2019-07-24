

let initialState =
    {
        name : false,
        elem : false
    };


export default function addElement(state=initialState, action){

    switch (action.type) {
        case 'ADD_ELEM':
            return {
                ...state,
                elem : action.payload
            };
        case 'ADD_NAME':
            return {
                ...state,
                name : action.payload
        };
        default:
            return state;
    }
}
