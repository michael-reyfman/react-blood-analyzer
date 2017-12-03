import {upperFormActions, genders} from "../constants.js";
import moment from 'moment';

const initialState = {
    gender: genders.MALE,
    age: 0
};

const upperFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case upperFormActions.SET_AGE:
            const newAge = moment(Date.now()).diff(action.payload, 'days');
            return {
                ...state,
                age: newAge >= 0 ? newAge : 0
            };

        case upperFormActions.SET_GENDER:
            const newGender = (action.payload === genders.MALE || action.payload === genders.FEMALE)
                ? action.payload : state.gender;
            return {
                ...state,
                gender: newGender
            };
        default:
            return state;
    }
};

export default upperFormReducer;