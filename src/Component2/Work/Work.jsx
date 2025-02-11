import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkCard from './WorkCard';
import { IoPlaySharp } from 'react-icons/io5';
import workImg from '/images/ai3.png';
import workImg2 from '/images/ai2.png';
import workImg3 from '/images/ai1-1.png';
import workImg4 from '/images/AI-3.png';
import './work.css';

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
    autoplay: true,
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
    </section>
  );
};

export default Work;
