'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

import Slider from "react-slick";
import { settingsType } from "./Types";


export default async function Carousel({
    children,
    settings
}: {
    children: React.ReactNode,
    settings: settingsType
}) {
    return (
        <Slider {...settings}>
             {children}
        </Slider>
    )
}
