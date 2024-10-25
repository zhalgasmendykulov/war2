import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperPage() {
  return (
    <>
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    > 
      <SwiperSlide>
        <img src='../../../public/img/img1.jpg' />
      </SwiperSlide>

      <SwiperSlide>
      <img src='../../../public/img/H4d6518f4598247f1bf0bebb1c32a8ffe6.jpg' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='../../../public/img/S892f8445a89749d1ad7a44ef05655301X.jpg' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='../../../public/img/large_na_kolesah_shop_241475148_1015115999223632_8515067488604259494_n.jpg' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='../../../public/img/na_kolesah_shop_241053599_440364717250183_6862800029515874071_n.jpg' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='../../../public/img/one.jpg' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='../../../public/img/two.jpg' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='../../../public/img/three.jpeg' />
      </SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </>
  )
}
