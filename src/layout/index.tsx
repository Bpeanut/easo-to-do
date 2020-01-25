import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class Layout extends Component {
    static propTypes = {};

    render() {
        return <div></div>;
    }
}
