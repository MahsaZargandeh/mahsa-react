import legumes from "../../assets/images/Legumes-1.jpeg";
import saffron from "../../assets/images/Saffron-cover.jpg";
import { motion } from "framer-motion";
import damnosh from "../../assets/images/damnosh.jfif";
import Darjeen from "../../assets/images/Darjeen.jpg";
import teegol from "../../assets/images/teegol.jfif";
import teegrin from "../../assets/images/teegrin.jpg";
import Spice from "../../assets/images/Spice.jfif";
import tee from "../../assets/images/tee.jfif";
import teehel from "../../assets/images/teehel.jfif";
import zaferan from "../../assets/images/zaferan.jfif";
import teelimoo from "../../assets/images/teelimoo.jfif";
const cards = [
  {
    image: teelimoo,
    title: "چای لیمو",
    text: "طعم تازه و عطر طبیعی",
  },
  {
    image: Spice,
    title: "ادویه‌ها",
    text: "ترکیبی از طعم‌های خاص",
  },
  {
    image: zaferan,
    title: "زعفران",
    text: "زعفران مرغوب ایرانی",
  },
  {
    image: teegol,
    title: "چای",
    text: "زعفران مرغوب ایرانی",
  },
  {
    image: teegrin,
    title: "چای سبز",
    text: "انتخابی سالم و خوش‌طعم",
  },

  {
    image: Darjeen,
    title: "چای سبز",
    text: "انتخابی سالم و خوش‌طعم",
  },
  {
    image: damnosh,
    title: "دمنوش",
    text: "آرامش با طعم گیاهان طبیعی",
  },
  {
    image: teehel,
    title: "چای هل",
    text: "چای با کیفیت گلستان",
  },
  {
    image: legumes,
    title: "حبوبات",
    text: "محصولات سالم و درجه یک",
  },
  {
    image: saffron,
    title: "زعفران",
    text: "زعفران مرغوب ایرانی",
  },
  {
    image: tee,
    title: "چای سبز",
    text: "انتخابی سالم برای زندگی",
  },
  {
    image: legumes,
    title: "ادویه و سبزیجات",
    text: "طعم‌دهنده‌های طبیعی",
  },
  {
    image: saffron,
    title: "محصول ویژه",
    text: "کیفیت در هر بسته",
  },
];

const Banner = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div
        className="
max-w-7xl
mx-auto
px-5
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="..."
          >
            <img
              src={card.image}
              alt={card.title}
              className="
w-full
h-60
object-cover
"
            />

            <div className="p-6">
              <h2
                className="
text-2xl
font-bold
text-red-600
"
              >
                {card.title}
              </h2>

              <p
                className="
mt-3
text-gray-600
leading-7
"
              >
                {card.text}
              </p>

              <button
                className="
mt-5
bg-red-600
text-white
px-5
py-2
rounded-lg
hover:bg-red-700
transition
"
              >
                بیشتر
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
