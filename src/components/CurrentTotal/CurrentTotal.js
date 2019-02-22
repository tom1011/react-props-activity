import React, { Component } from 'react';
import History from '../History/History';

class CurrentTotal extends Component {
    state = {
        history: [],
    }

    render() {
        console.log(this.props.Total)
        return (
            <>
                <p>Total = {this.props.Total}</p>
                <button>Save</button>
                <p>Click save above to save the current total in history</p>
                <History history = {this.state.history}/>
            </>
        );
    }
}

export default CurrentTotal;