import indicatorsReducer from './indicatorsReducer.js';
import {resultsActions} from "../constants.js";

const initialState = {
    indicatorsToShow: [],
    buttonsEnabled: {
        hemoglobin: true,
        WBC: true,
        RBC: true,
        color: true,
        EOS: true,
        LYM: true,
        MON: true,
        ESR: true,
        PLT: true,
        RTC: true,
        BAS: true,
        sticks: true,
        segments: true
    },
    check: false
};

describe('results reducer', () => {
    it('should provide detailed information', () => {
        expect(indicatorsReducer(initialState, {type: resultsActions.CHECK_RESULTS})).toEqual({
            ...initialState,
            check: true
        });
    });

    it('should hide the results', () => {
        expect(indicatorsReducer(initialState, {type: resultsActions.UNCHECK})).toEqual({
            ...initialState,
            check: false
        });
    });
});