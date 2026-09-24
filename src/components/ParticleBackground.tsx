"use client";

import { useEffect, useRef } from "react";

type Particle = {
  arm: number;
  radius: number;
  angle: number;
  speed: number;
  size: number;
  alpha: number;
  phase: number;
  depth: number;
  seed: number;
  lane: number;
};

type GalaxyLabel = {
  id: string;
  text: string;
  filled: boolean;
  outerX: number;
  outerY: number;
  innerX: number;
  innerY: number;
  side: "left" | "right";
};

const GALAXY_LABELS: GalaxyLabel[] = [
  {
    id: "ideas",
    text: "IDEAS",
    filled: false,
    outerX: 40,
    outerY: 17,
    innerX: 52,
    innerY: 17,
    side: "right",
  },
  {
    id: "technology",
    text: "TECHNOLOGY",
    filled: false,
    outerX: 73.5,
    outerY: 29,
    innerX: 63,
    innerY: 29,
    side: "left",
  },
  {
    id: "people",
    text: "PEOPLE",
    filled: true,
    outerX: 36.5,
    outerY: 54,
    innerX: 47,
    innerY: 54,
    side: "right",
  },
  {
    id: "impact",
    text: "IMPACT",
    filled: false,
    outerX: 55,
    outerY: 74,
    innerX: 65,
    innerY: 74,
    side: "right",
  },
];

const clamp = (
  value: number,
  min: number,
  max: number
) => Math.max(min, Math.min(max, value));

const lerp = (
  current: number,
  target: number,
  amount: number
) => current + (target - current) * amount;

export default function ParticleBackground() {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const labelsRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    let animationFrame = 0;

    let mouseX = -10000;
    let mouseY = -10000;

    let targetScroll = 0;
    let smoothScroll = 0;

    let lastTime = performance.now();

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const ARM_COUNT = 4;

    const PARTICLE_COUNT =
      prefersReducedMotion ? 600 : 2600;

    const particles: Particle[] = [];

    /*
     * ------------------------------------------------------------
     * CREATE PARTICLES
     * ------------------------------------------------------------
     */

    for (
      let i = 0;
      i < PARTICLE_COUNT;
      i++
    ) {
      const arm =
        i % ARM_COUNT;

      const radius =
        Math.pow(
          Math.random(),
          0.78
        );

      particles.push({
        arm,

        radius,

        angle:
          Math.random() *
          Math.PI *
          2,

        speed:
          0.00012 +
          Math.random() *
            0.0003,

        size:
          Math.random() < 0.92
            ? 0.55 +
              Math.random() *
                0.9
            : 1.4 +
              Math.random() *
                1.8,

        alpha:
          0.5 +
          Math.random() *
            0.45,

        phase:
          Math.random() *
          Math.PI *
          2,

        depth:
          0.25 +
          Math.random() *
            0.75,

        seed:
          Math.random(),

        lane:
          (Math.random() -
            0.5) *
          1.5,
      });
    }

    /*
     * ------------------------------------------------------------
     * RESIZE
     * ------------------------------------------------------------
     */

    const resize = () => {
      width =
        window.innerWidth;

      height =
        window.innerHeight;

      dpr = Math.min(
        window.devicePixelRatio ||
          1,
        2
      );

      canvas.width =
        Math.floor(
          width * dpr
        );

      canvas.height =
        Math.floor(
          height * dpr
        );

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      /*
       * Reset the transform before applying
       * the DPR transform.
       */
      ctx.setTransform(
        1,
        0,
        0,
        1,
        0,
        0
      );

      ctx.scale(
        dpr,
        dpr
      );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    /*
     * ------------------------------------------------------------
     * POINTER
     * ------------------------------------------------------------
     */

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      mouseX =
        event.clientX;

      mouseY =
        event.clientY;
    };

    const handlePointerLeave =
      () => {
        mouseX = -10000;
        mouseY = -10000;
      };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    /*
     * ------------------------------------------------------------
     * SCROLL
     * ------------------------------------------------------------
     */

    const handleScroll = () => {
      const maxScroll =
        Math.max(
          document.documentElement
            .scrollHeight -
            window.innerHeight,
          1
        );

      targetScroll =
        clamp(
          window.scrollY /
            maxScroll,
          0,
          1
        );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    /*
     * ------------------------------------------------------------
     * ANIMATION
     * ------------------------------------------------------------
     */

    const startTime =
      performance.now();

    const render = (
      now: number
    ) => {
      const elapsed =
        now - startTime;

      const delta =
        Math.min(
          now - lastTime,
          32
        );

      lastTime = now;

      smoothScroll =
        lerp(
          smoothScroll,
          targetScroll,
          0.06
        );

      /*
       * LABELS
       */

      if (labelsRef.current) {
        const opacity =
          clamp(
            1 -
              smoothScroll *
                1.7,
            0,
            1
          );

        labelsRef.current.style.opacity =
          String(opacity);

        labelsRef.current.style.transform =
          `translateY(${
            -smoothScroll * 45
          }px)`;
      }

      /*
       * Clear canvas.
       */

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * ----------------------------------------------------------
       * GALAXY CENTER
       * ----------------------------------------------------------
       */

      const heroCenterX =
        width * 0.67;

      const heroCenterY =
        height * 0.43;

      const pageCenterX =
        width * 0.5;

      const pageCenterY =
        height * 0.5;

      const centerX =
        lerp(
          heroCenterX,
          pageCenterX,
          smoothScroll * 0.75
        );

      const centerY =
        lerp(
          heroCenterY,
          pageCenterY,
          smoothScroll * 0.7
        );

      /*
       * ----------------------------------------------------------
       * GALAXY SIZE
       * ----------------------------------------------------------
       */

      const base =
        Math.min(
          width,
          height
        );

      const spread =
        0.95 +
        smoothScroll * 1.7;

      const rotation =
        elapsed *
        0.000004;

      /*
       * ----------------------------------------------------------
       * PARTICLES
       * ----------------------------------------------------------
       */

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        const p =
          particles[i];

        /*
         * Movement.
         */

        p.angle +=
          p.speed *
          delta;

        /*
         * Spiral arm.
         */

        const armAngle =
          (Math.PI * 2) /
            ARM_COUNT *
          p.arm;

        /*
         * Strong flowing spiral.
         */

        const spiral =
          p.radius *
          5.8;

        const wave =
          Math.sin(
            p.radius * 13 +
              p.arm * 1.8
          ) *
          0.18;

        const angle =
          p.angle +
          armAngle +
          spiral +
          wave +
          rotation;

        /*
         * Radial distance.
         */

        const distance =
          p.radius *
          base *
          0.62 *
          spread;

        /*
         * Flatten galaxy slightly.
         */

        const vertical =
          0.72 +
          p.radius * 0.2;

        let x =
          Math.cos(angle) *
          distance;

        let y =
          Math.sin(angle) *
          distance *
          vertical;

        /*
         * Stream width.
         */

        const laneWidth =
          8 +
          p.radius * 35;

        const laneOffset =
          p.lane *
          laneWidth;

        x +=
          -Math.sin(angle) *
          laneOffset;

        y +=
          Math.cos(angle) *
          laneOffset;

        /*
         * Organic turbulence.
         */

        x +=
          Math.sin(
            elapsed *
              0.00025 +
              p.phase +
              p.radius * 10
          ) *
          (2 +
            p.radius * 12);

        y +=
          Math.cos(
            elapsed *
              0.00018 +
              p.seed * 20
          ) *
          (2 +
            p.radius * 10);

        /*
         * Depth.
         */

        const depth =
          0.78 +
          p.depth * 0.3;

        x *= depth;
        y *= depth;

        /*
         * Screen position.
         */

        let sx =
          centerX + x;

        let sy =
          centerY + y;

        /*
         * --------------------------------------------------------
         * CURSOR INTERACTION
         * --------------------------------------------------------
         */

        if (
          !prefersReducedMotion
        ) {
          const dx =
            sx - mouseX;

          const dy =
            sy - mouseY;

          const distanceToMouse =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          const radius =
            190;

          if (
            distanceToMouse <
            radius
          ) {
            const influence =
              Math.pow(
                1 -
                  distanceToMouse /
                    radius,
                2
              );

            const safe =
              Math.max(
                distanceToMouse,
                0.001
              );

            const push =
              influence *
              40;

            sx +=
              (dx / safe) *
              push;

            sy +=
              (dy / safe) *
              push;

            const swirl =
              influence * 25;

            sx +=
              (-dy / safe) *
              swirl;

            sy +=
              (dx / safe) *
              swirl;
          }
        }

        /*
         * --------------------------------------------------------
         * FORMATION
         * --------------------------------------------------------
         *
         * Particles form quickly from the center.
         */

        const delay =
          p.seed * 500;

        const entrance =
          clamp(
            (elapsed -
              delay) /
              1200,
            0,
            1
          );

        const formation =
          entrance *
          entrance *
          (3 -
            2 * entrance);

        sx =
          lerp(
            centerX,
            sx,
            formation
          );

        sy =
          lerp(
            centerY,
            sy,
            formation
          );

        /*
         * --------------------------------------------------------
         * VISIBILITY
         * --------------------------------------------------------
         */

        const pulse =
          0.9 +
          Math.sin(
            elapsed *
              0.001 +
              p.phase
          ) *
            0.1;

        const alpha =
          p.alpha *
          pulse *
          formation;

        const size =
          p.size *
          (0.9 +
            p.depth * 0.5);

        /*
         * --------------------------------------------------------
         * GLOW
         * --------------------------------------------------------
         */

        if (
          size > 1.25
        ) {
          const glowRadius =
            size * 6;

          const glow =
            ctx.createRadialGradient(
              sx,
              sy,
              0,
              sx,
              sy,
              glowRadius
            );

          glow.addColorStop(
            0,
            `rgba(50, 95, 205, ${
              alpha * 0.45
            })`
          );

          glow.addColorStop(
            0.35,
            `rgba(65, 110, 215, ${
              alpha * 0.18
            })`
          );

          glow.addColorStop(
            1,
            "rgba(65, 110, 215, 0)"
          );

          ctx.fillStyle =
            glow;

          ctx.beginPath();

          ctx.arc(
            sx,
            sy,
            glowRadius,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }

        /*
         * --------------------------------------------------------
         * PARTICLE
         * --------------------------------------------------------
         */

        ctx.beginPath();

        ctx.arc(
          sx,
          sy,
          size,
          0,
          Math.PI * 2
        );

        /*
         * Dark blue.
         */

        const r =
          p.depth > 0.7
            ? 35
            : 55;

        const g =
          p.depth > 0.7
            ? 72
            : 96;

        ctx.fillStyle =
          `rgba(${r}, ${g}, 185, ${Math.min(
            alpha,
            0.95
          )})`;

        ctx.fill();

        /*
         * --------------------------------------------------------
         * OCCASIONAL TRAIL
         * --------------------------------------------------------
         */

        if (
          size > 1.5 &&
          formation > 0.2
        ) {
          const trailLength =
            5 +
            p.depth * 12;

          const tx =
            sx -
            Math.cos(angle) *
              trailLength;

          const ty =
            sy -
            Math.sin(angle) *
              trailLength *
              0.55;

          const gradient =
            ctx.createLinearGradient(
              tx,
              ty,
              sx,
              sy
            );

          gradient.addColorStop(
            0,
            "rgba(45, 80, 160, 0)"
          );

          gradient.addColorStop(
            1,
            `rgba(45, 80, 170, ${
              alpha * 0.4
            })`
          );

          ctx.strokeStyle =
            gradient;

          ctx.lineWidth =
            Math.max(
              0.3,
              size * 0.4
            );

          ctx.beginPath();

          ctx.moveTo(
            tx,
            ty
          );

          ctx.lineTo(
            sx,
            sy
          );

          ctx.stroke();
        }
      }

      /*
       * ----------------------------------------------------------
       * CENTER GLOW
       * ----------------------------------------------------------
       */

      const coreRadius =
        70 +
        smoothScroll * 100;

      const core =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          coreRadius
        );

      core.addColorStop(
        0,
        "rgba(55, 105, 215, 0.13)"
      );

      core.addColorStop(
        0.35,
        "rgba(70, 120, 220, 0.055)"
      );

      core.addColorStop(
        1,
        "rgba(70, 120, 220, 0)"
      );

      ctx.fillStyle =
        core;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        coreRadius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * ----------------------------------------------------------
       * NEXT FRAME
       * ----------------------------------------------------------
       */

      animationFrame =
        requestAnimationFrame(
          render
        );
    };

    animationFrame =
      requestAnimationFrame(
        render
      );

    /*
     * ------------------------------------------------------------
     * CLEANUP
     * ------------------------------------------------------------
     */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* PARTICLE CANVAS */}

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-[5]
          h-screen
          w-screen
        "
        style={{
          display: "block",
          opacity: 1,
        }}
      />

      {/* LABELS */}

      <div
        ref={labelsRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-[6]
          hidden
          md:block
        "
      >
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {GALAXY_LABELS.map(
            (label) => (
              <line
                key={`line-${label.id}`}
                x1={`${label.outerX}%`}
                y1={`${label.outerY}%`}
                x2={`${label.innerX}%`}
                y2={`${label.innerY}%`}
                stroke="rgba(40, 60, 110, 0.32)"
                strokeWidth={1}
              />
            )
          )}
        </svg>

        {GALAXY_LABELS.map(
          (label) => (
            <div
              key={label.id}
              className="absolute flex -translate-y-1/2 items-center gap-2"
              style={{
                left:
                  `${label.outerX}%`,
                top:
                  `${label.outerY}%`,
                transform:
                  label.side ===
                  "right"
                    ? "translate(-100%, -50%)"
                    : "translate(0%, -50%)",
                flexDirection:
                  label.side ===
                  "right"
                    ? "row"
                    : "row-reverse",
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor:
                    label.filled
                      ? "rgb(48, 91, 190)"
                      : "transparent",
                  border:
                    label.filled
                      ? "none"
                      : "1.5px solid rgb(48, 91, 190)",
                }}
              />

              <span className="whitespace-nowrap text-[11px] font-medium tracking-[0.18em] text-slate-700">
                {label.text}
              </span>
            </div>
          )
        )}
      </div>
    </>
  );
}