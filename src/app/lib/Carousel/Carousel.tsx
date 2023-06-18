
import "./Carousel.scss";
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
} from './CarouselCustomArrows'
import { PropType } from "./Types";
import { Thumb } from "./CarouselThumbsButton";



const EmblaCarousel: React.FC<PropType> = (props) => {
  const { data, options, arrowsColor, slidesToShow } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)



  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi, emblaThumbsApi],
  )

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )


  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi || !emblaThumbsApi) return
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, emblaThumbsApi, setSelectedIndex, prevBtnEnabled, nextBtnEnabled])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
        <section className="emla__arrows arrows">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} color={arrowsColor} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} color={arrowsColor} />
        </section>
      <div className={`embla embla__slides-show-${slidesToShow}`}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {props.children}
          </div>
        </div>

        {data &&
          <div className="embla-thumbs">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {data?.map((slide, index) => (
                  <Thumb
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    index={index}
                    imgSrc={slide.url}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default EmblaCarousel




















