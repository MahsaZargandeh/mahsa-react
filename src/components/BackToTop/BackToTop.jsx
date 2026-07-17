import { useEffect, useState } from "react";

const BackToTop = () => {

  const [show, setShow] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 400){
        setShow(true);
      }else{
        setShow(false);
      }
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);



  const goTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };


  return (

    show && (

      <button
        onClick={goTop}
        className="
        fixed
        bottom-6
        right-6
        bg-red-600
        text-white
        w-12
        h-12
        rounded-full
        shadow-lg
        hover:bg-red-700
        transition
        "
      >
        ↑
      </button>

    )

  );
};


export default BackToTop;