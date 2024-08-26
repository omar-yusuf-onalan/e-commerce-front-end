import Home from "./Home.tsx";
import Page from "../Page.ts";
import header from "./content/header.ts";

const home: Page =  {
    path: "/",
    Component: Home,
    content: {
        header: header
    }
}

export default home;