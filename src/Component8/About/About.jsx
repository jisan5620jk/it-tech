import aboutThumb from '/images/about-slider-image.jpg';
import aboutThumb2 from '/images/about-slider-image2.jpg';
import aboutThumb3 from '/images/about-slider-image3.jpg';
import aboutIcon from '/images/about-icon.webp';
import { Link } from 'react-router-dom';
import titleShape from '/images/sub-title-shape.png';
import shape from '/images/about-shape.webp';
import { GoArrowRight, GoCheckCircleFill } from 'react-icons/go';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import AboutNavigation from './AboutNavigation';

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
  return (
    <section className='py-16 md:py-20 lg:py-28 bg-BodyBg7-0 relative'>
      <div className='Container'>
        <div className='flex lg:items-center justify-start lg:justify-between gap-8 lg:gap-0 border-b border-SecondaryColor-0 border-opacity-10 mb-10 pb-4'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[80px] 2xl:leading-[82px] text-HeadingColor-0 mt-[14px] mb-4'>
              Company Area
            </h1>
          </div>
          <div className='grid grid-cols-2 items-center gap-8'>
            <div className='flex flex-col items-center'>
              <div className='counter-text font-Rajdhani font-bold text-transparent text-[90px] leading-[90px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={97}
                  duration={1000}
                />
                <h1>%</h1>
              </div>
              <div>
                <p className='font-Nunito text-TextColor2-0 -mt-2'>
                  Assesment & Analysis
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='counter-text font-Rajdhani font-bold text-transparent text-[90px] leading-[90px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={130}
                  duration={1000}
                />
                <h1>+</h1>
              </div>
              <div>
                <p className='font-Nunito text-TextColor2-0 -mt-2'>
                  High Expert Technicians
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-12 items-center'>
          <div className='relative z-10 3xl:pr-12'>
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
            <div className='absolute z-10 bottom-[82px] -left-[64px] pl-9 pr-[43px] py-8 hidden md:block bg-PrimaryColor2-0 rounded-t-lg rounded-l-lg'>
              <div>
                <img
                  src={aboutIcon}
                  draggable={false}
                  alt='Icon'
                />
              </div>
              <h4 className='font-Rajdhani font-semibold text-2xl text-white mt-10'>
                Secure Your House
                <br />Office Building And
                <br />Protected Area
              </h4>
              <Link to={'/contact'} className='flex items-center justify-start gap-2 font-Rajdhani font-semibold text-lg text-white uppercase'>Contact Us<GoArrowRight size={22} /></Link>
            </div>
          </div>
          <div className='relative'>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Discover Our Security Story
            </h1>
            <p className='font-Nunito text-TextColor2-0 pb-7'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply chains. Enthusiastically maximize cost
              effective technologies dynamically negotiate multimedia based
              e-commerce competitive
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-2'>
              <li className='font-Rajdhani font-semibold text-HeadingColor-0 flex items-center lg:items-start xl:items-center gap-2 mb-3'>
                <div className='text-PrimaryColor-0'>
                  <GoCheckCircleFill size={20} />
                </div>
                <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:-mt-1 xl:mt-0'>
                  Autonomous Navigation
                </h5>
              </li>
              <li className='font-Rajdhani font-semibold text-HeadingColor-0 flex items-center lg:items-start xl:items-center gap-2 mb-3'>
                <div className='text-PrimaryColor-0'>
                  <GoCheckCircleFill size={20} />
                </div>
                <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:-mt-1 xl:mt-0'>
                  AI-Powered Decision Making
                </h5>
              </li>
              <li className='font-Rajdhani font-semibold text-HeadingColor-0 flex items-center lg:items-start xl:items-center gap-2 mb-3'>
                <div className='text-PrimaryColor-0'>
                  <GoCheckCircleFill size={20} />
                </div>
                <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:-mt-1 xl:mt-0'>
                  Real-Time Data Processing
                </h5>
              </li>
              <li className='font-Rajdhani font-semibold text-HeadingColor-0 flex items-center lg:items-start xl:items-center gap-2 mb-3'>
                <div className='text-PrimaryColor-0'>
                  <GoCheckCircleFill size={20} />
                </div>
                <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl lg:-mt-1 xl:mt-0'>
                  Adaptive Learning
                </h5>
              </li>
            </ul>

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
        className='absolute bottom-10 right-0 animate-wiggle hidden 2xl:block'
      />
    </section>
  );
};

export default About;
