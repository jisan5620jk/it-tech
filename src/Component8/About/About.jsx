import aboutThumb from '/images/about-slider-image.jpg';
import aboutThumb2 from '/images/about-slider-image2.jpg';
import aboutThumb3 from '/images/about-slider-image3.jpg';
import aboutIcon from '/images/about-icon.webp';
import { Link } from 'react-router-dom';
import titleShape from '/images/sub-title-shape.png';
import shape from '/images/about-shape.webp';
import { GoArrowRight } from 'react-icons/go';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import AboutNavigation from './AboutNavigation';
import './about.css';
import { FaCheck } from 'react-icons/fa6';

const About = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 5000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
  };

  const tabs = document.querySelectorAll('.mission-vision-tab-btn');
  const allContent = document.querySelectorAll('.mission-vision-tab-content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('active'));
      tab.classList.add('active');

      allContent.forEach((content) => content.classList.remove('active'));
      allContent[index].classList.add('active');
    });
  });

  return (
    <section className='py-16 md:py-20 lg:py-28 bg-BodyBg7-0 relative'>
      <div className='Container'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between md:gap-8 lg:gap-0 border-b border-SecondaryColor-0 border-opacity-10 mb-10 pb-7'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Rajdhani font-bold text-[40px] leading-[42px] sm:text-[50px] sm:leading-[52px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[62px] xl:text-[70px] xl:leading-[72px] 2xl:text-[80px] 2xl:leading-[82px] text-HeadingColor-0 mt-[14px] mb-4'>
              Company Area
            </h1>
          </div>
          <div className='grid grid-cols-2 items-center gap-8'>
            <div className='flex flex-col items-center'>
              <div className='counter-text font-Rajdhani font-bold text-transparent text-5xl md:text-[90px] leading-[90px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={97}
                  duration={1000}
                />
                <h1>%</h1>
              </div>
              <div>
                <p className='font-Nunito text-center sm:text-left text-TextColor2-0 -mt-2'>
                  Assesment & Analysis
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='counter-text font-Rajdhani font-bold text-transparent text-5xl md:text-[90px] leading-[90px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={130}
                  duration={1000}
                />
                <h1>+</h1>
              </div>
              <div>
                <p className='font-Nunito text-center sm:text-left text-TextColor2-0 -mt-2'>
                  High Expert Technicians
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-12 items-center'>
          <div className='relative z-10 3xl:pr-12'>
            <div className='rounded-[10px] overflow-hidden'>
              <Swiper {...settings}>
                <SwiperSlide>
                  <img
                    src={aboutThumb}
                    draggable='false'
                    className='w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={aboutThumb2}
                    draggable='false'
                    className='w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={aboutThumb3}
                    draggable='false'
                    className='w-full'
                  />
                </SwiperSlide>
                <AboutNavigation />
              </Swiper>
            </div>
            <div className='absolute z-10 bottom-[82px] -left-[47px] 3xl:-left-[64px] pl-9 pr-[43px] py-8 hidden 2xl:block bg-PrimaryColor2-0 rounded-t-lg rounded-l-lg'>
              <div>
                <img
                  src={aboutIcon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <h4 className='font-Rajdhani font-semibold text-2xl text-white mt-10 mb-4'>
                Secure Your House
                <br />
                Office Building And
                <br />
                Protected Area
              </h4>
              <Link
                to={'/contact'}
                className='flex items-center justify-start gap-2 font-Rajdhani font-semibold text-lg text-white uppercase'
              >
                Contact Us
                <GoArrowRight size={22} />
              </Link>
            </div>
          </div>
          <div className='relative'>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[38px] 2xl:leading-[48px] text-HeadingColor-0 mt-[14px] mb-6'>
              Discover Our Security Story
            </h1>
            <ul className='flex items-center gap-10 border-b border-SecondaryColor-0 border-opacity-10 pb-3 mb-8'>
              <li className='mission-vision-tab-btn active font-Rajdhani font-semibold text-[22px] text-HeadingColor-0 cursor-pointer relative z-10'>
                Our Mission
              </li>
              <li className='mission-vision-tab-btn font-Rajdhani font-semibold text-[22px] text-HeadingColor-0 cursor-pointer relative z-10'>
                Our vision
              </li>
            </ul>
            <div className='mission-vision-tab-content active'>
              <p className='font-Nunito text-TextColor2-0'>
                At IT-Tech, our mission is to empower businesses by providing
                innovative and reliable IT solutions. We aim transform the
                payment our clients operate through cutting-edge technology,
                tailored services, and unwavering support. Our goal is to
                organizations to achieve their full potential by optimizing
                their IT infrastructure, enhancing security to your busines, and
                streamlining processes.
              </p>
            </div>
            <div className='mission-vision-tab-content'>
              <p className='font-Nunito text-TextColor2-0'>
                At IT-Tech, our vision is to empower businesses by providing
                innovative and reliable IT solutions. We aim transform the
                payment our clients operate through cutting-edge technology,
                tailored services, and unwavering support. Our goal is to
                organizations to achieve their full potential by optimizing
                their IT infrastructure, enhancing security to your busines, and
                streamlining processes.
              </p>
            </div>
            <div className='flex flex-wrap gap-5 mt-7 mb-3'>
              <div className='inline-block'>
                <div className='flex items-center gap-3 pr-4 sm:pr-8 pl-2 py-[7px] bg-white bg-opacity-30 border border-SecondaryColor-0 border-opacity-10 rounded-full shadow-shade'>
                  <div className='size-7 rounded-full bg-white bg-opacity-30 flex items-center justify-center border border-SecondaryColor-0 border-opacity-10 text-PrimaryColor-0'>
                    <FaCheck size={16} />
                  </div>
                  <h5 className='flex-1 font-Rajdhani font-semibold text-HeadingColor-0 text-lg'>
                    High-Definition Video Quality
                  </h5>
                </div>
              </div>
              <div className='inline-block'>
                <div className='flex items-center gap-3 pr-4 sm:pr-8 pl-2 py-[7px] bg-white bg-opacity-30 border border-SecondaryColor-0 border-opacity-10 rounded-full shadow-shade'>
                  <div className='size-7 rounded-full bg-white bg-opacity-30 flex items-center justify-center border border-SecondaryColor-0 border-opacity-10 text-PrimaryColor-0'>
                    <FaCheck size={16} />
                  </div>
                  <h5 className='flex-1 font-Rajdhani font-semibold text-HeadingColor-0 text-lg'>
                    Remote Access & Control
                  </h5>
                </div>
              </div>
              <div className='inline-block'>
                <div className='flex items-center gap-3 pr-4 sm:pr-8 pl-2 py-[7px] bg-white bg-opacity-30 border border-SecondaryColor-0 border-opacity-10 rounded-full shadow-shade'>
                  <div className='size-7 rounded-full bg-white bg-opacity-30 flex items-center justify-center border border-SecondaryColor-0 border-opacity-10 text-PrimaryColor-0'>
                    <FaCheck size={16} />
                  </div>
                  <h5 className='flex-1 font-Rajdhani font-semibold text-HeadingColor-0 text-lg'>
                    Night Vision Technology
                  </h5>
                </div>
              </div>
              <div className='inline-block'>
                <div className='flex items-center gap-3 pr-4 sm:pr-8 pl-2 py-[7px] bg-white bg-opacity-30 border border-SecondaryColor-0 border-opacity-10 rounded-full shadow-shade'>
                  <div className='size-7 rounded-full bg-white bg-opacity-30 flex items-center justify-center border border-SecondaryColor-0 border-opacity-10 text-PrimaryColor-0'>
                    <FaCheck size={16} />
                  </div>
                  <h5 className='flex-1 font-Rajdhani font-semibold text-HeadingColor-0 text-lg'>
                    6 Years Warranty
                  </h5>
                </div>
              </div>
            </div>
            <Link
              to={'/about'}
              className='inline-block mt-7'
            >
              <button className='primary-btn'>
                {`More About`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='CurrentColor'
                    width='14.2'
                    height='14.2'
                    viewBox='0 0 14.2 14.2'
                  >
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute bottom-10 right-0 animate-wiggle hidden 3xl:block'
      />
    </section>
  );
};

export default About;
