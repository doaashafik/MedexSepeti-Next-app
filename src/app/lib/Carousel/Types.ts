import { productType } from '@/app/components/NewProducts/Types'
import { promotedProductsTypes } from '@/app/components/PromotedProducts/Types'
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
  slidesToShow: number;
  data?: promotedProductsTypes[]
}