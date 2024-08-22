import {FC} from "react";
import Content from "./Content.ts";

export default interface Page {
    path: string;
    Component: FC<Content>,
    content: Content
}