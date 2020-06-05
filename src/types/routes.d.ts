import { RouteProps, RouteComponentProps } from "react-router-dom";

type RouteConfig = RouteProps & EditConfig;

interface EditConfig {
    name: string;
}
