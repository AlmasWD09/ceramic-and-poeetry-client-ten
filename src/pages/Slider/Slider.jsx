

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Slider = () => {
const [categorys,setCategorys] = useState([])
useEffect(()=>{
  const url = 'http://localhost:5000/sliders'
  fetch(url)
  .then(res=>res.json())
  .then(data=>setCategorys(data))
},[])


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
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper max-w-7xl mx-auto px-8 "
        >
            {/* slider 1 */}
            
            {
              categorys.map((item,idx)=>{
                return (
                  <SwiperSlide key={idx}>
                    <div className='h-[320px] md:h-[370px] lg:h-[400px] bg-black relative mt-5 rounded-lg '>
                      <img className='w-full opacity-40 rounded-lg' src={item.image} alt="" />
                      <div className='lg:w-[60%] inset-0 md:my-10 p-4 md:p-10 space-y-4 text-white absolute'>
                      <div>
                      <h3 className='text-2xl md:text-3xl font-semibold'>{item.pottery_type}</h3>
                      <h3 className='text-md md:text-xl font-semibold'>{item.title}</h3>
                      </div>
                      <p className='text-sm md:text-lg'>{item.description}</p>
                      <button className='bg-primary text-white px-4 py-2 rounded-sm'>Explore more</button>
                      </div>
                    <p></p>
                    </div>
                  </SwiperSlide>
                )
              })
            }
 
        </Swiper>
      </>
    );
};

export default Slider;