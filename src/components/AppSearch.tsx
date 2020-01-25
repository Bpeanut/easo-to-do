import React, { Component, ChangeEvent } from "react";

interface SearchProps {}

interface SearchStates {
    value: string
}

export default class AppSearch extends Component<SearchProps, SearchStates> {
    constructor(props: SearchProps) {
        super(props);
        this.state = { value: "" }
    }
    
    private handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div className="">
                <input value={this.state.value} onChange={this.handleValueChange} placeholder="搜索" type="search" />
            </div>
        );
    }
}
