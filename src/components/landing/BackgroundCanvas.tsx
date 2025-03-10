import React, { useEffect, useRef } from "react";

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#1e3c72", "#2a5298", "#A5A299 ", "#283D3B ", "#39393A"];
    const blobs: any[] = [];

    for (let i = 0; i < 5; i++) {
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 200 + 150,
        color: colors[i],
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.5;

      blobs.forEach((blob) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.r,
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();

        blob.x += blob.dx;
        blob.y += blob.dy;

        if (blob.x - blob.r < 0 || blob.x + blob.r > width) blob.dx *= -1;
        if (blob.y - blob.r < 0 || blob.y + blob.r > height) blob.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default BackgroundCanvas;
