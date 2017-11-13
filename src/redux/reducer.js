import db from "../db/db.js";
import {indicatorActions, CHECK_RESULTS, genders, SET_GENDER, SET_AGE, UNCHECK} from "./constants.js";

import moment from 'moment';

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
    diseasesFound: [],
    check: false,
    age: 0,
    gender: genders.MALE
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case indicatorActions.ADD_BAS:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.BAS),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    BAS: false
                },
                check: false
            };
        case indicatorActions.REM_BAS:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "bas"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    BAS: true
                }
            };

        case indicatorActions.ADD_HB:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.hemoglobin),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    hemoglobin: false
                },
                check: false
            };
        case indicatorActions.REM_HB:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "hb"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    hemoglobin: true
                }
            };

        case indicatorActions.ADD_RBC:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.RBC),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    RBC: false
                },
                check: false
            };
        case indicatorActions.REM_RBC:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "rbc"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    RBC: true
                }
            };

        case indicatorActions.ADD_WBC:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.WBC),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    WBC: false
                },
                check: false
            };
        case indicatorActions.REM_WBC:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "wbc"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    WBC: true
                }
            };

        case indicatorActions.ADD_COLOR:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.color),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    color: false
                },
                check: false
            };
        case indicatorActions.REM_COLOR:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "color"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    color: true
                }
            };

        case indicatorActions.ADD_EOS:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.EOS),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    EOS: false
                },
                check: false
            };
        case indicatorActions.REM_EOS:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "eos"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    EOS: true
                }
            };

        case indicatorActions.ADD_LYM:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.LYM),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    LYM: false
                },
                check: false
            };
        case indicatorActions.REM_LYM:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "lym"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    LYM: true
                }
            };

        case indicatorActions.ADD_MON:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.MON),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    MON: false
                },
                check: false
            };
        case indicatorActions.REM_MON:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "mon"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    MON: true
                }
            };

        case indicatorActions.ADD_ESR:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.ESR),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    ESR: false
                },
                check: false
            };
        case indicatorActions.REM_ESR:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "esr"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    ESR: true
                }
            };

        case indicatorActions.ADD_PLT:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.PLT),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    PLT: false
                },
                check: false
            };
        case indicatorActions.REM_PLT:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "plt"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    PLT: true
                }
            };

        case indicatorActions.ADD_RTC:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.RTC),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    RTC: false
                },
                check: false
            };
        case indicatorActions.REM_RTC:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "rtc"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    RTC: true
                }
            };

        case indicatorActions.ADD_STICKS:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.sticks),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    sticks: false
                },
                check: false
            };
        case indicatorActions.REM_STICKS:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "stc"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    sticks: true
                }
            };

        case indicatorActions.ADD_SEGM:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.concat(db.bloodParams.segments),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    segments: false
                },
                check: false
            };
        case indicatorActions.REM_SEGM:
            return {
                ...state,
                indicatorsToShow: state.indicatorsToShow.filter(it => it.id !== "seg"),
                buttonsEnabled: {
                    ...state.buttonsEnabled,
                    segments: true
                }
            };

        case SET_AGE:
            return {
                ...state,
                age: moment(Date.now()).diff(action.payload, 'days')
            };

        case SET_GENDER:
            return {
                ...state,
                gender: action.payload
            };

        case CHECK_RESULTS:
            return {...state, check: !state.check};

        case UNCHECK:
            return {...state, check: false};

        default:
            return state;
    }
};

export default mainReducer;