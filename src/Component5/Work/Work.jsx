import WorkCard from './WorkCard';
import workImg from '/images/port-1-1.webp';
import workImg2 from '/images/port-2-1.webp';
import workImg3 from '/images/port-3-1.webp';
import workImg4 from '/images/port-4.webp';
import workImg5 from '/images/port-5.webp';
import workImg6 from '/images/port-6.webp';
import titleShape from '/images/sub-title-shape.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import WorkNavigation from './WorkNavigation';

const workCard = [
  {
    id: 1,
    workImg: workImg4,
    workBoxLink: '/',
    workTitle: 'High Efficiency Robotics Automotion',
    workSubTitle: 'Design',
  },
  {
    id: 2,
    workImg: workImg3,
    workBoxLink: '/',
    workTitle: 'Modern 3d Art for Business',
    workSubTitle: '3d Art',
  },
  {
    id: 3,
    workImg: workImg2,
    workBoxLink: '/',
    workTitle: 'Business Card Design',
    workSubTitle: 'Design',
  },
  {
    id: 4,
    workImg: workImg,
    workBoxLink: '/',
    workTitle: 'Mobile App Development',
    workSubTitle: 'Development',
  },
  {
    id: 5,
    workImg: workImg5,
    workBoxLink: '/',
    workTitle: 'Website Design & Development',
    workSubTitle: 'Design',
  },
  {
    id: 6,
    workImg: workImg6,
    workBoxLink: '/',
    workTitle: 'Mock-Up Design',
    workSubTitle: 'Design',
  },
];

const Work = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 5000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className='work-section mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            LATEST WORKS{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
            Driving Change with Innovative
            <br />
            Successful Projects
          </h1>
        </div>
      </div>
      <div className='mt-[52px]'>
        <Swiper {...settings}>
          {workCard.map(
            ({ id, workImg, workBoxLink, workTitle, workSubTitle }) => {
              return (
                <SwiperSlide key={id}>
                  <div className='pb-[104px]'>
                    <WorkCard
                      workImg={workImg}
                      workBoxLink={workBoxLink}
                      workTitle={workTitle}
                      workSubTitle={workSubTitle}
                    />
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <WorkNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
