import {FC, useState} from "react";
import {HeaderContent} from "../pages/home/content/header.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MouseEvent} from "react";

interface Dropdown {
    [key: string]: boolean;
}

const Header: FC<HeaderContent> = ({ brand, navbarItems, icons }) => {
    const initialDropdown: Dropdown = {
        hamburger: false
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
            <div className={`flex justify-center items-center flex-col w-full h-24`}>
                <div className={`flex justify-evenly items-center w-full h-full`}>

                    <div
                        className={`flex items-center w-48 h-14 text-2xl leading-8 font-montserrat font-extrabold not-italic text-[#252B42]`}>
                        {brand}
                    </div>

                    <div className={`sm:flex justify-center items-center gap-4 w-1/5 hidden`}>
                        {navbarItems.map((navbarItem, index) => (
                            <div key={index} className={`${navbarItem.showOnDesktop ? "hidden sm:block" : "hidden"}`}>
                                {navbarItem.text}
                            </div>
                        ))}
                    </div>

                    <div className={`flex justify-center items-center gap-5`}>
                        {icons.map((icon, index) =>
                            (
                                <div key={index}
                                     className={`${icon.showOnMobile ? "sm:hidden" : "hidden sm:block"} text-2xl`}>
                                    {icon.dropdown ? (
                                        <div data-key="hamburger" onClick={handleDropdown}>
                                            <FontAwesomeIcon icon={icon.icon}/>
                                            {" "}
                                            {icon.text}
                                        </div>
                                    ) : (
                                        <div>
                                            <FontAwesomeIcon icon={icon.icon}/>
                                            {" "}
                                            {icon.text}
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>

            </div>

            {dropdown.hamburger && <div className={`flex justify-center items-center flex-col gap-8 w-full h-96 sm:hidden`}>
                {navbarItems.map((navbarItem, index) => (
                    <div key={index} className={`w-28 h-11 text-[#737373] ${navbarItem.showOnMobile ? "block sm:hidden" : "hidden"} text-center font-montserrat not-italic font-medium text-3xl leading-10`}>
                        {navbarItem.text}
                    </div>
                ))}
            </div>}
        </>
    );
};

export default Header;
