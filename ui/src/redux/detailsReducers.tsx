import { ACTIVATE_DETAILS, DEACTIVATE_DETAILS, DetailsState } from "./detailsTypes";



const initialState: DetailsState = {
    detailsActive: false
}


export const detailsReducer = (state = initialState, action: any): DetailsState => {
    switch (action.type) {
        case ACTIVATE_DETAILS:
            return {
                ...state,
                detailsActive: true,
            }
        case DEACTIVATE_DETAILS:
            return {
                ...state,
                detailsActive: false,
            }
        default:
            return state;
    }
};

export default detailsReducer;
