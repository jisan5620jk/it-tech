import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import titleShape from '/images/sub-title-shape.png';
import reviewLogo from '/images/star-1-1.png';
import testiImg from '/images/author.png';
import testiQuate from '/images/quote.png';
import Brand from './Brand';

const testiData = [
  {
    id: 1,
    testiTitle: 'Design Quality!',
    testiQuate: testiQuate,
    testiDesc: `Credibly embrace covalent growth strategies 
                without out-of-the-box value. Collaboratively 
                transition focused total linkage`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Anjelina Watson',
    testiImg: testiImg,
  },
  {
    id: 2,
    testiTitle: 'Awesome Support!',
    testiQuate: testiQuate,
    testiDesc: `Credibly embrace covalent growth strategies 
                without out-of-the-box value. Collaboratively 
                transition focused total linkage`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Jhon D. Alexon',
    testiImg: testiImg,
  },
  {
    id: 3,
    testiTitle: 'Best Development!',
    testiQuate: testiQuate,
    testiDesc: `Credibly embrace covalent growth strategies 
                without out-of-the-box value. Collaboratively 
                transition focused total linkage`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Murad Junaid',
    testiImg: testiImg,
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
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className='testimonial pt-[135px] pb-28 bg-[url(/images/testimonial.png)] bg-no-repeat bg-cover bg-top bg-HeadingColor-0 relative z-10 overflow-hidden'>
      <div className='Container'>
        <div className='grid grid-cols-3'>
          <div className='text-left col-span-1'>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Testimonials
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-6'>
              Trusted by Industry
              <br />
              Leaders Customers
              <br />
              Testimonials
            </h1>
            <div>
              <img
                src={reviewLogo}
                draggable='false'
                alt='Review Logo'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <Swiper {...settings}>
              <div>
                {testiData.map(
                  ({
                    id,
                    testiTitle,
                    testiQuate,
                    testiRatingIcon,
                    testiName,
                    testiImg,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className=''>
                          <TestimonialCard
                            testiTitle={testiTitle}
                            testiQuate={testiQuate}
                            testiRatingIcon={testiRatingIcon}
                            testiName={testiName}
                            testiImg={testiImg}
                            testiDesc={testiDesc}
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
        <Brand />
      </div>
    </section>
  );
};

export default Testimonial;
