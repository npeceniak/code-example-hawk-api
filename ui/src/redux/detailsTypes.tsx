export const ACTIVATE_DETAILS = 'ACTIVATE_DETAILS';
export const DEACTIVATE_DETAILS = 'DEACTIVATE_DETAILS';

export const SET_DETAILS_ID = 'SET_DETAILS_ID';
export const SET_HAWK_LIST = 'SET_HAWK_LIST';

export type DetailsState = {
    detailsActive: boolean,
    detailsId: number | null,
    hawkList: IHawk[]
}

enum gender {
    male = "MALE",
    female = "FEMALE"
};

enum size {
    small = "SMALL",
    medium = "MEDIUM",
    large = "LARGE"
};

interface IHawk {
    behaviorDescription: string,
    colorDescription: string,
    gender: gender,
    habitatDescription: string,
    id: number,
    lengthBegin: number,
    lengthEnd: number,
    name: string,
    size: size,
    weightBegin: number,
    weightEnd: number,
    wingspanBegin: number,
    wingspanEnd: number
};
