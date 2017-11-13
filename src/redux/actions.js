import {indicatorActions, CHECK_RESULTS, SET_AGE, SET_GENDER, UNCHECK} from './constants.js';

export const indicatorPanelActions = {
    add_rbc: () => ({type: indicatorActions.ADD_RBC}),
    rem_rbc: () => ({type: indicatorActions.REM_RBC}),
    add_wbc: () => ({type: indicatorActions.ADD_WBC}),
    rem_wbc: () => ({type: indicatorActions.REM_WBC}),
    add_rtc: () => ({type: indicatorActions.ADD_RTC}),
    rem_rtc: () => ({type: indicatorActions.REM_RTC}),
    add_bas: () => ({type: indicatorActions.ADD_BAS}),
    rem_bas: () => ({type: indicatorActions.REM_BAS}),
    add_lym: () => ({type: indicatorActions.ADD_LYM}),
    rem_lym: () => ({type: indicatorActions.REM_LYM}),
    add_mon: () => ({type: indicatorActions.ADD_MON}),
    rem_mon: () => ({type: indicatorActions.REM_MON}),
    add_eos: () => ({type: indicatorActions.ADD_EOS}),
    rem_eos: () => ({type: indicatorActions.REM_EOS}),
    add_esr: () => ({type: indicatorActions.ADD_ESR}),
    rem_esr: () => ({type: indicatorActions.REM_ESR}),
    add_plt: () => ({type: indicatorActions.ADD_PLT}),
    rem_plt: () => ({type: indicatorActions.REM_PLT}),
    add_hb:  () => ({type: indicatorActions.ADD_HB}),
    rem_hb:  () => ({type: indicatorActions.REM_HB}),
    add_clr: () => ({type: indicatorActions.ADD_COLOR}),
    rem_clr: () => ({type: indicatorActions.REM_COLOR}),
    add_stc: () => ({type: indicatorActions.ADD_STICKS}),
    rem_stc: () => ({type: indicatorActions.REM_STICKS}),
    add_seg: () => ({type: indicatorActions.ADD_SEGM}),
    rem_seg: () => ({type: indicatorActions.REM_SEGM})
};

export const upperPanelActions = {
    set_age:    (age) =>    ({type: SET_AGE, payload: age}),
    set_gender: (gender) => ({type: SET_GENDER, payload: gender})
};

export const check   = () => ({type: CHECK_RESULTS});
export const uncheck = () => ({type: UNCHECK});