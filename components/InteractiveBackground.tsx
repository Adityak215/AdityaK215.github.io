"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
  ReactNode,
} from "react";

import { gsap } from "gsap";



/* =========================================================
   MAIN BACKGROUND
========================================================= */

export default function InteractiveBackground() {
  const lensRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const bgX = useTransform(smoothX, [0, 1920], [-40, 40]);
  const bgY = useTransform(smoothY, [0, 1080], [-40, 40]);

  useEffect(() => {
    if (!lensRef.current) return;

    const xTo = gsap.quickTo(lensRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(lensRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#060816]">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
        }}
        className="absolute inset-[-5%]"
      >
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            scale-110
            opacity-30
          "
          style={{
            backgroundImage: "url('/vader.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#060816]/80" />

        {/* RADIAL ATMOSPHERE */}
        <div
          className="
            absolute
            inset-0
            opacity-50
          "
          style={{
            background:
              "radial-gradient(circle at top, rgba(255,70,70,0.18), transparent 45%)",
          }}
        />
      </motion.div>

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLASS LENS */}
      <div
        ref={lensRef}
        className="
          absolute
          top-0
          left-0
          w-85
          h-85
          rounded-full
          pointer-events-none
          -translate-x-1/2
          -translate-y-1/2"
          // border
          // border-white/10
          // overflow-hidden
          // backdrop-blur-2xl
          // shadow-[0_0_120px_rgba(255,70,70,0.18)]
        // "
      >

        {/* INNER LIGHT */}
        <div
          className="
            absolute
            inset-0
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,70,70,0.15), transparent 70%)",
          }}
        />

        {/* SPECULAR HIGHLIGHT */}
        <div
          className="
            absolute
            top-8
            left-8
            w-24
            h-24
            rounded-full
            blur-2xl"
          //   bg-white/10
          // "
        />

        {/* CHROMATIC EDGE */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            border-red-400/10
          "
        />
      </div>
    </div>
  );
}



/* =========================================================
   MAGNETIC BUTTON
========================================================= */

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function MagneticButton({
  children,
  className = "",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const reset = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1,0.3)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        transition-all
        duration-300
        will-change-transform
        ${className}
      `}
    >
      {children}
    </a>
  );
}



/* =========================================================
   FLOATING NAVBAR
========================================================= */


export function FloatingNavbar() {
    const items = [
        {
            label: "About",
            href: "#about",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
                    <path d="M6 20.5c0-2.5 2-4.5 6-4.5s6 2 6 4.5" />
                </svg>
            ),
        },
        {
            label: "Skills",
            href: "#skills",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <path d="M12 3v18" />
                    <path d="M5 12h14" />
                    <path d="M7.5 7.5l9 9" />
                    <path d="M16.5 7.5l-9 9" />
                </svg>
            ),
        },
        {
            label: "Experience",
            href: "#experience",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <rect x="3" y="7" width="18" height="14" rx="2" />
                    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                </svg>
            ),
        },
        {
            label: "Projects",
            href: "#projects",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <path d="M4 6h16" />
                    <path d="M4 10h16" />
                    <path d="M4 14h8" />
                    <path d="M4 18h8" />
                </svg>
            ),
        },
        {
            label: "Contact",
            href: "#contact",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <path d="M4 5h16v14H4z" />
                    <path d="M4 5l8 7 8-7" />
                </svg>
            ),
        },
    ];

    return (
        <motion.nav
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
            }}
            className="
                fixed
                top-6
                inset-x-3
                z-50
                rounded-full
                border
                border-white/10
                bg-black/30
                px-3
                py-2
                backdrop-blur-xl
                shadow-2xl
                lg:left-1/2
                lg:inset-x-auto
                lg:-translate-x-1/2
                lg:px-6
                lg:py-2
                lg:max-w-4xl
            "
        >
            <div className="flex min-w-0 flex-nowrap items-center justify-between gap-2 overflow-x-auto lg:flex-wrap lg:justify-center lg:gap-4 lg:overflow-visible">
                <a
                    href="#home"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition shadow-lg shadow-black/20 hover:border-white/20 hover:bg-white/10 md:px-4 md:py-2"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/30 text-white md:h-10 md:w-10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
                            <path d="M6 20.5c0-2.5 2-4.5 6-4.5s6 2 6 4.5" />
                        </svg>
                    </span>
                    <span className="hidden lg:block">
                        <span className="block text-sm font-semibold text-white">Aditya Kumar</span>
                        <span className="block text-xs text-white/45">Software Development Engineer</span>
                    </span>
                </a>

                {items.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="inline-flex flex-1 min-w-[2rem] items-center justify-center rounded-full border border-white/10 bg-white/5 px-2 py-2 text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white lg:flex-none lg:min-w-[initial] lg:px-4 lg:py-2"
                    >
                        <span className="block lg:hidden">{item.icon}</span>
                        <span className="hidden text-sm lg:block">{item.label}</span>
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}



/* =========================================================
   SECTION REVEAL
========================================================= */

type RevealProps = {
  children: ReactNode;
};

export function Reveal({
  children,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}



/* =========================================================
   PARALLAX SECTION WRAPPER
========================================================= */

type ParallaxProps = {
  children: ReactNode;
};

export function ParallaxSection({
  children,
}: ParallaxProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}