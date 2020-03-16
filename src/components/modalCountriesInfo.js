import React from 'react';
import {connect} from 'react-redux';
import {setDisplayCountriesInfo} from '../store/actions/setDisplayCountriesInfoAction';
import CloseButton from './buttons/close';
import ButtonConfirm from './buttons/confirm';
import '../styles/modale.css';

const ModalCountyInfo = ({display, data, switchDisplayModal}) => {
    if (display) {
        return (
            <div className = "modal-overlay" >
                <div className = "modal-window">
                    <div className = "modal-header">
                        <p>Инфо</p>
                        <div className = "close-btn">
                            <CloseButton action = {switchDisplayModal}/>
                        </div>
                    </div>
                    <div className = "modal-body">
                        <div className = "countries-info">
                            {data.map((el, i) => <div className = "country" key = {i}>
                                    <span>{i+1} {el.name}</span>  
                                    <div className = "flag"><img src={el.flag} alt={el.name}/></div>
                                </div> )}
                        </div>
                    </div>
                    <div className = "modal-footer">
                        <ButtonConfirm action = {switchDisplayModal} inner = {"Ok"}/>
                    </div> 
                </div>
            </div>
        ) 
    } else {
        return null;
    }  
}

const mapStateToProps = (state) => ({
    display: state.modalCountriesInfo.display,
    data: state.modalCountriesInfo.data,
})

const mapDispatchToProps = (dispatch) => ({
    switchDisplayModal: () => dispatch(setDisplayCountriesInfo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCountyInfo);