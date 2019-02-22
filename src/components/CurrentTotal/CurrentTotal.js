import React, { Component } from 'react';
import History from '../History/History';

class CurrentTotal extends Component {
    state = {
        history: [],
    }

    historyUpdate = () => {
        console.log('in history update')
        console.log(this.props.Total)
        this.setState ({
            history: [...this.state.history, this.props.Total]
        } )  
    }



    render() {
        console.log(this.state.history);
        return (
            <>
                <p>Total = {this.props.Total}</p>
                <button onClick={this.historyUpdate}>Save</button>
                <p>Click save above to save the current total in history</p>
                <History history = {this.state.history}/>
            </>
        );
    }
}

export default CurrentTotal;