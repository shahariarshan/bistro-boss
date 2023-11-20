import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../SectionTitle';
const Category = () => {
    return (
        <section className='max-w-screen-xl mx-auto'>
            {/* <div className='mx-auto text-center space-y-2'>
            <h2 className='text-[#D99904] text-xl  '>---From 11:00am to 10:00pm---</h2>
            <h2 className='border-b-4 text-black mt-2 md:w-4/12 mx-auto'></h2>
            <h2 className=' text-3xl'></h2>
            <h2 className='border-b-4 md:w-4/12 mx-auto mt-2'></h2>
            </div> */}
            <SectionTitle 
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            >      
            </SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-5"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>Cakes</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-center uppercase text-4xl text-white -mt-32 font-serif'>salad</h2>
        </SwiperSlide>
       
        
      </Swiper>
        </section>
    );
};

export default Category;