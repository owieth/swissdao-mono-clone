import { createContext } from 'react';
import SwiperCore from 'swiper';

type SwiperContextType = {
  swiper: SwiperCore | undefined;
  setSwiper: Function;
};

export const SwiperContext = createContext({} as SwiperContextType);
