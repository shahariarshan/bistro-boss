import { useEffect, useState } from "react";
import SectionTitle from "../../../../SectionTitle";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { VscPreview } from 'react-icons/vsc';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-mu-eosin.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews])
    return (
        <section className="mt-10">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:mx-40 mt-10 space-y-4">
                            <VscPreview className="mx-auto text-6xl" ></VscPreview>
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="">{review.details}</p>
                            <h2 className="text-2xl text-[#CD9003]  text-center">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;