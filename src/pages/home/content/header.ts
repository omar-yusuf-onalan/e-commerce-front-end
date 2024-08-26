import {faMagnifyingGlass, faShoppingCart, faBars, faUserLarge, faHeart} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface NavbarItem {
    text: string;
    dropdown: boolean;
    showOnMobile: boolean;
    showOnDesktop: boolean;
}

export interface Icon {
    icon: IconProp
    text: string;
    dropdown: boolean;
    showOnMobile: boolean;
}

export interface HeaderContent {
    brand: string;
    navbarItems: NavbarItem[];
    icons: Icon[];
}

const header: HeaderContent = {
    brand: "Bandage",
    navbarItems: [
        {
            text: "Home",
            dropdown: false,
            showOnMobile: true,
            showOnDesktop: true
        },
        {
            text: "Product",
            dropdown: false,
            showOnMobile: true,
            showOnDesktop: false
        },
        {
            text: "Shop",
            dropdown: true,
            showOnMobile: false,
            showOnDesktop: true
        },
        {
            text: "About",
            dropdown: false,
            showOnMobile: false,
            showOnDesktop: true
        },
        {
            text: "Blog",
            dropdown: false,
            showOnMobile: false,
            showOnDesktop: true
        },
        {
            text: "Pricing",
            dropdown: false,
            showOnMobile: true,
            showOnDesktop: false
        },
        {
            text: "Contact",
            dropdown: false,
            showOnMobile: true,
            showOnDesktop: true
        },
        {
            text: "Pages",
            dropdown: false,
            showOnMobile: false,
            showOnDesktop: true
        }
    ],
    icons: [
        {
            icon: faMagnifyingGlass,
            text: "",
            dropdown: false,
            showOnMobile: true
        },
        {
            icon: faShoppingCart,
            text: "",
            dropdown: false,
            showOnMobile: true
        },
        {
            icon: faBars,
            text: "",
            dropdown: true,
            showOnMobile: true
        },
        {
            icon: faUserLarge,
            text: "Login / Register",
            dropdown: false,
            showOnMobile: false
        },
        {
            icon: faMagnifyingGlass,
            text: "",
            dropdown: false,
            showOnMobile: false
        },
        {
            icon: faShoppingCart,
            text: "1",
            dropdown: false,
            showOnMobile: false
        },
        {
            icon: faHeart,
            text: "1",
            dropdown: false,
            showOnMobile: false
        }
    ]
}

export default header;