import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Side scroll indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative h-32 w-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"
            style={{ height: '100%', scaleY: scrollYProgress, transformOrigin: 'top' }}
          />
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
