
let initialState =
    {
        name : '',
        bad_name : true,
        elem : [],
        flag : false,
    };

export default function addElement(state=initialState, action){

    switch (action.type) {
        case 'ADD_ELEM':
            return {
                elem : [ ...action.payload],
                flag : true,
                bad_name : false
            };
        case 'ADD_NAME':
            return {
                name : action.payload
        };
        case 'BAD_NAME':
            return {
                bad_name : true
        };
        default:
            return state;
    }
}
