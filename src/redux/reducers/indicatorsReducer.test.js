import indicatorsReducer from './indicatorsReducer.js';
import {indicatorsActions} from "../constants.js";

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
    }
};

const test2InitialState = {
    ...initialState,
    buttonsEnabled: {...initialState.buttonsEnabled, hemoglobin: false},
    indicatorsToShow: [{
        id:     "hb",
        title:  "Гемоглобин, г/л",
        lower:  [180, 115, 110, 110, 110, 110, 115, 130, 120],
        higher: [240, 175, 140, 135, 140, 145, 150, 160, 140],
        ifLow:  ["анемия"],
        ifHigh: ["пребывание на больших высотах", "чрезмерная физическая нагрузка", "обезвоживание", "сгущениие крови", "чрезмерное курение"]
    }]
};

describe('indicators reducer', () => {
    it('should add hemoglobin field', () => {
        expect(indicatorsReducer(initialState, {type: indicatorsActions.ADD_HB})).toEqual({...test2InitialState, check: false});
    });

    it('should add one more red blood cells field', () => {
        expect(indicatorsReducer(test2InitialState, {type: indicatorsActions.ADD_RBC})).toEqual({
            ...test2InitialState,
            indicatorsToShow: [...test2InitialState.indicatorsToShow, {
                id:     "rbc",
                title:  "Эритроциты, 10^12",
                lower:  [4.3, 3.8, 3.5, 3.6, 3.5, 3.5, 3.6, 4.0, 3.7],
                higher: [7.6, 5.6, 4.8, 4.9, 4.5, 4.7, 5.1, 5.1, 4.7],
                ifLow:  ["кровопотеря", "анемия", "беременность", "снижение интенсивности образования эритроцитов в костном мозге", "ускоренное разрушение эритроцитов", "гипергидратация"],
                ifHigh: ["новообразования", "поликистоз почек", "водянка почечных лоханок", "влияние кортикостероидов", "синдром Кушинга", "лечение стероидами"],
            }],
            buttonsEnabled: {
                ...test2InitialState.buttonsEnabled,
                RBC: false
            },
            check: false
        });
    });
});