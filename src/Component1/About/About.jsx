import aboutThumb from '/images/about-thumb.png';
import aboutIcon from '/images/about-icon1.png';
import aboutIcon2 from '/images/about-icon2.png';
import subTitleShape from '/images/title-shape.png';
import icon from '/images/call-icon.png';
import aboutShape from '/images/about-area-shape.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <section className='pt-[230px] pb-[180px] bg-[url(/images/about-bg.png)] bg-no-repeat bg-center bg-cover relative'>
      <img
        src={aboutShape}
        alt='Shape'
        draggable='false'
        className='absolute top-1/2 -translate-y-1/2 right-0'
      />
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center'>
          <div className='relative z-10'>
            <img
              src={aboutThumb}
              draggable='false'
            />
          </div>
          <div className='relative'>
            <h5 className='font-Rajdhani text-xl font-semibold text-PrimaryColor-0 flex items-center gap-2 uppercase'>
              <img
                src={subTitleShape}
                alt='Line'
                draggable='false'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[10px] mb-3'>
              Next Generation Depends on
              <br />
              Digital Software’s Growing
              <br />
              Business Smoothly
            </h1>
            <div className='flex gap-7 mt-10'>
              <div>
                <img
                  src={aboutIcon}
                  draggable='false'
                />
              </div>
              <div className='flex-1'>
                <h5 className='font-Rajdhani font-semibold text-[22px] lg:text-2xl xl:text-[26px] 2xl:text-[28px] text-HeadingColor-0'>
                  Advanced Marketing
                </h5>
                <p className='font-Nunito text-TextColor2-0 mt-1'>
                  Clients-focused data centric process energistically <br />
                  communicate installed done.
                </p>
              </div>
            </div>
            <div className='flex gap-7 mt-8'>
              <div>
                <img
                  src={aboutIcon2}
                  draggable='false'
                />
              </div>
              <div className='flex-1'>
                <h5 className='font-Rajdhani font-semibold text-[22px] lg:text-2xl xl:text-[26px] 2xl:text-[28px] text-HeadingColor-0'>
                  Innovation Soluitions
                </h5>
                <p className='font-Nunito text-TextColor2-0 mt-1'>
                  Clients-focused data centric process energistically <br />
                  communicate installed done.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-5 mt-10'>
              <Link to={'/about'}>
                <button className='primary-btn'>
                  {`Discover More`}
                  <BsArrowRight size={'22'} />
                </button>
              </Link>
              <div className='flex items-center gap-4'>
                <div>
                  <img
                    src={icon}
                    alt='Icon'
                    draggable='false'
                  />
                </div>
                <div>
                  <p className='font-Nunito text-TextColor2-0 mb-1'>
                    Call Us Anytime
                  </p>
                  <Link
                    to={'/'}
                    className='font-Rajdhani text-[22px] text-HeadingColor-0 font-bold'
                  >
                    +88 123 (4567) 890
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
