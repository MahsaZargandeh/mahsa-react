const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        py-12
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
      >
        {/* Brand */}

        <div>
          <h2
            className="
            text-3xl
            font-bold
            text-red-500
            mb-4
          "
          >
            گلستان
          </h2>

          <p
            className="
            text-gray-300
            leading-7
          "
          >
            ارائه‌دهنده محصولات با کیفیت ایرانی با بهترین طعم و عطر.
          </p>
        </div>

        {/* Links */}

        <div>
          <h3
            className="
            text-xl
            font-bold
            mb-4
          "
          >
            دسترسی سریع
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-red-500 transition">صفحه اصلی</li>

            <li className="hover:text-red-500 transition">محصولات</li>

            <li className="hover:text-red-500 transition">تماس با ما</li>
          </ul>
        </div>

        {/* Products */}

        <div>
          <h3
            className="
            text-xl
            font-bold
            mb-4
          "
          >
            محصولات
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>چای</li>

            <li>زعفران</li>

            <li>حبوبات</li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3
            className="
            text-xl
            font-bold
            mb-4
          "
          >
            ارتباط با ما
          </h3>

          <p className="text-gray-300 mb-3">☎ 021-00000000</p>

          <p className="text-gray-300">✉ info@golestan.com</p>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
        border-t
        border-gray-700
        text-center
        py-5
        text-gray-400
        text-sm
      "
      >
        © 2026 Golestan Tea | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
