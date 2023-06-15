export type settingsType = {
    dots: boolean,
    infinite: boolean,
    speed: number,
    fade: boolean,
    slidesToShow: number,
    slidesToScroll: number,
    slidesPerRow: number
    responsive?: {
        breakpoint: number,
        settings: {
          slidesToShow: number,
          slidesToScroll: number,
          infinite: boolean,
          dots: boolean,
          slidesPerRow: number
        }
      }[]
};