import React, { Component } from 'react';

export default class App extends Component {
    render(){
        return (
            <h1>Yeah, Isomorphic JavaScript at {this.props.name}!</h1>
        );
    }
}