import React, { Component } from "react";
// components
import Header from "../content/Header";

interface MyDayProps {}

export default class MyDay extends Component<MyDayProps> {
    constructor(props: MyDayProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="">
                <Header title={"我的一天"} hasDate={true}></Header>
            </div>
        );
    }
}
