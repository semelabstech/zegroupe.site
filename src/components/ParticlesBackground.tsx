"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030303]">
      {/* Deep Apple Pro Ambient Glows - Static and Optimized */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0A3D2A] blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#2E0B5A] blur-[170px] opacity-15 pointer-events-none" />
      <div className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-[#D4AF37] blur-[160px] opacity-10 pointer-events-none" />

      {/* Subtle Dust Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "slow",
                },
              },
              modes: {
                slow: {
                  factor: 3,
                  radius: 150,
                },
              },
            },
            particles: {
              color: {
                value: ["#D4AF37", "#ffffff", "#0A3D2A"],
              },
              links: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 0.1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 30, // Reduced from 60 to drastically improve performance
              },
              opacity: {
                value: { min: 0.1, max: 0.4 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 2 },
              },
            },
            detectRetina: true, // Keep retina for pro look, other optims are enough
          }}
          className="absolute inset-0 z-0"
        />
      )}
    </div>
  );
}
