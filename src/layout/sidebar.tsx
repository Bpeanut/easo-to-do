// import PropTypes from "prop-types";
import React, { Component } from "react";
// import { observer, inject } from "mobx-react";

import { Layout } from "antd";
import AppSearch from "../components/AppSearch";
import "../styles/AppSider.less";

const LayoutSide = Layout.Sider;

// @inject("store")
// @observer
export default class extends Component {
    static propTypes = {};

    render() {
        return(
            <LayoutSide className="app-side" width="200">
                <AppSearch></AppSearch>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </LayoutSide>
        );
    }
}
