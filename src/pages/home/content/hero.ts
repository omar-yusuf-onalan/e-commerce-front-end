import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export interface HeroObject {
    title: string;
    description: string;
    button: string;
    image: string;
    leftChevron: IconDefinition
    rightChevron: IconDefinition
}

const hero: HeroObject[] = [
    {
        title: "GROCERIES DELIVERED",
        description: "We know how large objects will act, but things on a small scale just do not act that way",
        button: "Start Now",
        image: "../../public/assets/image-1.jpg",
        leftChevron: faChevronLeft,
        rightChevron: faChevronRight
    },
    {
        title: "GROCERIES DELIVERED",
        description: "We know how large objects will act, but things on a small scale just do not act that way",
        button: "Start Now",
        image: "../../public/assets/image-2.jpeg",
        leftChevron: faChevronLeft,
        rightChevron: faChevronRight
    },
    {
        title: "GROCERIES DELIVERED",
        description: "We know how large objects will act, but things on a small scale just do not act that way",
        button: "Start Now",
        image: "../../public/assets/image-3.jpg",
        leftChevron: faChevronLeft,
        rightChevron: faChevronRight
    }
]

export default hero;