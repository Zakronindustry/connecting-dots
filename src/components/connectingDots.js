import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const DotsContainer = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const ConnectingDots = () => {
  useEffect(() => {
    const canvas = document.getElementById('connecting-dots');
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dots = [];
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFF333'];
    const mouse = { x: null, y: null, radius: 150 };

    canvas.width = width;
    canvas.height = height;

    class Dot {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    function connect() {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i; j < dots.length; j++) {
          const distance =
            (dots[i].x - dots[j].x) ** 2 + (dots[i].y - dots[j].y) ** 2;
          if (distance < 6500) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 2500})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      dots.length = 0;
      for (let i = 0; i < 100; i++) {
        const radius = 2;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        dots.push(new Dot(x, y, dx, dy, radius, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => dot.update());
      connect();
    }

    canvas.addEventListener('mousemove', event => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    init();
    animate();
  }, []);

  return <DotsContainer id="connecting-dots" />;
};

export default ConnectingDots;
