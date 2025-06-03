"use client";

import { useState, useEffect } from "react";

export default function StickyVideoBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkIsMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      );
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, { passive: true });

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {!isMobile ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover will-change-auto"
          poster="/images/background/hero-video-poster.jpg"
          preload="metadata"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      ) : (
        // Use static image on mobile for better performance
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/background/hero-video-poster.jpg)",
            willChange: "auto",
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
