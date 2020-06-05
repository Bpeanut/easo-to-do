// import PropTypes from "prop-types";
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Layout } from "antd";
// 
import AppSearch from "../components/app/AppSearch";
import SystemNavBar from "./navbar/SystemNavBar";
// scss
import "../styles/AppSider.scss";

const LayoutSide = Layout.Sider;

@inject("searchStore")
@observer
export default class extends Component {

    render() {
        
        console.log(window.location, "hash");
        return(
            <LayoutSide className="app-side" width="200">
                <AppSearch></AppSearch>
                <SystemNavBar></SystemNavBar>
            </LayoutSide>
        );
    }
}
