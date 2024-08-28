import {FC} from "react";
import Content from "../Content.ts";
import {HeaderContent} from "./content/header.ts";
import Header from "../../components/Header.tsx";
import Hero from "../../components/Hero.tsx";
import {HeroObject} from "./content/hero.ts";
import {FooterContent} from "./content/footer.ts";
import Footer from "../../components/Footer.tsx";

export interface HomeProps extends Content {
    header: HeaderContent;
    hero: HeroObject[];
    footer: FooterContent;
}

const Home: FC<HomeProps> = ({header, hero, footer}) => {
    return (
        <div>
            <Header {...header}/>
            <Hero hero={hero}/>
            <Footer {...footer}/>
        </div>
    )
}

export default Home;