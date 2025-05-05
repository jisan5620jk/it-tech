import { useEffect, useState, useRef } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);
  const progressRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const progressPath = progressRef.current;
    if (progressPath) {
      const totalLength = progressPath.getTotalLength();
      progressPath.style.transition = 'none';
      progressPath.style.strokeDasharray = `${totalLength} ${totalLength}`;
      progressPath.style.strokeDashoffset = totalLength;

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const maxScroll = documentHeight - windowHeight;

        const dashOffset = totalLength - (scrollTop * totalLength) / maxScroll;
        progressPath.style.strokeDashoffset = dashOffset;

        setIsActive(scrollTop > 50);
      };

      handleScroll(); // Initial call to set progress
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed z-50 bottom-12 right-12 h-12 w-12 cursor-pointer rounded-full [box-shadow:inset_0_0_0_2px_#0025702d] transition-all duration-200 ${
        isActive
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-8'
      }`}
      id='scrollUp'
      onClick={handleClick}
    >
      <span className='absolute text-center text-2xl text-blue-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-all duration-200'>
        <BsArrowUp className='fill-blue-500' />
      </span>
      <svg
        className='absolute inset-0 w-full h-full'
        viewBox='-1 -1 102 102'
      >
        <path
          ref={progressRef}
          className='fill-none stroke-blue-500 stroke-[4] transition-all duration-200'
          d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
        />
      </svg>
    </div>
  );
};

export default BackToTop;
