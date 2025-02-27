/* eslint-disable no-unused-vars */
import serviceIcon from '/images/Software-Tecnology-3.webp';
import serviceIcon2 from '/images/team-2.webp';
import serviceIcon3 from '/images/support.webp';
import serviceIcon4 from '/images/icon2-2.webp';
import serviceIcon5 from '/images/color.webp';
import serviceIcon6 from '/images/settings1.webp';
import serviceThumb from '/images/Software-Tecnology-2.webp';
import ServiceCard from './ServiceCard';
import titleShape from '/images/sub-title-shape.png';

const Service = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-[url('/images/service-bg-2.webp')] bg-cover bg-no-repeat bg-center">
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
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-2'>
            We Provide Business Solutions
          </h1>
        </div>
      </div>
      <div className='max-w-[1620px] flex gap-[56px] w-full mx-auto px-2 md:px-3 lg:px-4'>
        <div className='max-w-[400px] w-full mt-[54px] space-y-7'>
          <div className='rounded-[10px] bg-white pl-4 relative left-10'>
            <ServiceCard
              serviceIcon={serviceIcon}
              serviceTitle={'Graphic Design'}
              serviceDesc={
                'Professionally pursue scalables on market positioning'
              }
            />
          </div>
          <div className='rounded-[10px] bg-white'>
            <ServiceCard
              serviceIcon={serviceIcon2}
              serviceTitle={'Graphic Design'}
              serviceDesc={
                'Professionally pursue scalables on market positioning'
              }
            />
          </div>
          <div className='rounded-[10px] bg-white pl-4 relative left-10'>
            <ServiceCard
              serviceIcon={serviceIcon3}
              serviceTitle={'Graphic Design'}
              serviceDesc={
                'Professionally pursue scalables on market positioning'
              }
            />
          </div>
        </div>
        <div className='w-full'>
          <img
            src={serviceThumb}
            draggable={false}
            className='max-w-[inherit] w-[inherit]'
            alt='Image'
          />
        </div>
        <div className='max-w-[400px] w-full mt-[54px] space-y-7'>
          <div className='rounded-[10px] bg-white pl-4'>
            <ServiceCard
              serviceIcon={serviceIcon4}
              serviceTitle={'Graphic Design'}
              serviceDesc={
                'Professionally pursue scalables on market positioning'
              }
            />
          </div>
          <div className='rounded-[10px] bg-white relative left-10'>
            <ServiceCard
              serviceIcon={serviceIcon5}
              serviceTitle={'Graphic Design'}
              serviceDesc={
                'Professionally pursue scalables on market positioning'
              }
            />
          </div>
          <div className='rounded-[10px] bg-white pl-4'>
            <ServiceCard
              serviceIcon={serviceIcon6}
              serviceTitle={'Graphic Design'}
              serviceDesc={
                'Professionally pursue scalables on market positioning'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
