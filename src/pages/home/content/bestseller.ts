import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export interface Product {
    name: string;
    category: string;
    price: number;
    discountAmount: number;
    image: string;
}

export interface BestsellerContent {
    sideImage: string;
    title: string;
    categories: string[];
    previousIcon: IconDefinition;
    nextIcon: IconDefinition;
    products: Product[];
}

const bestseller: BestsellerContent = {
    sideImage: "../../public/assets/roots-and-grains.png",
    title: "BESTSELLER PRODUCTS",
    categories: [
        "Men",
        "Women",
        "Acessories"
    ],
    previousIcon: faChevronLeft,
    nextIcon: faChevronRight,
    products: [
        {
            name: "Graphic Design",
            category: "Men",
            price: 16.48,
            discountAmount: 10,
            image: "../../public/assets/ice-cream.png"
        },
        {
            name: "Graphic Design",
            category: "Women",
            price: 16.48,
            discountAmount: 10,
            image: "../../public/assets/apples.png"
        },
        {
            name: "Graphic Design",
            category: "Accessories",
            price: 16.48,
            discountAmount: 10,
            image: "../../public/assets/meat.png"
        },
        {
            name: "Graphic Design",
            category: "Men",
            price: 16.48,
            discountAmount: 10,
            image: "../../public/assets/ice-cream.png"
        },
        {
            name: "Graphic Design",
            category: "Women",
            price: 16.48,
            discountAmount: 10,
            image: "../../public/assets/apples.png"
        },
        {
            name: "Graphic Design",
            category: "Accessories",
            price: 16.48,
            discountAmount: 10,
            image: "../../public/assets/meat.png"
        },
    ]
}

export default bestseller;