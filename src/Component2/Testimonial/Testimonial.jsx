import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import titleShape from '/images/sub-title-shape.png';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import { RiDoubleQuotesL } from 'react-icons/ri';
import testiProfile from '/images/mans.png';

const testiData = [
  {
    id: 1,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Great 3d Modal',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Web Developer',
  },
  {
    id: 2,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Awesome Design',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Web Developer',
  },
  {
    id: 3,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Great Supports',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Web Developer',
  },
  {
    id: 4,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Smart Development',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Web Developer',
  },
  {
    id: 5,
    testQuote: <RiDoubleQuotesL />,
    testiTitle: 'Best Quality',
    testiDesc: `Competently leverage existing top line client 
                centric supply chain. Enthusiastically maximi 
                effective technologies actualize alternatives
                materials via high-payoff`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiProfile: testiProfile,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Web Developer',
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
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
    <section className='relative z-10 overflow-hidden px-[100px] pt-28'>
      <div className='text-center'>
        <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-xl font-semibold text-PrimaryColor-0 uppercase'>
          <img
            src={titleShape}
            draggable={false}
            alt='Shape'
          />{' '}
          WHAT WE PROVIDE{' '}
          <img
            src={titleShape}
            draggable={false}
            alt='Shape'
            className='rotate-180'
          />
        </h5>
        <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
          AI-Driven Robotics Solutions Elevating
          <br />
          Performance in Every Industry
        </h1>
      </div>
      <div className='mt-[46px]'>
        <Swiper {...settings}>
          <div>
            {testiData.map(
              ({
                id,
                testQuote,
                testiTitle,
                testiRatingIcon,
                testiName,
                testiProfile,
                testiDesignation,
                testiDesc,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <TestimonialCard
                      testQuote={testQuote}
                      testiTitle={testiTitle}
                      testiRatingIcon={testiRatingIcon}
                      testiName={testiName}
                      testiProfile={testiProfile}
                      testiDesignation={testiDesignation}
                      testiDesc={testiDesc}
                    />
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

export default Testimonial;
