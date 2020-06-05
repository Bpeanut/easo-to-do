import React from "react";
import { RouteProps } from "react-router";
import { RouteConfig } from "../types/routes";

// components
import MyDay from "../components/content/MyDay";
import Important from "../components/content/Important";

const routeConfig: Array<RouteConfig> = [
    {
        path: "/",
        name: "我的一天",
        exact: true,
        component: MyDay
    },
    {
        path: "/important",
        name: "重要",
        exact: true,
        component: Important
    }
];

export default routeConfig;
