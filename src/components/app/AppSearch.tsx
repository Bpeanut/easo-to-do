import React, { Component, ChangeEvent } from "react";
import { observer, inject } from "mobx-react";
import SvgIcon from "../SvgIcon";
import "../../styles/AppSearch.scss";

interface ISearchStore {
    theme: theme
}

interface SearchProps {
    searchStore?: ISearchStore
}

interface SearchStates {
    value: string
}

@inject("searchStore")
@observer
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
        const { searchStore } = this.props;
        return (
            <div className="app-search">
                <SvgIcon iconName={searchStore?.theme === "dark" ? "search-white" : "search-black"} svgClass="app-search__img"></SvgIcon>
                <input
                    className="search-input"
                    style={{ background: searchStore?.theme === "dark" ? "#3a3c41" : "#d0d0d0", color: searchStore?.theme === "dark" ? "#d0d0d0" : "#3a3c41" }}
                    value={this.state.value} onChange={this.handleValueChange}
                    placeholder="搜索"
                    type="search"
                />
            </div>
        );
    }
}
