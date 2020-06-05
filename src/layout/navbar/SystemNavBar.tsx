import React, { Component } from "react";
import { Link } from "react-router-dom";
// 第三方库
import { Menu } from "antd";
// router
import RouterConfig from "../../router/index";
import { RouteConfig } from '../../types/routes';
// scss
import "../../styles/SystemNavBar.scss";

export default class SystemNavBar extends Component {
    onChange = (mode: string) => {
        this.setState({ m: mode });
    };
    getSystemMenu = (config: Array<RouteConfig>) => {
        return config.map((item, key) => {
            return (
                <Menu.Item key={key}>
                    <Link to={`${item.path}`}>{item.name}</Link>
                </Menu.Item>
            );
        });
    };
    render() {
        return <Menu>{this.getSystemMenu(RouterConfig)}</Menu>;
    }
}
