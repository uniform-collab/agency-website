"use client";

import React, { useRef, useEffect, useState } from "react";

interface VideoSectionProps {
  videoUrl?: string;
  posterImage?: string;
  muted?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  className?: string;
}

export default function VideoSection({
  videoUrl = "https://res.cloudinary.com/uniform-demos/video/upload/v1752097049/agency-website/854011-hd_1920_1080_30fps_dbt5bx.mp4",
  posterImage,
  muted = true,
  autoplay = false,
  controls = true,
  className = "",
}: VideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasLoaded]);

  const sectionClasses = `py-16 md:py-24 ${className}`;

  return (
    <section className={sectionClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-6xl mx-auto">
          <div 
            ref={containerRef}
            className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-white"
          >
            {isVisible ? (
              <video
                className="w-full h-full object-cover"
                muted={muted}
                autoPlay={autoplay}
                controls={controls}
                poster={posterImage}
                playsInline
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="w-full h-full bg-slate-200 flex items-center justify-center"
                style={{
                  backgroundImage: posterImage ? `url(${posterImage})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!posterImage && (
                  <div className="text-slate-500 text-lg">Loading video...</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
