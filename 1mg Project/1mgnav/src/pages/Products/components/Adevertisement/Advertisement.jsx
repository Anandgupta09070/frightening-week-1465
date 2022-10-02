import React from "react";
import {
  Add_div,
  CarePlan_div,
  Heading_div,
} from "./Advertisement_style";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



import { Pagination, Autoplay } from "swiper";

const Advertisement = () => {
  return (
    <>
      <Add_div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/d8120030-c595-474d-abda-ce3e1bfa22e9_1664596067.jpg?w=1269&h=250&format=auto"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/a_ignore,w_1269,h_250,c_fit,q_auto,f_auto/de7a783b-8ad2-497f-b219-796764d21d59.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/37e0e50d-f7aa-4445-aa03-f720fc0588c3_1664611610.png?w=1269&h=250&format=auto"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/20c3da0b-e49f-443e-8631-f33345413cb2_1664598792.png?w=1269&h=250&format=auto"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/f74cb682-3870-4fb8-8c83-5e009996e6a6_1663355796.jpg?w=1269&h=250&format=auto"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/66498119-a57c-4d84-9ff6-6b66210ed1ca_1660816191.jpg?w=1269&h=250&format=auto"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/a_ignore,w_1269,h_250,c_fit,q_auto,f_auto/de7a783b-8ad2-497f-b219-796764d21d59.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <img
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/64d2d0cd-0ace-4604-a522-bfb22b6aaea7.png"
            alt=""
          />
        </div>
      </Add_div>
      <Heading_div>
        <h1>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
      </Heading_div>
      <CarePlan_div>
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
      </CarePlan_div>
    </>
  );
};

export default Advertisement;