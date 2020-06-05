import React, { Component } from "react";
// 第三方库
import { Layout } from "antd";
// scss
import "../../styles/ContentHeader.scss";

const LayoutHeader = Layout.Header;

export default class Header extends Component<ContentHeaderProps> {
    static defaultProps = {
        title: "",
        hasDate: false,
    }

    constructor(props: any) {
        super(props);
    }
    getDate = () => {
        const month = new Date().getMonth() + 1;
        const day = new Date().getDay();
        const date = new Date().getDate();
        const newDay = `${month}月${date}日 星期${"日一二三四五六".charAt(day)}`;
        return this.props.hasDate ? <span>{newDay}</span> : null;
    };

    render() {
        return (<LayoutHeader>
            <div className="content-header-left">
                <h1>{this.props.title}</h1>
                {this.getDate()}
            </div>
            <div className="content-header-right">
                <span>...</span>
            </div>
        </LayoutHeader>)
    }
}
