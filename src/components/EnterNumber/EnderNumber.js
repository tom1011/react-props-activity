import React, { Component } from 'react';
import CurrentTotal from '../CurrentTotal/CurrentTotal';

class EnderNumber extends Component {
    state = {
        currentTotal: 0,
        inputNumber: 0
    }



    changenumberUp = () => {
        console.log('up botton clicked')
        this.setState({
            ...this.state,
            currentTotal: Number(this.state.inputNumber) + Number(this.state.currentTotal),
        })
    }

    changeNumberDown = () => {
        console.log('up botton clicked')
        this.setState({
            ...this.state,
            currentTotal:Number(this.state.currentTotal) - Number(this.state.inputNumber) ,
        })
    }



    onChange = (event) => {
        this.setState({
            ...this.state,
            inputNumber: event.target.value
        })
    }

    render() {


        return (
            <>
                <button onClick={this.changenumberUp}>Up</button>
                <input type="number" onChange={this.onChange}/>
                <button onClick={this.changeNumberDown}>Down</button>
                <CurrentTotal Total = {this.state.currentTotal} />
            </>
        );
    }
}

export default EnderNumber;