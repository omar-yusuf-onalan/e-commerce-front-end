import Home from "./Home.tsx";
import Page from "../Page.ts";
import header from "./content/header.ts";
import hero from "./content/hero.ts";
import footer from "./content/footer.ts";

const home: Page =  {
    path: "/",
    // @ts-ignore
    Component: Home,
    content: {
        header: header,
        hero: hero,
        footer: footer,
    }
}

export default home;