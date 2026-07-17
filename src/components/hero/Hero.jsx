import tea from "../../assets/images/Capture.jpg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-[500px]
      flex
      items-center
      overflow-hidden
    "
    >
      <img
        src={tea}
        alt="Golestan Tea"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/50
      "
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
relative
z-10
max-w-7xl
mx-auto
px-5
text-white
"
      >
        <h1
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-5
        "
        >
          طعم اصیل چای گلستان
        </h1>

        <p
          className="
          max-w-xl
          text-lg
          leading-8
          text-gray-200
        "
        >
          تجربه‌ای متفاوت از چای، زعفران و محصولات با کیفیت ایرانی.
        </p>

        <Link
          to="/products"
          className="
            inline-block
            mt-8
            bg-red-600
            px-8
            py-3
            rounded-lg
            hover:bg-red-700
            transition
          "
        >
          مشاهده محصولات
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
