import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, ControlLabel, FormControl, Radio} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'moment/locale/ru';

import {upperPanelActions} from "../../redux/actions.js";
import 'react-day-picker/lib/style.css';
import './UpperForm.css';


class UpperForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: undefined
        };
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
    }
    handleDayChange(selectedDay) {
        this.setState({
            currentDay: selectedDay
        });
        this.props.set_age(selectedDay)
    }
    handleGenderChange(e) {
        this.props.set_gender(e.target.value === 'male' ? 'MALE' : 'FEMALE');
    }
    render() {
        const value = this.state.currentDay ? this.state.currentDay.format('DD.MM.YYYY') : '';
        return(
            <div className="upper-form">
                <h3>Укажите ваш пол и возраст</h3>
                <Form inline>
                    <FormGroup className="upper-form-field">
                        <ControlLabel className="lbl">Дата рождения:</ControlLabel>
                        <DayPickerInput
                            name="age"
                            placeholder="пример: 01.01.2000"
                            format="DD.MM.YYYY"
                            value={value}
                            onDayChange={this.handleDayChange}
                            dayPickerProps={{
                                locale: 'ru',
                                firstDayOfWeek: 1
                            }}
                        />
                    </FormGroup>
                    <ControlLabel className="lbl">Пол (биологический):</ControlLabel>
                    <FormGroup className="upper-form-field">
                        <Radio name="radioGroup" value="male" defaultChecked onClick={this.handleGenderChange} inline>
                            Мужской
                        </Radio>
                        {' '}
                        <Radio name="radioGroup" value="female" onClick={this.handleGenderChange} inline>
                            Женский
                        </Radio>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        gender: state.gender
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        set_age:    (age) => dispatch(upperPanelActions.set_age(age)),
        set_gender: (gender) => dispatch(upperPanelActions.set_gender(gender))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpperForm);