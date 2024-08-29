import {FC} from "react";
import {DealsContent} from "../pages/home/content/deals.ts";
import {Link} from "react-router-dom";

const Deals: FC<DealsContent> = ({content}) => {
    return (
        <div className={`flex justify-center items-center flex-col gap-4 w-full h-[876px] bg-[#FAFAFA]`}>
            {content.map((card, index) => {
                const {
                    aboutDeal,
                    title,
                    image,
                    linkText,
                    link
                } = card;

                const backgroundStyle = {
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "auto 80%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "calc(100% - 25px) center"
                }

                return (
                    <div key={index} className={`flex justify-center items-start flex-col gap-6 w-[332px] h-[232px] bg-[#FFFFFF] p-10`} style={backgroundStyle}>
                        <h6 className={`deals-about`}>{aboutDeal}</h6>
                        <h2 className={`deals-title`}>{title}</h2>
                        <Link className={`deals-link`} to={link}>{linkText}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Deals;