import { useAnswersState } from '@yext/answers-headless-react';
import { useContext } from 'react';
import { ResponsiveContext } from '../../App';
import { useComposedCssClasses } from '../../hooks/useComposedCssClasses';
import { CardProps } from '../../models/cardComponent';
// import renderCardImg from '../../utils/renderCardImg';
// import PageLayout from "./page-layout";
import * as React from "react";
// import renderCardImg from '../../utils/renderCardImg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// prettier-ignore
export interface TrainerCardConfig {
    showOrdinal?: boolean
}

//prettier-ignore
export interface TrainerCardProps extends CardProps {
    configuration: TrainerCardConfig
}

//prettier-ignore
export interface SimpleImage {
    url: string,
    width: number,
    height: number
}

//prettier-ignore
export interface Image extends SimpleImage {
    sourceUrl: string,
    thumbnails: SimpleImage[]
}

//prettier-ignore
// interface PrimaryPhoto {
//     c_image?: Image
// }

//prettier-ignore
export interface TrainerData {
    id: any | null | undefined;
    answer: string | undefined;
    name?: string,
    c_inspirationalQuote?: string,
    //primaryPhoto?: PrimaryPhoto,
    c_itemCategory?: string,
    c_image?: any,
    richTextDescription?: string,
    photoGallery?: any,
    description?: string
}

//prettier-ignore
export interface TrainerCardCssClasses {
    container?: string,
    descriptionContainer?: string,
    name?: string,
    // TODO: why can't I use the tailwind pixels here
    trainerPhoto?: string,
    ctaButton?: string,
    ctaButtonText?: string,
    c_itemCategory?: string,
    c_image?: any,
    richTextDescription?: string,
    photoGallery?: any,
    description?: string
}

//prettier-ignore
const builtInCssClasses: TrainerCardCssClasses = {
    container: 'flex flex-col p-4 shadow-sm my-2 align-items-center',
    descriptionContainer: 'w-full text-sm font-heading ',
    name: 'text-xl font-medium font-body font-bold',
    ctaButton: 'flex border rounded-md mt-4 px-4 bg-black justify-center hover:bg-orange-900',
    ctaButtonText: 'font-heading text-black font-bold text-base px-3 py-3 sm:py-0',
    c_itemCategory: 'text-xl font-medium font-body font-bold'
};



// TODO: format hours, hours to middle, fake CTAs on the right, hours to show current status and then can be expanded, limit to 3 results for now, margin between map

export function MenuCard(props: TrainerCardProps): JSX.Element {
    const { result } = props;
    const trainer = result.rawData as unknown as TrainerData;
    //const trainerImg = trainer.primaryPhoto?.c_image?.url ?? '';
    // const smallestThumbnail = trainer.logo?.image?.thumbnails[trainer.logo?.image?.thumbnails.length - 1].url

    const screenSize = useContext(ResponsiveContext);

    const cssClasses = useComposedCssClasses(builtInCssClasses);

    function renderName(name?: string) {
        return <div className={cssClasses.name}>{name}</div>;
    }
    function renderCategory(c_itemCategory?: string) {
        return <div className={cssClasses.c_itemCategory}>{c_itemCategory}</div>;
    }
    function renderDescription(richTextDescription?: string) {
        return <div className={cssClasses.richTextDescription}>{richTextDescription}</div>;
    }
    function renderAbout(description?: string) {
        return <div className={cssClasses.description}>{description}</div>;
    }
    const imge = trainer?.photoGallery?.map((img: any) => {
        // console.log (img);
        return (
            <>
                <img src={img?.image?.sourceUrl} />
            </>
        );
    });
    // function renderImage(c_image?: Url) {
    //     return <div>{c_image}</div>;
    // }

    // function renderQuote(quote?: string) {
    //     return <div className={cssClasses.descriptionContainer}>{quote}</div>;
    // }


    const isVertical = useAnswersState((s) => s.meta.searchType) === 'vertical';
    return (

        <>

            <section >
                <div className="flex flex-wrap gap-y-2">
                    <div style={{ padding: "10px" }} className="grid grid-cols-1 gap-x-10 gap-y-10">


                        <div className="grid grid-cols-3 gap-x-10 gap-y-10 pl-4 pr-4">
                            <div className=" border-2 border-indigo-600 pt-2 pb-2 pl-2 pr-2 text-center">
                                {/* <div className='text-blue-600'>
                                {renderName(trainer.name)}

                                <div className="centered-container" >

                                    {trainer.photoGallery.map((res: any) => {
                                        return (
                                            <div className="centered-container" >

                                                <img   src={res.image?.url} alt=" none" />
                                            </div>

                                        )
                                    })
                                    } */}
                                <div className="bg-gray-100 p-2" style={{ width: "100%" }}>
                                    <p> {imge}</p>
                                    

                                <div className="centered-container" style={{ color: "green" }}>{renderCategory(trainer.c_itemCategory)}

                                    <div style={{ color: "black" }} className="centered-container">{renderDescription(trainer.richTextDescription)}

                                        <div className="centered-container">{renderAbout(trainer.description)}

                                            <button style={{ backgroundColor: "yellow" }} type="button" className="w-48 my-4 rounded-xl bg-amber-400 border-4 shadow-xl border-amber-500 px-2 py-2 border-pink-500  centered-container">
                                                <b>
                                                    <a className="btn btn-primary " style={{ color: "green" }} href="#" >
                                                        Order-Now
                                                    </a>
                                                </b>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       

            </section >
           
        </>
    )


}
