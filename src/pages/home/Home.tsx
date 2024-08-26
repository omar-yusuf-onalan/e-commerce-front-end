import {FC} from "react";
import Content from "../Content.ts";
import {HeaderContent} from "./content/header.ts";
import Header from "../../components/Header.tsx";

export interface HomeProps extends Content {
    header: HeaderContent;
}

const Home: FC<HomeProps> = ({header}) => {

    return (
        <div>
            <Header {...header}/>
        </div>
    )
}

export default Home;