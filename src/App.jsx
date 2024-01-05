import { useState } from "react";
import testimonialData from "./data/testimonials";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import quote from "./assets/images/pattern-quotes.svg";
import curve from "./assets/images/pattern-curve.svg";
import patternBg from "./assets/images/pattern-bg.svg";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };
  return (
    <div className="mx-auto w-full md:h-screen h-full  grid place-content-center relative">
      <div className="flex flex-col-reverse md:flex-row md:gap-0 gap-6 items-center justify-center max-w-[1080px] md:p-4 p-12 z-40 md:mb-4 mb-24">
        <div className="xl:w-[60%] lg:w-[60%] md:w-[40%] relative">
          <div className="font-inter md:relative lg:left-[10%] md:left-[8%] text-center md:text-left z-20">
            <p className="md:text-[24px] text-[18px] font-[500] text-darkBlue/70 transition duration-500 ease-in">
              “ {testimonialData[currentIndex].text} ”
            </p>
            <div className="flex md:flex-row flex-col gap-1 font-inter mt-6 transition duration-500 ease-in">
              <p className="font-bold text-darkBlue">
                {" "}
                {testimonialData[currentIndex].name}{" "}
              </p>
              <p className="text-grayishBlue font-semibold">
                {testimonialData[currentIndex].role}
              </p>
            </div>
          </div>
          <img
            src={quote}
            alt="/"
            className="absolute z-10 md:top-[-2rem] top-[-3rem] md:left-[40%]  left-[40%] md:scale-0 scale-[0.65]"
          />
        </div>
        <div className="relative">
          <div className="md:p-6 p-8 z-20">
            <div>
              <img
                src={testimonialData[currentIndex].image}
                alt={testimonialData[currentIndex].name}
                className="rounded-md"
              />
            </div>
            <div className="bg-white rounded-full md:px-4 px-2 py-4 shadow-xl md:w-[20%] w-[30%] flex items-center justify-between relative top-[-2rem] md:left-[10%] left-[35%]">
              <button onClick={prevTestimonial}>
                <FaChevronLeft />
              </button>
              <button onClick={nextTestimonial}>
                <FaChevronRight />
              </button>
            </div>
          </div>
          <img
            src={patternBg}
            alt="/"
            className="absolute z-[-2] top-0 md:scale-125"
          />
        </div>
      </div>
      <img src={curve} alt="/" className="absolute  bottom-0 left-0 z-[-2]" />
    </div>
  );
}

export default App;
