import { useEffect } from 'react';
import gsap from 'gsap';

const Feature = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.portfolio-single-box');

    elements.forEach((el) => {
      const overlay = el.querySelector('.overlay');

      // Helper function to get the mouse position relative to the element.
      function getRelativeMousePos(e) {
        const rect = el.getBoundingClientRect();
        const offsetX = rect.left + window.scrollX;
        const offsetY = rect.top + window.scrollY;
        return {
          x: e.pageX - offsetX,
          y: e.pageY - offsetY,
          width: el.offsetWidth,
          height: el.offsetHeight,
        };
      }

      el.addEventListener('mouseenter', (e) => {
        const pos = getRelativeMousePos(e);
        const inaccuracy = 50;
        let startX = 0,
          startY = 0;

        // Determine the starting position for the overlay based on where the mouse entered.
        if (pos.x > pos.width - inaccuracy) {
          // Entering from the right.
          startX = pos.width;
        } else if (pos.x < inaccuracy) {
          // Entering from the left.
          startX = -pos.width;
        } else if (pos.y > pos.height - inaccuracy) {
          // Entering from the bottom.
          startY = pos.height;
        } else if (pos.y < inaccuracy) {
          // Entering from the top.
          startY = -pos.height;
        } else {
          // Default to above the element.
          startY = -pos.height;
        }

        // Set the starting position.
        gsap.set(overlay, { x: startX, y: startY });

        // Animate the overlay into view.
        gsap.to(overlay, { duration: 0.5, x: 0, y: 0, ease: 'power2.out' });
      });

      el.addEventListener('mouseleave', (e) => {
        const pos = getRelativeMousePos(e);
        let endX = 0,
          endY = 0;

        // Determine the exit direction based on where the mouse leaves.
        if (pos.x <= 0) {
          // Exiting to the left.
          endX = -pos.width;
        } else if (pos.x >= pos.width) {
          // Exiting to the right.
          endX = pos.width;
        } else if (pos.y <= 0) {
          // Exiting to the top.
          endY = -pos.height;
        } else if (pos.y >= pos.height) {
          // Exiting to the bottom.
          endY = pos.height;
        }

        // Animate the overlay out.
        gsap.to(overlay, {
          duration: 0.5,
          x: endX,
          y: endY,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <div className='p-4 flex gap-4'>
      <div className='portfolio-single-box relative overflow-hidden w-52 h-52'>
        <img
          src='https://ittech.dreamitsolution.net/wp-content/uploads/2024/08/project-img1.png'
          alt='Image'
          className='w-full h-full object-cover'
        />
        <div className='overlay absolute w-full h-full bg-black bg-opacity-50'></div>
      </div>
      <div className='portfolio-single-box relative overflow-hidden w-52 h-52'>
        <img
          src='https://ittech.dreamitsolution.net/wp-content/uploads/2024/08/project-img1.png'
          alt='Image'
          className='w-full h-full object-cover'
        />
        <div className='overlay absolute w-full h-full bg-black bg-opacity-50'></div>
      </div>
      <div className='portfolio-single-box relative overflow-hidden w-52 h-52'>
        <img
          src='https://ittech.dreamitsolution.net/wp-content/uploads/2024/08/project-img1.png'
          alt='Image'
          className='w-full h-full object-cover'
        />
        <div className='overlay absolute w-full h-full bg-black bg-opacity-50'></div>
      </div>
    </div>
  );
};

export default Feature;
