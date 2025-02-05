import { useEffect } from 'react';
import whyChooseBoxIcon from '/images/choose-icon1.png';
import whyChooseBoxIcon2 from '/images/time.png';
import whyChooseBoxIcon3 from '/images/choose-icon3.png';
import titleShape from '/images/sub-title-shape.png';
import whyChooseImg from '/images/choose-thumb21.png';
import WhyChooseCard from './WhyChooseCard';
import './why-choose.css';
import { IoSearchSharp } from 'react-icons/io5';
import bannerShape from '/images/shape-3.png';

const WhyChoose = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.why-choose-box');

    boxes.forEach((box) => {
      box.addEventListener('mouseover', () => {
        box.classList.add('active');
      });

      box.addEventListener('mouseout', () => {
        box.classList.remove('active');
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      boxes.forEach((box) => {
        box.removeEventListener('mouseover', () => {
          box.classList.add('active');
        });

        box.removeEventListener('mouseout', () => {
          box.classList.remove('active');
        });
      });
    };
  }, []);

  return (
    <section className='-mt-[176px] pt-[290px] pb-28 relative bg-[url(/images/choose-bg2.png)] bg-cover bg-center'>
      <div className='Container'>
        <div className='grid grid-cols-2'>
          <div>
            <div>
              <h5 className='flex items-center gap-2 font-Rajdhani text-xl font-semibold text-PrimaryColor-0 uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                />{' '}
                WHY CHOOSE US?
              </h5>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
                Why We’re Your Best Choice for
                <br /> SEO Marketing Success
              </h1>
            </div>
            <div className='space-y-6'>
              <div className='why-choose-box transition-all duration-500 inline-block'>
                <WhyChooseCard
                  whyChooseBoxIcon={whyChooseBoxIcon}
                  whyChooseBoxTitle='Social Paid Campaign'
                  whyChooseBoxDesc='Competently leverage existing line supples Enthusiastically maximize done'
                />
              </div>
              <div className='why-choose-box active transition-all duration-300 inline-block'>
                <WhyChooseCard
                  whyChooseBoxIcon={whyChooseBoxIcon2}
                  whyChooseBoxTitle='Social Paid Campaign'
                  whyChooseBoxDesc='Competently leverage existing line supples Enthusiastically maximize done'
                />
              </div>
              <div className='why-choose-box transition-all duration-300 inline-block'>
                <WhyChooseCard
                  whyChooseBoxIcon={whyChooseBoxIcon3}
                  whyChooseBoxTitle='Social Paid Campaign'
                  whyChooseBoxDesc='Competently leverage existing line supples Enthusiastically maximize done'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img
                src={whyChooseImg}
                draggable={false}
                alt='Why CHoose Image'
                className='w-[inherit] -mb-28'
              />
              <div className='absolute top-[39%] left-40 pointer-events-none'>
                <div className='relative'>
                  <input
                    type='text'
                    name='Search'
                    id='Search'
                    placeholder='www.yoursite.com'
                    required
                    className='w-[520px] h-[65px] rounded-full text-xl font-medium border border-white px-10 py-3 outline-none text-HeadingColor-0 font-Rajdhani placeholder:text-HeadingColor-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-[5px]'
                  />
                  <button
                    type='submit'
                    className='absolute top-1/2 right-2 -translate-y-1/2 size-[50px] rounded-full bg-gradient-to-t to-PrimaryColor3-0 from-PrimaryColor2-0 flex items-center justify-center text-white'
                  >
                    <IoSearchSharp size={22} />
                  </button>
                </div>
              </div>
              <img
                src={bannerShape}
                draggable={false}
                className='absolute bottom-40 right-0 md:right-20 lg:right-0 animate-wiggle hidden sm:block'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
