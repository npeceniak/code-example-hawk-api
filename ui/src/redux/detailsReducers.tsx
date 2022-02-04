import { ACTIVATE_DETAILS, DEACTIVATE_DETAILS, SET_DETAILS_ID, DetailsState, SET_HAWK_LIST } from "./detailsTypes";

const initialState: DetailsState = {
    detailsActive: false,
    detailsId: null,
    hawkList: []
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
        case SET_DETAILS_ID:
            return {
                ...state,
                detailsId: action.payload.id,
            }
        case SET_HAWK_LIST:
            return {
                ...state,
                hawkList: action.payload.hawkList,
            }
        default:
            return state;
    }
};

export default detailsReducer;
