"use client";
import React, { useRef, useEffect } from "react";
import "./index.css";

const StarCanvas = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const shootingStars = useRef([]);
  const numLayers = 5; // More parallax depth

  const createStar = (width, height, layer) => {
    // Randomly assign color: 90% white, 5% blue, 5% red
    let color = 'white';
    const rand = Math.random();
    if (rand < 0.05) color = 'red';
    else if (rand < 0.10) color = 'blue';

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      deltaAlpha: Math.random() * 0.02 + 0.005,
      layer,
      color,
    };
  };


  const createStars = (count, width, height) => {
    const stars = [];
    for (let layer = 1; layer <= numLayers; layer++) {
      const layerCount = Math.floor(count / numLayers);
      for (let i = 0; i < layerCount; i++) {
        stars.push(createStar(width, height, layer));
      }
    }
    return stars;
  };

  const spawnShootingStar = (width, height) => {
    shootingStars.current.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.5, // top half
      vx: Math.random() * 6 + 4,
      vy: Math.random() * 2 + 1,
      length: Math.random() * 80 + 100,
      life: 0,
      maxLife: 100,
    });
  };

  const updateAndDrawStars = (ctx, width, height, mouseX, mouseY) => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    for (let star of stars.current) {
      // Flicker
      star.alpha += star.deltaAlpha;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.deltaAlpha = -star.deltaAlpha;
      }

      // Parallax offset
      const offsetX = ((mouseX / width) - 0.5) * (star.layer * 8); // more spread
      const offsetY = ((mouseY / height) - 0.5) * (star.layer * 8); // vertical spread


      ctx.beginPath();
      ctx.arc(star.x + offsetX, star.y + offsetY, star.radius, 0, Math.PI * 2);
      let color;
      if (star.color === 'white') color = `rgba(255, 255, 255, ${star.alpha})`;
      else if (star.color === 'blue') color = `rgba(100, 150, 255, ${star.alpha})`;
      else if (star.color === 'red') color = `rgba(255, 100, 100, ${star.alpha})`;

      ctx.fillStyle = color;

      ctx.fill();
    }

    // Update & draw shooting stars
    for (let i = shootingStars.current.length - 1; i >= 0; i--) {
      const s = shootingStars.current[i];
      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - s.life / s.maxLife})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.length, s.y - s.length * (s.vy / s.vx));
      ctx.stroke();

      s.x += s.vx;
      s.y += s.vy;
      s.life += 1;

      if (s.life > s.maxLife) {
        shootingStars.current.splice(i, 1);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.current = createStars(400, canvas.width, canvas.height); // a few more stars for density
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      updateAndDrawStars(ctx, canvas.width, canvas.height, mouseX, mouseY);
      requestAnimationFrame(animate);
    };

    animate();

    // Teleport 20% of stars every second
    const teleportInterval = setInterval(() => {
      const total = stars.current.length;
      const teleportCount = Math.floor(total * 0.2);
      for (let i = 0; i < teleportCount; i++) {
        const index = Math.floor(Math.random() * total);
        const old = stars.current[index];
        stars.current[index] = createStar(canvas.width, canvas.height, old.layer);
      }
    }, 1000);

    // Spawn shooting stars every 5–10 sec
    const shootingInterval = setInterval(() => {
      spawnShootingStar(canvas.width, canvas.height);
    }, Math.random() * 1500 + 1500);

    return () => {
      clearInterval(teleportInterval);
      clearInterval(shootingInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star-canvas"
    />
  );
};

export default StarCanvas;
