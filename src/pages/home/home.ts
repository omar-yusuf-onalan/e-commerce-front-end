import Home from "./Home.tsx";
import Page from "../Page.ts";
import header from "./content/header.ts";
import hero from "./content/hero.ts";

const home: Page =  {
    path: "/",
    // @ts-ignore
    Component: Home,
    content: {
        header: header,
        hero: hero
    }
}

export default home;