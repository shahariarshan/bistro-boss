import OrderCard from "../../Shared/OrderCard/OrderCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div>
             <div >
        {/* {
            items.map(item =><OrderCard
            key={item._id}
            item={item}
            ></OrderCard>)
        } */}

<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto container'>
            {
            items.map(item =><OrderCard
            key={item._id}
            item={item}
            ></OrderCard>)
        }
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
        </div>
    );
};

export default OrderTab;