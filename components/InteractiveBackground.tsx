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
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Contact",
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
                left-1/2
                z-50
                -translate-x-1/2
                rounded-full
                border
                border-white/10
                bg-black/30
                px-6
                py-3
                backdrop-blur-xl
                shadow-2xl
            "
        >
            <div className="flex items-center gap-6">
                {/* Add the new navigation item as the first element */}
                <a
                    href="#home"
                    className="group inline-flex items-center gap-3"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition group-hover:border-white/20 group-hover:bg-white/10">
                        {/* <Image src="/aditya.jpeg" alt="Aditya Kumar" fill priority className="object-cover" /> */}
                    </span>
                    <span>
                        <span className="block text-sm font-semibold text-white">
                            Aditya Kumar
                        </span>
                        <span className="block text-xs text-white/45">
                            Software Development Engineer
                        </span>
                    </span>
                </a>

                {items.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="
                            text-sm
                            text-white/60
                            transition
                            hover:text-white
                        "
                    >
                        {item}
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