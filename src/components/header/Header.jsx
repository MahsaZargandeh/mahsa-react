import { useState } from "react";
import Nav from "../Navigation/Nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4">
      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}
        <h1
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-red-500
        "
        >
          گلستان
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            md:hidden
            mt-5
            px-5
            pb-5
          "
        >
          <Nav />
        </div>
      )}
    </header>
  );
};

export default Header;
