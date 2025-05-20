import React from "react";
import { NavLink } from "react-router-dom";

const CarouselDefault = () => {
  const slides = [
    {
      id: 1,
      image: "/Slider-1.avif",
      title: "Welcome to Our Marketplace",
      description: "Find top freelancers and post tasks easily.",
      button: "Get Started",
      link: "/browse-tasks",
    },
    {
      id: 2,
      image: "/Slider-2.avif",
      title: "Post Your First Task Today",
      description: "Let skilled freelancers handle the work for you.",
      button: "Post Task",
      link: "/add-task",
    },
    {
      id: 3,
      image: "/Slider-3.avif",
      title: "Hire Talented Freelancers",
      description: "Browse portfolios and find the right person for the job.",
      button: "Browse Freelancers",
      link: "/browse-tasks",
    },
  ];

  return (
    <div className="container mx-auto mt-5">
      <div className="carousel w-full rounded-xl overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full"
          >
            <img
              src={slide.image}
              className="w-full h-[60vh] object-cover brightness-75"
              alt={`Slide ${slide.id}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0   bg-opacity-100 flex items-center justify-center text-white px-4">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
                <NavLink
                  to={slide.link}
                  className="btn bg-white text-black hover:bg-gray-300"
                >
                  {slide.button}
                </NavLink>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${i === 0 ? slides.length : i}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${i + 2 > slides.length ? 1 : i + 2}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselDefault;
