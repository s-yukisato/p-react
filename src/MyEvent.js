import React, { Component } from "react";

export default class MyEvent extends Component {

    constructor(props) {
        super(props)
        this.show = this.show.bind(this, "さん")
        this.state = {
            current: new Date()
        }
    }

    show(suffix, e) {
        console.log(`${this.props.greet}, ${e.target.value} ${suffix}`)
    }

    render() {
        return (
            <form>
                <label htmlFor="textName">名前：</label>
                <input id="textName" type="text" onChange={this.show} />
            </form>
        )
    }
}