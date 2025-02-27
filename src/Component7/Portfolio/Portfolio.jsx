import portfolioThumb from '/images/img1.webp';
import portfolioThumb2 from '/images/2-1.webp';
import portfolioThumb3 from '/images/3.webp';
import portfolioIcon from '/images/plane.webp';
import portfolioIcon2 from '/images/mike-1.webp';
import portfolioIcon3 from '/images/code.webp';
import titleShape from '/images/sub-title-shape.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PortfolioCard from './PortfolioCard';
import { FiArrowUpRight } from 'react-icons/fi';

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioIcon: portfolioIcon,
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/project_details',
    portfolioBtn: <FiArrowUpRight />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    portfolioIcon: portfolioIcon2,
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/project_details',
    portfolioBtn: <FiArrowUpRight />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    portfolioIcon: portfolioIcon3,
    portfolioTitle: 'Business Growth with Toptech Agency ',
    portfolioUrl: '/project_details',
    portfolioBtn: <FiArrowUpRight />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
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
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="portfolio relative z-10 py-28 bg-[url('/images/blog-bg.webp')] bg-center bg-cover bg-no-repeat">
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
            />{' '}
            WAHT WE PROVIDE{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
            We Provide Business Solutions
          </h1>
          <p className='font-Nunito text-TextColor2-0 max-w-[675px] w-full mx-auto'>
            Energistically customize just in time synergy and dynamic
            information. Synergistically network performance based quality
            vectors whereas client-based ROI.
          </p>
        </div>
        <div className='mt-[60px]'>
          <Swiper {...settings}>
            <div>
              {PortfolioData.map(
                ({
                  id,
                  portfolioThumb,
                  portfolioIcon,
                  portfolioTitle,
                  portfolioUrl,
                  portfolioBtn,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div>
                        <PortfolioCard
                          portfolioThumb={portfolioThumb}
                          portfolioIcon={portfolioIcon}
                          portfolioUrl={portfolioUrl}
                          portfolioTitle={portfolioTitle}
                          portfolioBtn={portfolioBtn}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
