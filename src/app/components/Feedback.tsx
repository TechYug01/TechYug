"use client";

import { feedbackData } from "@/app/data/feedbackData";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" stroke="none" />
      ))}
      {hasHalfStar && <StarHalf size={18} fill="currentColor" stroke="none" />}
    </div>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const Feedback = () => {
  return (
    <section
      id="feedback"
      className="w-full bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] py-20 text-white"
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Mousewheel, EffectCoverflow]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 1.2,
          }}
          slidesPerView={"auto"}
        >
          {feedbackData.map((feedback, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[670px] rounded-xl bg-white/10 p-6 text-left shadow-xl backdrop-blur-lg transition-all duration-300 max-lg:max-w-[570px] max-md:max-w-[470px] max-sm:max-w-[300px]"
            >
              <h3 className="mb-2 text-xl font-semibold text-cyan-400 max-sm:text-lg">
                {feedback.project}
              </h3>
              <p className="mb-4 text-gray-300 max-sm:text-sm">
                {feedback.review}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white max-sm:text-sm">
                    {feedback.author}
                  </p>
                  <p className="text-sm text-gray-400 max-sm:text-xs">
                    {feedback.role}
                  </p>
                </div>
                {renderStars(feedback.rating)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Feedback;
