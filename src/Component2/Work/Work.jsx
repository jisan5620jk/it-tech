import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkCard from './WorkCard';
import { IoPlaySharp } from 'react-icons/io5';
import workImg from '/images/ai3.png';
import workImg2 from '/images/ai2.png';
import workImg3 from '/images/ai1-1.png';
import workImg4 from '/images/AI-3.png';
import './work.css';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const workCard = [
  {
    id: 1,
    workImg: workImg4,
    workVideoIcon: <IoPlaySharp />,
    workBoxLink: '/',
    workTitle: 'High Efficiency Robotics Automotion',
    workTag: 'Artifial',
    workTag2: 'Robotics',
  },
  {
    id: 2,
    workImg: workImg3,
    workVideoIcon: <IoPlaySharp />,
    workBoxLink: '/',
    workTitle: 'High Efficiency Robotics Automotion',
    workTag: 'Artifial',
    workTag2: 'Robotics',
  },
  {
    id: 3,
    workImg: workImg2,
    workVideoIcon: <IoPlaySharp />,
    workBoxLink: '/',
    workTitle: 'High Efficiency Robotics Automotion',
    workTag: 'Artifial',
    workTag2: 'Robotics',
  },
  {
    id: 4,
    workImg: workImg,
    workVideoIcon: <IoPlaySharp />,
    workBoxLink: '/',
    workTitle: 'High Efficiency Robotics Automotion',
    workTag: 'Artifial',
    workTag2: 'Robotics',
  },
];

const Work = () => {
  const settings = {
    loop: true,
    speed: 1000,
    initialSlide: 1,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className='work-section'>
      <div className='Container'>
        <div>
          <h1 className='font-Rajdhani text-center font-bold text-xl sm:text-[34px] md:text-[44px] lg:text-[30px] xl:text-[36px] 2xl:text-[100px] text-HeadingColor-0 mt-[14px] uppercase mb-[74px]'>
            Works
          </h1>
        </div>
      </div>
      <div>
        <Swiper {...settings}>
          <div>
            {workCard.map(
              ({
                id,
                workImg,
                workVideoIcon,
                workBoxLink,
                workTitle,
                workTag,
                workTag2,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div>
                      <WorkCard
                        workImg={workImg}
                        workVideoIcon={workVideoIcon}
                        workBoxLink={workBoxLink}
                        workTitle={workTitle}
                        workTag={workTag}
                        workTag2={workTag2}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
      <div className='Container mt-14'>
        <div className='flex items-center justify-between'>
          <div className='flex items-start gap-2'>
            <div className='text-PrimaryColor-0 mt-1'>
              <GoArrowUpRight size={30} />
            </div>
            <p className='font-Nunito text-lg'>
              Continually formulate B2C partnerships orthogonal software
              <br />
              maintainable quality through low budget
            </p>
          </div>
          <div>
            <Link
              to={'/about'}
              className='inline-block mt-7'
            >
              <button className='primary-btn'>
                {`All Works`}
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
    </section>
  );
};

export default Work;
