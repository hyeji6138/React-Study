import React, { Component } from 'react'

function createWaring(funcName){
    return () => console.warn(funcName+' is not defined');
}

export default class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        )
    }
}
const defaultProps = {
    onPlus : createWaring('onPlus'),
    onSubtract : createWaring('onSubtract'),
    onRandomizeColor : createWaring('onRandomizeColor')
}
Control.defaultProps = defaultProps;
