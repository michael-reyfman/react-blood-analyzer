import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from 'react-bootstrap';

import FormField from "../form-field/FormField";
import './FillForm.css';

import {indicatorPanelActions} from '../../redux/actions.js';
import {check} from "../../redux/actions";

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
        indicators: state.indicatorsToShow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rem_rbc: () => dispatch(indicatorPanelActions.rem_rbc()),
        rem_wbc: () => dispatch(indicatorPanelActions.rem_wbc()),
        rem_rtc: () => dispatch(indicatorPanelActions.rem_rtc()),
        rem_bas: () => dispatch(indicatorPanelActions.rem_bas()),
        rem_lym: () => dispatch(indicatorPanelActions.rem_lym()),
        rem_mon: () => dispatch(indicatorPanelActions.rem_mon()),
        rem_eos: () => dispatch(indicatorPanelActions.rem_eos()),
        rem_esr: () => dispatch(indicatorPanelActions.rem_esr()),
        rem_plt: () => dispatch(indicatorPanelActions.rem_plt()),
        rem_hb:  () => dispatch(indicatorPanelActions.rem_hb()),
        rem_clr: () => dispatch(indicatorPanelActions.rem_clr()),
        rem_stc: () => dispatch(indicatorPanelActions.rem_stc()),
        rem_seg: () => dispatch(indicatorPanelActions.rem_seg()),
        check:   () => dispatch(check())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FillForm);