import { Outlet } from 'react-router-dom';
import Navbar2 from '../Shared/Navbar/Navbar2';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Footer7 from '../Shared/Footer/Footer7';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main7 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <Navbar2 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer7 />
    </>
  );
};
export default Main7;
