import upperFormReducer from './upperFormReducer.js';
import {upperFormActions, genders} from "../constants.js";
import moment from 'moment';

const initialState = {
    gender: genders.MALE,
    age: 0
};

describe('upper form reducer', () => {
    it('should set person\'s date of birth to 10.10.1991', () => {
        expect(upperFormReducer(initialState, {type: upperFormActions.SET_AGE, payload: moment([1991, 10, 10])})).toEqual({
            ...initialState,
            age: moment(Date.now()).diff(moment([1991, 10, 10]), 'days')
        });
    });

    it('should set age to 0 if selected day is after today', () => {
        expect(upperFormReducer(initialState, {type: upperFormActions.SET_AGE, payload: moment([2020, 1, 1])})).toEqual({
            ...initialState,
            age: 0
        });
    });

    it('should set person\'s gender to female', () => {
        expect(upperFormReducer(initialState, {type: upperFormActions.SET_GENDER, payload: genders.FEMALE})).toEqual({
            ...initialState,
            gender: genders.FEMALE
        });
    });

    it('should return the initial gender if action.payload is undefined', () => {
        expect(upperFormReducer(initialState, {type: upperFormActions.SET_GENDER, payload: undefined})).toEqual(initialState);
    });

    it('should return the initial gender if action.payload is not male or female', () => {
        expect(upperFormReducer(initialState, {type: upperFormActions.SET_GENDER, payload: 'ATTACK HELICOPTER'})).toEqual(initialState);
    });
});