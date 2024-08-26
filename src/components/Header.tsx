import {FC, useState} from "react";
import {HeaderContent} from "../pages/home/content/header.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MouseEvent} from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

interface Dropdown {
    [key: string]: boolean;
}

const Header: FC<HeaderContent> = ({ brand, navbarItems, icons }) => {
    const initialDropdown: Dropdown = {
        hamburger: false,
        shop: false
    }

    const [dropdown, setDropdown] = useState(initialDropdown);

    const handleDropdown = (event: MouseEvent<HTMLDivElement>) => {
        const key = event.currentTarget.dataset.key;
        if (key) {
            setDropdown(previousState => ({
                ...previousState,
                [key]: !previousState[key]
            }));
        }
    };

    return (
        <>
            <div className={`flex justify-center items-center w-full h-24`}>

                <div
                    className={`flex justify-center items-center w-48 h-14 text-2xl leading-8 font-montserrat font-extrabold not-italic text-[#252B42]`}>
                    {brand}
                </div>

                <div className={`flex justify-end sm:justify-evenly items-center gap-8 w-3/5`}>
                    <div className={`sm:flex justify-center items-center gap-6 hidden w-2/5`}>
                        {navbarItems.map((navbarItem, index) => (
                            navbarItem.dropdown ?
                                (
                                    <div
                                        data-key="shop"
                                        onClick={handleDropdown}
                                        key={index}
                                        className={`${navbarItem.showOnDesktop ? "hidden sm:block" : "hidden"} text-center font-montserrat not-italic font-medium text-sm leading-10 text-[#737373]`}
                                    >
                                        {navbarItem.text}
                                        {" "}
                                        <FontAwesomeIcon icon={faCaretDown}/>
                                    </div>
                                ) :
                                (
                                    <a href="" key={index}
                                       className={`${navbarItem.showOnDesktop ? "hidden sm:block" : "hidden"} text-center font-montserrat not-italic font-medium text-sm leading-10 text-[#737373]`}>
                                        {navbarItem.text}
                                    </a>
                                )

                        ))}
                    </div>

                    <div className={`flex justify-evenly items-center w-3/6 sm:w-2/6`}>
                        {icons.map((icon, index) => {
                            return (
                                    icon.dropdown ? (
                                        <div
                                            key={index}
                                            data-key="hamburger"
                                            onClick={handleDropdown}
                                            className={`flex justify-center items-center sm:text-[#23A6F0] ${icon.showOnMobile ? "sm:hidden" : "hidden sm:block"}`}
                                        >
                                            <FontAwesomeIcon icon={icon.icon}/>
                                            {" "}
                                            {icon.text}
                                        </div>
                                    ) : (
                                        <div
                                            key={index}
                                            className={`flex justify-center items-center sm:text-[#23A6F0] ${icon.showOnMobile ? "sm:hidden" : "hidden sm:block"}`}
                                        >
                                            <FontAwesomeIcon icon={icon.icon}/>
                                            {" "}
                                            {icon.text}
                                        </div>
                                    )
                            )
                        }
                        )}
                    </div>

                </div>
            </div>

            {dropdown.hamburger &&
                <div className={`flex justify-center items-center flex-col gap-8 w-full h-96 sm:hidden`}>
                    {navbarItems.map((navbarItem, index) => (
                        <div key={index}
                             className={`w-28 h-11 text-[#737373] ${navbarItem.showOnMobile ? "block sm:hidden" : "hidden"} text-center font-montserrat not-italic font-medium text-3xl leading-6`}>
                            {navbarItem.text}
                        </div>
                    ))}
                </div>}
        </>
    );
};

export default Header;
