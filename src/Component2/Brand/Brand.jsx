import titleShape from '/images/sub-title-shape.png';
import brandImg from '/images/AI-2-1.png';
import brandImg2 from '/images/1.png';
import brandImg3 from '/images/3.png';
import brandImg5 from '/images/4.png';
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';
import { IoStarSharp } from 'react-icons/io5';
import Shape from '/images/AI-2-9.png';
import Shape2 from '/images/AI-2-10.png';
import Shape3 from '/images/AI-2-8.png';
import Shape4 from '/images/triangle.png';
import Faq from '../Faq/Faq';

const Brand = () => {
  return (
    <section className="bg-[url('/images/brand-bg.jpg')] bg-no-repeat bg-center bg-cover pt-[120px] pb-28">
      <div className='Container'>
        <div className='flex items-center relative'>
          <img
            src={Shape}
            draggable={false}
            alt='Shape'
            className='absolute top-0 left-[22%] animate-swing'
          />
          <img
            src={Shape2}
            draggable={false}
            alt='Shape'
            className='absolute top-0 right-[22%] animate-rotational'
          />
          <img
            src={Shape3}
            draggable={false}
            alt='Shape'
            className='absolute bottom-0 left-1/4 animate-bounce'
          />
          <img
            src={Shape4}
            draggable={false}
            alt='Shape'
            className='absolute bottom-0 right-[29%] animate-dance2'
          />
          <div className='max-w-[374px] w-full space-y-12'>
            <div>
              <img
                src={brandImg}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
            <div className='flex justify-end'>
              <img
                src={brandImg2}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
            <div>
              <img
                src={brandImg3}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
          </div>
          <div className='w-full'>
            <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Clients{' '}
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='rotate-180'
              />
            </h5>
            <h1 className='text-center font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Our Trusted Customers
            </h1>
            <div className='size-[260px] mt-16 mb-[50px] mx-auto rounded-full bg-gradient-to-l to-PrimaryColor-0 from-PrimaryColor2-0 text-center flex items-center flex-col justify-center'>
              <div className='size-[50px] rounded-full flex items-center justify-center text-PrimaryColor-0 bg-white mx-auto'>
                <IoStarSharp size={38} />
              </div>
              <div className='font-Rajdhani text-white font-bold text-[42px] mt-2 -mb-1'>
                <OnScrollCounter
                  start={0}
                  end={4000}
                  duration={3000}
                />
              </div>
              <p className='font-Nunito text-white'>
                Trusted Companies
                <br /> With Us
              </p>
            </div>
            <div className='flex justify-center'>
              <img
                src={brandImg}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
          </div>
          <div className='max-w-[374px] w-full space-y-12'>
            <div className='flex justify-end'>
              <img
                src={brandImg5}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
            <div className='flex justify-start'>
              <img
                src={brandImg3}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
            <div className='flex justify-end'>
              <img
                src={brandImg2}
                draggable={false}
                alt='Image'
                className='shadow-shade'
              />
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
};

export default Brand;
