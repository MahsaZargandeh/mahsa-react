const Contact = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div
        className="
        max-w-6xl
        mx-auto
        px-5
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
      "
      >
        {/* اطلاعات تماس */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
        "
        >
          <h1
            className="
            text-3xl
            font-bold
            text-red-600
            mb-6
          "
          >
            تماس با ما
          </h1>

          <p className="text-gray-600 leading-8">
            برای ارتباط با مجموعه گلستان می‌توانید از راه‌های زیر با ما در تماس
            باشید.
          </p>

          <div className="mt-8 space-y-4">
            <p>📍 آدرس: تهران، دفتر مرکزی</p>

            <p>☎ تلفن: 021-00000000</p>

            <p>✉ ایمیل: info@golestan.com</p>
          </div>
        </div>

        {/* فرم تماس */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
        "
        >
          <input
            type="text"
            placeholder="نام شما"
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-4
            "
          />

          <input
            type="email"
            placeholder="ایمیل"
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-4
            "
          />

          <textarea
            placeholder="پیام شما"
            className="
              w-full
              border
              p-3
              rounded-lg
              h-32
            "
          />

          <button
            className="
              mt-5
              bg-red-600
              text-white
              px-8
              py-3
              rounded-lg
              hover:bg-red-700
              transition
            "
          >
            ارسال پیام
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
