import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import {indicatorsPanelActions} from '../../redux/actions.js';

import './IndicatorsPanel.css';

class IndicatorsPanel extends Component {
    render() {
        return(
            <div>
                <h3>Выберите, какие поля есть в вашем анализе крови:</h3>
                <div className="indicators-panel">
                    <Button
                        className="indicator"
                        disabled={!this.props.btn.RBC}
                        onClick={this.props.add_rbc.bind(this)}
                    >
                        Эритроциты
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.hemoglobin}
                        onClick={this.props.add_hb.bind(this)}
                    >
                        Гемоглобин
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.WBC}
                        onClick={this.props.add_wbc.bind(this)}
                    >
                        Лейкоциты
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.PLT}
                        onClick={this.props.add_plt.bind(this)}
                    >
                        Тромбоциты
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.color}
                        onClick={this.props.add_clr.bind(this)}
                    >
                        Цветовой показатель
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.RTC}
                        onClick={this.props.add_rtc.bind(this)}
                    >
                        Ретикулоциты
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.ESR}
                        onClick={this.props.add_esr.bind(this)}
                    >
                        СОЭ
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.LYM}
                        onClick={this.props.add_lym.bind(this)}
                    >
                        Лимфоциты
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.MON}
                        onClick={this.props.add_mon.bind(this)}
                    >
                        Моноциты
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.BAS}
                        onClick={this.props.add_bas.bind(this)}
                    >
                        Базофилы
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.EOS}
                        onClick={this.props.add_eos.bind(this)}
                    >
                        Эозинофилы
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.sticks}
                        onClick={this.props.add_stc.bind(this)}
                    >
                        Палочкоядерные
                    </Button>

                    <Button
                        className="indicator"
                        disabled={!this.props.btn.segments}
                        onClick={this.props.add_seg.bind(this)}
                    >
                        Сегментоядерные
                    </Button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        btn: state.indicatorsReducer.buttonsEnabled
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add_rbc: () => dispatch(indicatorsPanelActions.add_rbc()),
        add_wbc: () => dispatch(indicatorsPanelActions.add_wbc()),
        add_rtc: () => dispatch(indicatorsPanelActions.add_rtc()),
        add_bas: () => dispatch(indicatorsPanelActions.add_bas()),
        add_lym: () => dispatch(indicatorsPanelActions.add_lym()),
        add_mon: () => dispatch(indicatorsPanelActions.add_mon()),
        add_eos: () => dispatch(indicatorsPanelActions.add_eos()),
        add_esr: () => dispatch(indicatorsPanelActions.add_esr()),
        add_plt: () => dispatch(indicatorsPanelActions.add_plt()),
        add_hb:  () => dispatch(indicatorsPanelActions.add_hb()),
        add_clr: () => dispatch(indicatorsPanelActions.add_clr()),
        add_stc: () => dispatch(indicatorsPanelActions.add_stc()),
        add_seg: () => dispatch(indicatorsPanelActions.add_seg())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorsPanel);