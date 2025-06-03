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
    <div
      className={`${isMobile ? "absolute top-0 left-0 w-full h-screen" : "fixed inset-0 w-full h-full"} z-0 pointer-events-none`}
      style={{
        overflow: "hidden",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {!isMobile ? (
        // Desktop: Fixed sticky video background that stays in place
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/background/hero-video-bg.jpg"
          preload="metadata"
          style={{
            pointerEvents: "none",
            transform: "translateZ(0)", // Hardware acceleration for desktop
            willChange: "transform",
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      ) : (
        // Mobile: Video that scrolls naturally with the content - covers only hero section
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/background/hero-video-bg.jpg"
          preload="metadata"
          style={{
            pointerEvents: "none",
            // No hardware acceleration on mobile to prevent scroll issues
            transform: "none",
            willChange: "auto",
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0 bg-black/40"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
