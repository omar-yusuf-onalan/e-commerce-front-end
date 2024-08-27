import {FC, useState} from "react";
import {HeroObject} from "../pages/home/content/hero.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Content from "../pages/Content.ts";

interface HeroProps extends Content {
    hero: HeroObject[];
}

const Hero: FC<HeroProps> = ({hero}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChevron = (shift: number) => {
        const sum = activeIndex + shift;

        if (sum < 0 ) {
            setActiveIndex(hero.length - 1);
            return;
        }

        if ( hero.length - 1 < sum) {
            setActiveIndex(0);
            return;
        }

        setActiveIndex(sum);
    }

    return (
        <div className={`flex justify-center items-center w-full h-[640px] bg-cover bg-center`} style={{backgroundImage: `url('${hero[activeIndex].image}')`}}>
            <div className={`flex justify-start items-center w-1/5 h-full pl-8`}>
                <FontAwesomeIcon
                    onClick={() => handleChevron(-1)}
                    className={`chevron`}
                    icon={hero[activeIndex].leftChevron}
                />
            </div>

            <div className={`flex justify-center items-center flex-col gap-[24px] w-3/5 h-full `}>
                <h1 className={`hero-h1 sm:sm-hero-h1`}>{hero[activeIndex].title}</h1>
                <h4 className={`hero-h4 sm:sm-hero-h4`}>{hero[activeIndex].description}</h4>
                <button className={`button`}>{hero[activeIndex].button}</button>

                <div className={`hidden sm:flex justify-center items-center gap-1 w-full h-3 relative top-40`}>
                    {hero.map((_, index) =>
                        (
                            <div className={`carousel-indicators ${index === activeIndex ? "opacity-100" : "opacity-50"}`}></div>
                        )
                    )}
                </div>
            </div>


            <div className={`flex justify-end items-center w-1/5 h-full pr-8`}>
                <FontAwesomeIcon
                    onClick={() => handleChevron(1)}
                    className={`chevron`}
                    icon={hero[activeIndex].rightChevron}
                />
            </div>


        </div>

    )
}

export default Hero;
