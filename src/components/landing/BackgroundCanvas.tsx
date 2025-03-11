import React, { useEffect, useRef } from "react";

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 降低透明度到 0.05
    const colors = [
      "rgba(30, 58, 138, 0.05)", // 深蓝
      "rgba(37, 99, 235, 0.05)", // 蓝色
      "rgba(59, 130, 246, 0.05)", // 亮蓝
      "rgba(96, 165, 250, 0.05)", // 中蓝
      "rgba(147, 197, 253, 0.05)", // 浅蓝
    ];

    const blobs: any[] = [];

    // 减少气泡数量，减小气泡尺寸
    for (let i = 0; i < 6; i++) {
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 120 + 80, // 减小气泡尺寸
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.5, // 进一步减慢移动速度
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      // 使用更深的背景色来减少累积效果
      ctx.fillStyle = "rgba(17, 24, 39, 0.1)";
      ctx.fillRect(0, 0, width, height);

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
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();

        // 更新位置
        blob.x += blob.dx;
        blob.y += blob.dy;

        // 边界检查
        if (blob.x - blob.r < 0) {
          blob.dx = Math.abs(blob.dx) * 0.8;
        }
        if (blob.x + blob.r > width) {
          blob.dx = -Math.abs(blob.dx) * 0.8;
        }
        if (blob.y - blob.r < 0) {
          blob.dy = Math.abs(blob.dy) * 0.8;
        }
        if (blob.y + blob.r > height) {
          blob.dy = -Math.abs(blob.dy) * 0.8;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{
        background: "transparent",
      }}
    />
  );
};

export default BackgroundCanvas;
