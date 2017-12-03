import React, { Component } from 'react'
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import upperFormReducer from './redux/reducers/upperFormReducer.js';
import indicatorsReducer from './redux/reducers/indicatorsReducer.js';

import UpperForm from './components/upper-form/UpperForm.js';
import IndicatorsPanel from './components/indicators-panel/IndicatorsPanel.js';
import FillForm from './components/fill-form/FillForm.js';

import './App.css';

const Header = () => (
    <div className="header">
        <h1>Охуительный заголовок</h1>
        <p>Неебически красивое описание, и ещё Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi recusandae repellat tempora tempore? Consequuntur deleniti dignissimos eos error expedita illo in laborum, necessitatibus officiis, perferendis rerum soluta tempore voluptate voluptatem.</p>
    </div>
);

class App extends Component {
    render() {
        const store = createStore(combineReducers({upperFormReducer, indicatorsReducer}));
        return (
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <UpperForm />
                    <IndicatorsPanel />
                    <FillForm />
                </div>
            </Provider>
        );
    }
}

export default App;
