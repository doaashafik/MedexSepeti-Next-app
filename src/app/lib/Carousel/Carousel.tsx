
import "./Carousel.scss";
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
} from './CarouselCustomArrows'
import { PropType } from "./Types";



const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, arrowsColor, slidesToShow } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
     <section className="emla__arrows">
     <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} color={arrowsColor}/>
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} color={arrowsColor}/>
     </section>
      <div className={`embla embla__slides-show-${slidesToShow}`}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default EmblaCarousel
