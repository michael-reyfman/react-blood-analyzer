import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from 'react-bootstrap';

import FormField from "../form-field/FormField";
import './FillForm.css';

import {indicatorsPanelActions, checkButtonActions} from '../../redux/actions.js';

class FillForm extends Component {
    getDeleteFunc(id) {
        switch(id) {
            case "hb":
                return this.props.rem_hb;
            case "rbc":
                return this.props.rem_rbc;
            case "wbc":
                return this.props.rem_wbc;
            case "color":
                return this.props.rem_clr;
            case "esr":
                return this.props.rem_esr;
            case "bas":
                return this.props.rem_bas;
            case "eos":
                return this.props.rem_eos;
            case "rtc":
                return this.props.rem_rtc;
            case "lym":
                return this.props.rem_lym;
            case "mon":
                return this.props.rem_mon;
            case "plt":
                return this.props.rem_plt;
            case "stc":
                return this.props.rem_stc;
            case "seg":
                return this.props.rem_seg;
            default:
                return () => console.error("ERROR!!!");
        }
    }
    render() {
        const emptyForm = this.props.indicators.length === 0;
        const fieldsCollection = emptyForm ? (
            <p className="empty-form">Форма пока пуста...</p>
        ) : (
            this.props.indicators.map(item => {
                return <FormField info={item} key={item.id} close={this.getDeleteFunc(item.id)}/>
            })
        );
        return(
            <div className="fill-form">
                <Form horizontal>
                    {fieldsCollection}
                </Form>
                <Button className="check-button" bsStyle="success" onClick={this.props.check} disabled={emptyForm}>Проверить результат!</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        indicators: state.indicatorsReducer.indicatorsToShow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rem_rbc: () => dispatch(indicatorsPanelActions.rem_rbc()),
        rem_wbc: () => dispatch(indicatorsPanelActions.rem_wbc()),
        rem_rtc: () => dispatch(indicatorsPanelActions.rem_rtc()),
        rem_bas: () => dispatch(indicatorsPanelActions.rem_bas()),
        rem_lym: () => dispatch(indicatorsPanelActions.rem_lym()),
        rem_mon: () => dispatch(indicatorsPanelActions.rem_mon()),
        rem_eos: () => dispatch(indicatorsPanelActions.rem_eos()),
        rem_esr: () => dispatch(indicatorsPanelActions.rem_esr()),
        rem_plt: () => dispatch(indicatorsPanelActions.rem_plt()),
        rem_hb:  () => dispatch(indicatorsPanelActions.rem_hb()),
        rem_clr: () => dispatch(indicatorsPanelActions.rem_clr()),
        rem_stc: () => dispatch(indicatorsPanelActions.rem_stc()),
        rem_seg: () => dispatch(indicatorsPanelActions.rem_seg()),
        check:   () => dispatch(checkButtonActions.check())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FillForm);