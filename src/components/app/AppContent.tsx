import React, { Component } from "react";
import { Route, Switch, RouteProps } from 'react-router';
import { inject, observer } from 'mobx-react';
// antd
import { Layout } from "antd";
// 
import RouteConfig from "../../router/index";

interface BackgroundStore {
    background: string;
}
interface AppContentProps {
    BackgroundStore: BackgroundStore;
}

const Content = Layout.Content;

@inject("BackgroundStore")
@observer
export default class AppContent extends Component<AppContentProps> {
    static defaultProps = {
        BackgroundStore: {
            background: ""
        }
    }
    constructor(props: AppContentProps) {
        super(props);
    }

    render() {
        const { BackgroundStore } = this.props;
        return (<Layout style={{ background: BackgroundStore.background }}>
            <Content>
                <Switch>{RouteConfig.map((item, index) => (
                    <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                ))}</Switch>
            </Content>
        </Layout>)
    }
}
