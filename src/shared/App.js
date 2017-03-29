import React, { Component } from 'react';

export default class App extends Component {
    render(){
        return (
            <h1>Isomorphic JavaScript greets {this.props.name}!</h1>
        );
    }
}