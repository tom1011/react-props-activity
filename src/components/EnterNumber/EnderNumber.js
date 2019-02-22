import React, { Component } from 'react';
import CurrentTotal from '../CurrentTotal/CurrentTotal';

class EnderNumber extends Component {
    state = {
        currentTotal: 0
    }

    render() {


        return (
            <>
                <button>Up</button>
                <input />
                <button>Down</button>
                <CurrentTotal Total = {this.state.currentTotal}/>
            </>
        );
    }
}

export default EnderNumber;