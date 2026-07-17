import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="py-16 bg-white">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        {/* Text */}

        <div>
          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-red-600
            mb-5
          "
          >
            درباره گلستان
          </h2>

          <p
            className="
            text-gray-600
            leading-8
            text-lg
          "
          >
            گلستان با سال‌ها تجربه در تولید و عرضه محصولات غذایی، تلاش می‌کند
            بهترین کیفیت را در اختیار خانواده‌های ایرانی قرار دهد. انتخاب دقیق
            مواد اولیه و توجه به کیفیت، رمز اعتماد مشتریان ماست.
          </p>

          <p
            className="
            mt-4
            text-gray-600
            leading-8
          "
          >
            از چای‌های خوش‌عطر گرفته تا زعفران و محصولات غذایی متنوع، هدف ما
            ارائه محصولی سالم و باکیفیت است.
          </p>
        </div>

        {/* Features */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
        "
        >
          <div
            className="
            bg-gray-100
            rounded-xl
            p-6
            hover:shadow-xl
            transition
          "
          >
            <h3 className="text-xl font-bold text-green-700">کیفیت بالا</h3>

            <p className="mt-3 text-gray-600">انتخاب بهترین مواد اولیه</p>
          </div>

          <div
            className="
            bg-gray-100
            rounded-xl
            p-6
            hover:shadow-xl
            transition
          "
          >
            <h3 className="text-xl font-bold text-green-700">تجربه زیاد</h3>

            <p className="mt-3 text-gray-600">سال‌ها فعالیت در صنعت غذا</p>
          </div>

          <div
            className="
            bg-gray-100
            rounded-xl
            p-6
            hover:shadow-xl
            transition
          "
          >
            <h3 className="text-xl font-bold text-green-700">محصولات متنوع</h3>

            <p className="mt-3 text-gray-600">چای، ادویه، زعفران و حبوبات</p>
          </div>

          <div
            className="
            bg-gray-100
            rounded-xl
            p-6
            hover:shadow-xl
            transition
          "
          >
            <h3 className="text-xl font-bold text-green-700">اعتماد مشتری</h3>

            <p className="mt-3 text-gray-600">کیفیت و رضایت مصرف‌کننده</p>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default About;
