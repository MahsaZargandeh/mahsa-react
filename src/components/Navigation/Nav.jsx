import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="
flex
flex-col
md:flex-row
gap-5
items-center
text-white
"
    >
      <Link to="/" className="hover:text-red-500 transition">
        صفحه اصلی
      </Link>

      <Link to="/products" className="hover:text-red-500 transition">
        محصولات
      </Link>

      <Link to="/contact" className="hover:text-red-500 transition">
        تماس با ما
      </Link>

      <Link to="#" className="hover:text-red-500 transition">
        غذاها
      </Link>

      <Link to="#" className="hover:text-red-500 transition">
        قرعه کشی
      </Link>
    </nav>
  );
};

export default Nav;
