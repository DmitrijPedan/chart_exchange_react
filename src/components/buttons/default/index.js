import React from 'react';
import './defaultBtn.css'

const ButtonDefault = (props) => <button className = "defaultBtn" onClick = {props.action}>{props.inner}</button>;

export default ButtonDefault;