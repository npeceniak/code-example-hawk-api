import { ACTIVATE_DETAILS, DEACTIVATE_DETAILS } from "./detailsTypes";

export const activateDetails = () => {
    return {
        type: ACTIVATE_DETAILS
    };
}

  
export const deactivateDetails = () => {
    return {
        type: DEACTIVATE_DETAILS
    };
}