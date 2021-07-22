import React, { Component } from "react";

export default class MyHello extends Component {
    render() {
        return(
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.sex}</li>
            </ul>
        );
    }
}