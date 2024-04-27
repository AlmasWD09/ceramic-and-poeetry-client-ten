

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
            {/* slider 1 */}
          <SwiperSlide>
          <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] rounded-2xl bg-green-300'>
            </div>
          </SwiperSlide>

          {/* slider 2 */}
          <SwiperSlide>
          <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] rounded-2xl bg-green-300'>
        </div>
          </SwiperSlide>

          {/* slider 3 */}
          <SwiperSlide>
          <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] rounded-2xl bg-green-300'>
        </div>
          </SwiperSlide>

          {/* slider 4 */}
          <SwiperSlide>
          <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] rounded-2xl bg-green-300'>
        </div>
          </SwiperSlide>
          
          {/* slider 5 */}
          <SwiperSlide>

          </SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;