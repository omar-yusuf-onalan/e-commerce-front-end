export interface DealsCard {
    aboutDeal: string;
    title: string;
    image: string;
    linkText: string;
    link: string;
}

export interface DealsContent {
    content: DealsCard[];
}

const deals: DealsContent = {
    content: [
        {
            aboutDeal: "Your Space",
            title: "Unique Life",
            image: "../../public/assets/ice-cream.png",
            linkText: "Explore Items",
            link: "#"
        },
        {
            aboutDeal: "Ends Today",
            title: "Elements Style",
            image: "../../public/assets/apples.png",
            linkText: "Explore Items",
            link: "#"
        },
        {
            aboutDeal: "Ends Today",
            title: "Elements Style",
            image: "../../public/assets/meat.png",
            linkText: "Explore Items",
            link: "#"
        }
    ]
}

export default deals;