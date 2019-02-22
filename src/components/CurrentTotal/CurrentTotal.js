import React, { Component } from 'react';

class CurrentTotal extends Component {

    render() {
        console.log(this.props.Total)
        return (
            <>
                <p>Total = {this.props.Total}</p>
                <button>Save</button>
                <p>Click save above to save the current total in history</p>
            </>
        );
    }
}

export default CurrentTotal;