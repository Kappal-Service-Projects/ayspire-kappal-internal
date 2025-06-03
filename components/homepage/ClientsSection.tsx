import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import SectionHeader from "../ui/SectionHeader";

export default function ClientsSection({
  clients,
  sectionRef,
}: {
  clients: string[];
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width < 640) setItemsPerView(1);
      else if (width < 768) setItemsPerView(2);
      else if (width < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Sync dots with manual scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const totalWidth = container.scrollWidth;

      // Calculate progress through the scroll (0 to 1)
      const scrollProgress = scrollLeft / (totalWidth - containerWidth);

      // Calculate current slide based on scroll progress
      const currentIndex = Math.round(scrollProgress * (totalSlides - 1));

      setCurrentSlide(Math.max(0, Math.min(currentIndex, totalSlides - 1)));
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [clients.length, itemsPerView]);

  const totalSlides = Math.max(1, Math.ceil(clients.length / itemsPerView));

  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / clients.length;
      const scrollPosition = slideIndex * itemsPerView * itemWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentSlide(slideIndex);
    }
  };

  const nextSlide = () => {
    const nextIndex = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;

    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;

    scrollToSlide(prevIndex);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-2 sm:px-2 bg-gray-50 dark:bg-slate-900 pb-40`}
    >
      <SectionHeader
        className={`transition-all text-center duration-700 translate-y-2`}
        gradientAnimation={true}
        gradientText=" & Partners"
        primaryText="Our Clients"
        size="md"
      />
      <div className="max-w-6xl mx-auto relative">
        {/* Desktop Arrow Navigation - Hidden on mobile */}
        <button
          aria-label="Previous clients"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
          onClick={prevSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>

        <button
          aria-label="Next clients"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
          onClick={nextSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div className="overflow-hidden px-12 md:px-16">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 items-center justify-start overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-32 min-w-[200px] flex-shrink-0 group"
              >
                <Image
                  alt={`Client ${i + 1}`}
                  className="object-contain h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  height={80}
                  src={logo}
                  width={200}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-cyan-500 dark:bg-cyan-400 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
