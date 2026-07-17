import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import teelimoo from "../../assets/images/teelimoo.jfif";
import spice from "../../assets/images/spice.jfif";
import zaferan from "../../assets/images/zaferan.jfif";
import teegrin from "../../assets/images/teegrin.jpg";
import damnosh from "../../assets/images/damnosh.jfif";
import tee from "../../assets/images/tee.jfif";


const products = [
  {
    image: teelimoo,
    title: "چای لیمو",
    text: "طعم تازه و خوش عطر"
  },
  {
    image: spice,
    title: "ادویه گلستان",
    text: "ترکیبی از بهترین ادویه‌ها"
  },
  {
    image: zaferan,
    title: "زعفران ممتاز",
    text: "زعفران ایرانی با کیفیت"
  },
  {
    image: teegrin,
    title: "چای سبز",
    text: "انتخاب سالم و طبیعی"
  },
  {
    image: damnosh,
    title: "دمنوش گیاهی",
    text: "آرامش با طعم گیاهان"
  },
  {
    image: tee,
    title: "چای ویژه",
    text: "چای خوش‌رنگ و معطر"
  }
];


const ProductSlider = () => {

  return (

    <section className="bg-gray-100 py-16">

      <div className="
        max-w-7xl
        mx-auto
        px-5
      ">

        <h2 className="
          text-3xl
          font-bold
          text-red-600
          text-center
          mb-10
        ">
          محصولات ویژه
        </h2>


        <Swiper

          modules={[
            Navigation,
            Pagination,
            Autoplay
          ]}

          spaceBetween={25}

          slidesPerView={1}

          navigation

          pagination={{
            clickable:true
          }}

          autoplay={{
            delay:3000
          }}

          breakpoints={{
            640:{
              slidesPerView:2
            },

            1024:{
              slidesPerView:3
            }
          }}

        >


          {
            products.map((item,index)=>(

              <SwiperSlide key={index}>

                <div className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-300
                ">


                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-60
                      object-cover
                    "
                  />


                  <div className="p-5">

                    <h3 className="
                      text-xl
                      font-bold
                      text-red-600
                    ">
                      {item.title}
                    </h3>


                    <p className="
                      text-gray-600
                      mt-3
                    ">
                      {item.text}
                    </p>


                    <button className="
                      mt-5
                      bg-green-700
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      hover:bg-green-800
                      transition
                    ">
                      مشاهده محصول
                    </button>


                  </div>


                </div>


              </SwiperSlide>

            ))
          }


        </Swiper>


      </div>

    </section>

  );

};


export default ProductSlider;