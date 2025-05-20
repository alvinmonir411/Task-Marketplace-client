import React from "react";
import { NavLink } from "react-router-dom";

const CarouselDefault = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/Slider-1.avif" className="w-full h-[60vh] object-cover" />
          <div className="absolute text-center left-1/3 top-1/3 text-white space-y-4 max-w-">
            <h2 className="text-4xl font-bold">Welcome to Our Marketplace</h2>
            <p className="text-lg">
              Find top freelancers and post tasks easily.
            </p>
            <NavLink
              to="/browse-tasks"
              className="btn bg-white text-black hover:bg-gray-300"
            >
              Get Started
            </NavLink>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/Slider-2.avif" className="w-full h-[60vh] object-cover" />
          <div className="absolute text-center left-1/3 top-1/3 text-white space-y-4 max-w-lg">
            <h2 className="text-3xl font-bold">Post Your First Task Today</h2>
            <p className="text-lg">
              Let skilled freelancers handle the work for you.
            </p>
            <button className="btn bg-white text-black hover:bg-gray-300">
              Post Task
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/Slider-3.webp" className="w-full h-[60vh] object-cover" />
          <div className="absolute text-center left-1/3 top-1/3 text-white space-y-4 max-w-lg">
            <h2 className="text-3xl font-bold">Hire Talented Freelancers</h2>
            <p className="text-lg">
              Browse portfolios and find the right person for the job.
            </p>
            <button className="btn bg-white text-black hover:bg-gray-300">
              Browse Freelancers
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute text-center left-1/3 top-1/3 text-white space-y-4 max-w-lg">
            <h2 className="text-3xl font-bold">Get Work Done Efficiently</h2>
            <p className="text-lg">
              Our platform makes freelancing fast and easy.
            </p>
            <button className="btn bg-white text-black hover:bg-gray-300">
              Explore Now
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDefault;
