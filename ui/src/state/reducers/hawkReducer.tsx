const hawkReducer = (state: any, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "CREATE":
            return {...state};
        case "UPDATE":

            break;
        case "DELETE":
            
            break;

        default:
            return state;
    }
}

export default hawkReducer;