import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { scrollYProgress } = useScroll();

  // Stunning travel videos from Pexels (free to use)
  const videos = [
    {
      url: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
      label: 'Big Sur, USA',
      duration: 12000
    },
    {
      url: 'https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4',
      label: 'Cappadocia, Turkey',
      duration: 12000
    },
    {
      url: 'https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4',
      label: 'Ubud, Indonesia',
      duration: 12000
    },
    {
      url: 'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
      label: 'Great Ocean Road, Australia',
      duration: 9500
    },
    {
      url: 'https://videos.pexels.com/video-files/2098989/2098989-hd_1920_1080_30fps.mp4',
      label: 'Seljalandsfoss, Iceland',
      duration: 12000
    },
  ];

  // Smooth opacity transition based on scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.6, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    // Cycle through videos with smooth transitions using per-video duration
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 1500); // Crossfade duration
    }, videos[currentVideo].duration);

    return () => clearTimeout(timeout);
  }, [currentVideo, videos]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  // Preload next video
  useEffect(() => {
    const nextIndex = (currentVideo + 1) % videos.length;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = videos[nextIndex].url;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [currentVideo, videos]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Video Element with Crossfade */}
      <motion.div style={{ scale }} className="w-full h-full relative">
        <AnimatePresence mode="sync">
          <motion.video
            key={currentVideo}
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={videos[currentVideo].url}
          />
        </AnimatePresence>
      </motion.div>

      {/* Destination Label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 right-8 z-20 hidden lg:block"
        >
          <div className="glass px-4 py-2 rounded-full">
            <p className="text-white/60 text-xs uppercase tracking-widest">
              Now showing: <span className="text-gold-400">{videos[currentVideo].label}</span>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Video Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentVideo(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentVideo
                ? 'w-8 bg-gradient-to-r from-gold-400 to-gold-600'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <motion.div
        className="absolute inset-0 bg-luxury-darker"
        style={{ opacity: overlayOpacity }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-luxury-darker to-transparent" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-luxury-darker to-transparent" />

      {/* Side vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
           style={{
             background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.4) 100%)'
           }}
      />

      {/* Gold tint overlay */}
      <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay pointer-events-none" />
    </div>
  );
};

export default VideoBackground;
