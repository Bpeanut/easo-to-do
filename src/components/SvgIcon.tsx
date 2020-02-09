import React, { Component } from "react";

interface SvgIconProps {
    svgClass: string;
    iconName: string;
}

export default class SvgIcon extends Component<SvgIconProps, object> {
    constructor(props: SvgIconProps) {
        super(props);
        this.state = {};
    }

    render() {
        const { svgClass, iconName } = this.props;
        return (
            <svg className={svgClass} aria-hidden="true">
                <use xlinkHref={`#icon-${iconName}`}></use>
            </svg>
        );
    }
}
