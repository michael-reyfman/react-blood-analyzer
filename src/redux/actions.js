import {indicatorsActions, upperFormActions, resultsActions} from './constants.js';

export const indicatorsPanelActions = {
    add_rbc: () => ({type: indicatorsActions.ADD_RBC}),
    rem_rbc: () => ({type: indicatorsActions.REM_RBC}),
    add_wbc: () => ({type: indicatorsActions.ADD_WBC}),
    rem_wbc: () => ({type: indicatorsActions.REM_WBC}),
    add_rtc: () => ({type: indicatorsActions.ADD_RTC}),
    rem_rtc: () => ({type: indicatorsActions.REM_RTC}),
    add_bas: () => ({type: indicatorsActions.ADD_BAS}),
    rem_bas: () => ({type: indicatorsActions.REM_BAS}),
    add_lym: () => ({type: indicatorsActions.ADD_LYM}),
    rem_lym: () => ({type: indicatorsActions.REM_LYM}),
    add_mon: () => ({type: indicatorsActions.ADD_MON}),
    rem_mon: () => ({type: indicatorsActions.REM_MON}),
    add_eos: () => ({type: indicatorsActions.ADD_EOS}),
    rem_eos: () => ({type: indicatorsActions.REM_EOS}),
    add_esr: () => ({type: indicatorsActions.ADD_ESR}),
    rem_esr: () => ({type: indicatorsActions.REM_ESR}),
    add_plt: () => ({type: indicatorsActions.ADD_PLT}),
    rem_plt: () => ({type: indicatorsActions.REM_PLT}),
    add_hb:  () => ({type: indicatorsActions.ADD_HB}),
    rem_hb:  () => ({type: indicatorsActions.REM_HB}),
    add_clr: () => ({type: indicatorsActions.ADD_COLOR}),
    rem_clr: () => ({type: indicatorsActions.REM_COLOR}),
    add_stc: () => ({type: indicatorsActions.ADD_STICKS}),
    rem_stc: () => ({type: indicatorsActions.REM_STICKS}),
    add_seg: () => ({type: indicatorsActions.ADD_SEGM}),
    rem_seg: () => ({type: indicatorsActions.REM_SEGM})
};

export const upperPanelActions = {
    set_age:    (age) =>    ({type: upperFormActions.SET_AGE, payload: age}),
    set_gender: (gender) => ({type: upperFormActions.SET_GENDER, payload: gender})
};

export const checkButtonActions = {
    check:   () => ({type: resultsActions.CHECK_RESULTS}),
    uncheck: () => ({type: resultsActions.UNCHECK})
};
