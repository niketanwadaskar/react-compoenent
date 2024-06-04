/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../App.css";

export default function Card() {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`border rounded-2xl overflow-hidden transitionCubic ${hover ? "show" : ""} `} >
      <div class=" max-w-sm  bg-white h-[405px]  border-gray-200 rounded-lg shadow transitionCubic ">
        <dib className="flex flex-row gap-x-4">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper  transitionCubic"  >
            <SwiperSlide>
              <img
                class="rounded-t-lg"
                src={hover ? "/assets/cardAssets/imageOne.jpg" : "/assets/cardAssets/imageTwo.jpg"}
                alt=""
                className={`${hover ? "origin-top scale-y-[0.9] transition-all duration-300" : ""} `}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="rounded-t-lg"
                src="/assets/cardAssets/imageOne.jpg"
                alt=""
                className={`${hover ? "origin-top scale-y-[0.9] transition-all duration-300" : "scale-[1]"} `}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="rounded-t-lg"
                src="/assets/cardAssets/imageOne.jpg"
                alt=""
                className={`${hover ? "origin-top scale-y-[0.9] transition-all duration-300" : "scale-[1]"}`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="rounded-t-lg"
                src="/assets/cardAssets/imageOne.jpg"
                alt=""
                className={`${hover ? "origin-top scale-y-[0.9] transition-all duration-300" : "scale-[1]"}`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="rounded-t-lg"
                src="/assets/cardAssets/imageOne.jpg"
                alt=""
                className={`${hover ? "origin-top scale-y-[0.9] transition-all duration-300" : "scale-[1]"} `}
              />
            </SwiperSlide>
          </Swiper>
        </dib>
        <div class={` translate-x-0 duration-300 ${!hover ? "top-0" : "  bounce -top-16"} p-5 relative  z-10 bg-white `}>
          <a href="#">
            <h5 class="mb-2 text-xl truncate font-medium tracking-tight text-gray-900 ">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-400 truncate ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="flex justify-between">
            <div className="flex justify-between gap-2 w-1/2">
              <img
                class="rounded-t-lg"
                className="w-10 h-10 rounded-full border"
                src="/assets/logos/uber.png"
                alt=""
              />
              <div className="flex flex-wrap">
                <p className="whitespace-nowrap">By Prayas Foundation</p>
                <div className="flex flex-nowrap">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
              </div>
            </div>
            <div className="text-sm">
              <p>1.45 Lacs</p>
              <p>Raised</p>
            </div>
          </div>
          <div className="my-5 flex gap-5">
            <div className="bg-red-600 text-white w-12  h-10 rounded-full p-2 flex justify-centers items-center text-center text-lg">
              <FaCartPlus />
            </div>
            <button className="bg-red-600 text-white w-full  h-10 rounded-full p-2 flex justify-centers  text-xl font-thin text-center justify-center items-center">
              Donate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
