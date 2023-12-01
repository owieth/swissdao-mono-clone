import { SwiperContext } from '@/contexts/swiper';
import { Children, ReactNode, useState } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css/effect-fade';
import {
  A11y,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination
} from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

type Props = {
  interactive?: boolean;
  children: ReactNode;
};

SwiperCore.use([A11y, Keyboard, Navigation, Pagination, EffectFade]);

export default function Swiper({ interactive, children }: Props) {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <SwiperContext.Provider value={{ swiper, setSwiper }}>
      <SwiperReact
        className="m-auto w-full"
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={200}
        autoHeight={true}
        allowTouchMove={interactive}
        draggable={interactive}
        onSwiper={swiper => {
          swiper && !swiper.destroyed ? setSwiper(swiper) : null;
        }}
        keyboard={{
          enabled: interactive,
          onlyInViewport: true
        }}
        pagination={{
          el: '.swiperPagination',
          clickable: interactive,
          renderBullet: (index: number, className: string) => {
            return `
              <span class="${`${className} h-4 w-4 rounded-full	text-[0px] bg-black transition-all`}">
                ${index + 1}
              </span>
            `;
          }
        }}
        navigation={true}
      >
        <div className="swiperPagination absolute bottom-0 flex w-full justify-center gap-10" />

        {Children.map(children, (child, i) => (
          <SwiperSlide key={i} className="box-border">
            {child}
          </SwiperSlide>
        ))}
      </SwiperReact>
    </SwiperContext.Provider>
  );
}
