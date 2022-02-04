import {
    ACTIVATE_DETAILS,
    DEACTIVATE_DETAILS,
    SET_DETAILS_ID,
    SET_HAWK_LIST
} from "./detailsTypes";

export const activateDetails = () => {
    return {
        type: ACTIVATE_DETAILS
    };
};

export const deactivateDetails = () => {
    return {
        type: DEACTIVATE_DETAILS
    };
};

export const setDetails = (id: number | null) => {
    return {
        type: SET_DETAILS_ID,
        payload: { id }
    };
};

export const setHawkList = (hawkList: any[]) => {
    return {
        type: SET_HAWK_LIST,
        payload: { hawkList }
    };
};