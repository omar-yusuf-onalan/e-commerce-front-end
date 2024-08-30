import {FC} from "react";
import Content from "../Content.ts";
import {HeaderContent} from "./content/header.ts";
import Header from "../../components/Header.tsx";
import Hero from "../../components/Hero.tsx";
import {HeroObject} from "./content/hero.ts";
import {FooterContent} from "./content/footer.ts";
import Footer from "../../components/Footer.tsx";
import {DealsContent} from "./content/deals.ts";
import Deals from "../../components/Deals.tsx";
import {BestsellerContent} from "./content/bestseller.ts";
import Bestseller from "../../components/Bestseller.tsx";

export interface HomeProps extends Content {
    header: HeaderContent;
    hero: HeroObject[];
    deals: DealsContent;
    bestseller: BestsellerContent;
    footer: FooterContent;
}

const Home: FC<HomeProps> = ({header, hero, deals, bestseller, footer}) => {
    return (
        <div>
            <Header {...header}/>
            <Hero hero={hero}/>
            <Deals {...deals}/>
            <Bestseller {...bestseller}/>
            <Footer {...footer}/>
        </div>
    )
}

export default Home;