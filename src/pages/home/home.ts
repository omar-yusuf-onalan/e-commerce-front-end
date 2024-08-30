import Home from "./Home.tsx";
import Page from "../Page.ts";
import header from "./content/header.ts";
import hero from "./content/hero.ts";
import footer from "./content/footer.ts";
import deals from "./content/deals.ts";
import bestseller from "./content/bestseller.ts";

const home: Page =  {
    path: "/",
    // @ts-ignore
    Component: Home,
    content: {
        header: header,
        hero: hero,
        deals: deals,
        bestseller: bestseller,
        footer: footer,
    }
}

export default home;