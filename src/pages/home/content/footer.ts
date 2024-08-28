import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faLocation, faMailBulk} from "@fortawesome/free-solid-svg-icons";

export interface linkObject {
    title: string;
    content: string[];
    hasIcons: boolean;
    icons?: IconDefinition[];
}

export interface SocialMediaObject {
    icon: IconDefinition;
    visibleOnMobile: boolean;
    visibleOnDesktop: boolean;
}

export interface FooterContent {
    title: string;
    description: string;
    contactUsButton: string;
    links: linkObject[];
    madeBy: string;
    socialMedia: SocialMediaObject[];
}


const footer: FooterContent = {
    title: "Consulting Agency For Your Business",
    description: "the quick fox jumps over the lazy dog",
    contactUsButton: "Contact Us",
    links: [
        {
            title: "Company Info",
            content: [
                "About Us",
                "Carrier",
                "We are hiring",
                "Blog"
            ],
            hasIcons: false
        },
        {
            title: "Legal",
            content: [
                "About Us",
                "Carrier",
                "We are hiring",
                "Blog"
            ],
            hasIcons: false
        },
        {
            title: "Features",
            content: [
                "Business Marketing",
                "User Analytic",
                "Live Chat",
                "Unlimited Support"
            ],
            hasIcons: false
        },
        {
            title: "Resources",
            content: [
                "IOS & Android",
                "Watch a Demo",
                "Customers",
                "API"
            ],
            hasIcons: false
        },
        {
            title: "Get In Touch",
            content: [
                "(480) 555-0103",
                "4517 Washington Ave.",
                "debra.holt@example.com"
            ],
            hasIcons: true,
            icons: [
                faPhone,
                faLocation,
                faMailBulk
            ]
        },
    ],
    madeBy: "Made With Love By Finland All Rights Reserved",
    socialMedia: [
        {
            icon: faFacebook,
            visibleOnMobile: true,
            visibleOnDesktop: true
        },
        {
            icon: faInstagram,
            visibleOnMobile: true,
            visibleOnDesktop: true
        },
        {
            icon: faTwitter,
            visibleOnMobile: true,
            visibleOnDesktop: true
        },
        {
            icon: faYoutube,
            visibleOnMobile: true,
            visibleOnDesktop: false
        }
    ]
}

export default footer;