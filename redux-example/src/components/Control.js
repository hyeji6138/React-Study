import React, { Component } from 'react'

const defaultProps = {
    onPlus : createWaring('onPlus'),
    onSubtract : createWaring('onSubtract'),
    onRandeomizeColor : createWaring('onRandomizeColor')
}

function createWaring(funcName){
    return () => console.warn(funcName+' is not defined');
}

export default class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandeomizeColor}>Randomize Color</button>
            </div>
        )
    }
}

Control.defaultProps = defaultProps;
