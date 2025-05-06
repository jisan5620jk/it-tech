import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer2 from '../Shared/Footer/Footer2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main2 = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to the top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

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
      <HelmetChanger title={'Artificial Intelligence'} />
      <Navbar />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main2;
