import {FC, useState} from "react";
import {BestsellerContent} from "../pages/home/content/bestseller.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Bestseller: FC<BestsellerContent> = ({sideImage, title, categories, previousIcon, nextIcon, products}) => {
    const [activeCategory, setActiveCategory] = useState(categories[0] || "");

    return (
        <div className={`flex justify-center items-center flex-col sm:flex-row gap-10 pb-20 sm:pt-10 sm:pb-10`}>
            <img className={`w-[380px] sm:w-[414px]`} alt="side-image" src={sideImage}/>

            <div className={`flex justify-center items-center flex-col gap-10 sm:w-[40%]`}>

                <div className={`flex justify-center items-center flex-col sm:flex-row gap-4 sm:gap-6 p-4 border-b-2`}>
                    <h3 className={`bestseller-title`}>{title}</h3>

                    <div className={`flex justify-center items-center flex-col sm:flex-row gap-6 sm:gap-8`}>
                        <div className={`flex justify-center items-center gap-4`}>
                            {categories?.map((category) => (
                                <h6 onClick={() => setActiveCategory(category)}
                                    className={`${activeCategory === category ? "text-[#23A6F0]" : "text-[#737373]"} bestseller-category`}>{category}</h6>
                            ))}
                        </div>

                        <div className={`flex justify-center items-center gap-2`}>
                            <FontAwesomeIcon className={`bestseller-chevron`} icon={previousIcon}/>
                            <FontAwesomeIcon className={`bestseller-chevron`} icon={nextIcon}/>
                        </div>
                    </div>
                </div>

                <div className={`flex justify-center items-center flex-col sm:flex-row flex-wrap gap-20`}>
                    {products.map((product, index) => {
                        const {
                            name,
                            category,
                            price,
                            discountAmount,
                            image
                        } = product;

                        return (
                            <div className={`flex justify-center items-center flex-col gap-10 ${index > 2 ? "hidden sm:block" : ""}`}>
                                <img className={`sm:h-[200px]`} alt={name} src={image}/>

                                <div className={`flex justify-center items-center flex-col gap-4 `}>
                                <h2 className={`bestseller-name`}>{name}</h2>
                                    <h5 className={`bestseller-product-category`}>{category}</h5>
                                    <span className={`flex justify-center items-center`}>
                                        <h5 className={`bestseller-price`}>${price}</h5>
                                        <h5 className={`bestseller-discount`}>${discountAmount}</h5>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Bestseller;