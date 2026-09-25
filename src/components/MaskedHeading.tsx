import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MaskedHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  lines: React.ReactNode[];
  delay?: number;
  stagger?: number;
  isHero?: boolean;
}

/**
 * MaskedHeading Component
 * Creatix style Masked Line Reveal:
 * - Triggers cleanly when scrolled into view (useInView with once: true)
 * - Lines rise up from behind the overflow-hidden mask
 * - Cubic-bezier: [0.16, 1, 0.3, 1] (GSAP power4.out) with staggered delays
 */
export const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  as: Tag = 'h2',
  className = '',
  lines,
  delay = 0.05,
  stagger = 0.14,
  isHero = false,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3, // Başlığın %30'u ekrana girdiği anda animasyon başlar
    margin: '0px 0px -50px 0px',
  });

  // Hero bölümü sayfa açılışında, diğer tüm bölümler ise ekrana kaydırıldığında tetiklenir
  const isRevealed = isHero ? true : isInView;

  return (
    <Tag ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          className="char-mask block overflow-hidden pt-1 -mt-1 pb-1.5 -mb-1.5 pr-8 -mr-8"
        >
          <motion.span
            className="char-inner inline-block will-change-transform pr-8 -mr-8"
            initial={{ y: '105%', opacity: 0 }}
            animate={
              isRevealed
                ? { y: '0%', opacity: 1 }
                : { y: '105%', opacity: 0 }
            }
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
              delay: isHero ? delay + index * stagger : 0.08 + index * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
