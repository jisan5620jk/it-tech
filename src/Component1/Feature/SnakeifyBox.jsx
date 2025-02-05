/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const SnakeifyBox = ({ className }) => {
  useEffect(() => {
    const boxes = document.querySelectorAll(`.${className}`);
    boxes.forEach((box) => {
      const overlay = box.querySelector('.overlay');

      const handleMouseEnter = (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = box.offsetWidth + 'px';
        overlay.style.height = box.offsetHeight + 'px';

        if (x > box.offsetWidth - 50) {
          overlay.style.left = box.offsetWidth + 'px';
        } else if (x < 50) {
          overlay.style.left = -box.offsetWidth + 'px';
        } else if (y > box.offsetHeight - 50) {
          overlay.style.top = box.offsetHeight + 'px';
        } else if (y < 50) {
          overlay.style.top = -box.offsetHeight + 'px';
        }

        overlay.style.transition = 'top 500ms, left 500ms';
        overlay.style.top = '0';
        overlay.style.left = '0';
      };

      const handleMouseLeave = (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;

        if (x <= 0) {
          overlay.style.left = -box.offsetWidth + 'px';
        } else if (x >= box.offsetWidth) {
          overlay.style.left = box.offsetWidth + 'px';
        } else if (y <= 0) {
          overlay.style.top = -box.offsetHeight + 'px';
        } else if (y >= box.offsetHeight) {
          overlay.style.top = box.offsetHeight + 'px';
        }

        overlay.style.transition = 'top 500ms, left 500ms';
      };

      box.addEventListener('mouseenter', handleMouseEnter);
      box.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        box.removeEventListener('mouseenter', handleMouseEnter);
        box.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [className]);

  return (
    <div className={className}>
      <div className='overlay'></div>
    </div>
  );
};

export default SnakeifyBox;
