"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesCoreProps extends React.HTMLProps<HTMLCanvasElement> {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className,
  particleColor = "#FFF",
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (context && dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      animate();
    }
  }, [context, dimensions]);

  const initParticles = () => {
    const particlesArray = [];
    for (let i = 0; i < particleDensity; i++) {
      particlesArray.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      });
    }
    setParticles(particlesArray);
  };

  const animate = () => {
    if (!context || !canvasRef.current) return;

    context.clearRect(0, 0, dimensions.width, dimensions.height);
    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x > dimensions.width) particle.x = 0;
      if (particle.x < 0) particle.x = dimensions.width;
      if (particle.y > dimensions.height) particle.y = 0;
      if (particle.y < 0) particle.y = dimensions.height;

      context.fillStyle = particleColor;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(animate);
  };

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={cn("absolute inset-0", className)}
      style={{ background }}
      {...props}
    />
  );
}; 