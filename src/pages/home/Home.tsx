import {FC} from "react";
import Content from "../Content.ts";
import {HeaderContent} from "./content/header.ts";
import Header from "../../components/Header.tsx";

import Hero from "../../components/Hero.tsx";
import {HeroObject} from "./content/hero.ts";

export interface HomeProps extends Content {
    header: HeaderContent;
    hero: HeroObject[];
}

const Home: FC<HomeProps> = ({header, hero}) => {
    return (
        <div>
            <Header {...header}/>
            <Hero hero={hero}/>
        </div>
    )
}

export default Home;