import React, { Component } from 'react';
import {Button, FormGroup, FormControl, Col, HelpBlock} from 'react-bootstrap';
import {connect} from 'react-redux';

import validate from '../../libs/validate.js';
import {uncheck} from "../../redux/actions.js";

import './FormField.css';

class FormField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.props.uncheck();
    }
    getDiseaseList(marker) {
        switch(marker) {
            case 'LOW':
                if(this.props.gender === 'MALE') {
                    return this.props.info.ifLow.filter(x => !x.includes('беременность')).join(', ');
                }
                return this.props.info.ifLow.join(', ');
            case 'HIGH':
                if(this.props.gender === 'MALE') {
                    return this.props.info.ifHigh.filter(x => !x.includes('беременность')).join(', ');
                }
                return this.props.info.ifHigh.join(', ');
            default:
                return 'Error!!!';
        }
    }
    getRes(res_marker) {
        switch(res_marker) {
            case 'OK':
                return (
                    <HelpBlock className="res-small ok-result">
                        <p>Показатель в норме!</p>
                    </HelpBlock>
                );
            case 'LOW':
                return (
                    <HelpBlock className="res-small not-ok-result">
                        <p>Слишком низкий показатель!</p>
                        <p><p>Вполне возможно, у вас: {this.getDiseaseList('LOW')}</p></p>
                    </HelpBlock>
                );
            case 'HIGH':
                return (
                    <HelpBlock className="res-small not-ok-result">
                        <p>Слишком высокий показатель!</p>
                        <p>Вполне возможно, у вас: {this.getDiseaseList('HIGH')}</p>
                    </HelpBlock>
                );
            case 'EMPTY':
                return (
                    <HelpBlock className="res-small not-ok-result">
                        <p>Пожалуйста, заполните поле!</p>
                    </HelpBlock>
                );
            default:
                return (
                    <HelpBlock className="res-small not-ok-result">
                        <p>Ошибка...</p>
                    </HelpBlock>
                );
        }
    }
    render() {
        const results_marker = validate(this.state.value, this.props.info.lower, this.props.info.higher, this.props.age, this.props.gender);
        const results = this.props.validate ?
            (
                <div className="results">
                    {this.getRes(results_marker)}
                </div>
            ) : null;
        return(
            <div className="form-item">
                <FormGroup>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        {this.props.info.title}
                    </Col>
                    <Col xs={5} sm={5} md={5} lg={5}>
                        <FormControl
                            className="input-field"
                            type="number"
                            value={this.state.value}
                            placeholder="Введите данные"
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <Button onClick={this.props.close} className="close-button">x</Button>
                    </Col>
                </FormGroup>
                {results}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        validate: state.check,
        gender: state.gender,
        age: state.age
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        uncheck: () => dispatch(uncheck())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormField);