import {FC} from "react";
import {FooterContent} from "../pages/home/content/footer.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer: FC<FooterContent> = ({title, description, contactUsButton, links, madeBy, socialMedia}) => {

    return (
        <div className={`flex justify-center items-center flex-col gap-20 w-full bg-[#252B42] pt-10 pb-10`}>
            <div className={`flex justify-center items-center flex-col gap-10 w-3/5`}>
                <div className={`flex justify-center items-center flex-col gap-12 w-full`}>
                    <div className={`flex justify-center items-start flex-col gap-4 w-full`}>
                        <h3 className={`footer-h3`}>{title}</h3>
                        <p className={`footer-p`}>{description}</p>
                    </div>

                    <div className={`flex justify-start items-center w-full`}>
                        <button className={`button`}>{contactUsButton}</button>
                    </div>
                </div>

            </div>

            <div className={`flex justify-center items-start flex-col gap-6 w-3/5`}>
                {links.map((link, index) => (
                    <div key={index} className={`flex justify-center items-start flex-col gap-3`}>
                        <h4 className={`footer-h4`}>{link.title}</h4>

                        <div className={`flex justify-center items-start flex-col gap-1 w-full`}>
                            {link.content.map((information, index) =>
                                link.icons ?
                                    (
                                        <div key={index} className={`flex justify-start items-center gap-2`}>
                                            <FontAwesomeIcon className={`text-[#8EC2F2] w-4 h-4`} icon={link.icons[index]}/>
                                            <a className={`footer-a`}>{information}</a>
                                        </div>
                                    ) :
                                    (
                                        <a key={index} className={`footer-a`}>{information}</a>
                                    )
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className={`flex justify-center items-start flex-col gap-10 w-3/5`}>
                <p className={`footer-p`}>{madeBy}</p>

                <div className={`flex justify-center items-center gap-2`}>
                    {socialMedia.map((icon, index) => {
                        const mobile = !icon.visibleOnMobile ? "hidden " : "";
                        const desktop = !icon.visibleOnDesktop ? "sm:hidden" : "block"

                        const visibility = mobile + desktop;

                        return (
                            <FontAwesomeIcon
                                className={`${visibility} w-[24px] h-[24px]`}
                                style={{color: icon.colorOnMobile}}
                                key={index}
                                icon={icon.icon}
                            />
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer;