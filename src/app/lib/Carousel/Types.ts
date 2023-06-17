import {
  EmblaOptionsType,
} from 'embla-carousel-react'
export type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
  color: string
}
export type PropType = {
  slides: number[]
  options?: EmblaOptionsType;
  children: React.ReactNode
  arrowsColor: string;
  slidesToShow: number
}