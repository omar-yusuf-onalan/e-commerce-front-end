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
            image: "",
            linkText: "Explore Items",
            link: "#"
        },
        {
            aboutDeal: "Ends Today",
            title: "Elements Style",
            image: "",
            linkText: "Explore Items",
            link: "#"
        },
        {
            aboutDeal: "Ends Today",
            title: "Elements Style",
            image: "",
            linkText: "Explore Items",
            link: "#"
        }
    ]
}

export default deals;