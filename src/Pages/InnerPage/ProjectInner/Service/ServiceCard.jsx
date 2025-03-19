/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceBtnUrl,
  serviceBtnText,
  serviceBtnIcon,
}) => {
  return (
    <div className='group bg-BodyBg5-0 rounded-lg py-5 sm:py-10 md:py-5 xl:py-11 px-4 md:px-9 lg:px-4 xl:px-9 2xl:px-10 relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white'>
      <div className='flex gap-4 sm:gap-6 lg:gap-4 xl:gap-6 items-center'>
        <div className=''>
          <img
            src={serviceIcon}
            draggable={false}
            alt='Icon'
            className='group-hover:animate-wobble_vertical'
          />
        </div>
        <h4 className='flex-1 font-Rajdhani leading-6 sm:leading-7 font-semibold text-SecondaryColor-0 text-lg sm:text-2xl md:text-xl lg:text-[19px] xl:text-xl 2xl:text-[26px]'>
          {serviceTitle}
        </h4>
      </div>
      <p className='font-Nunito text-TextColor2-0 mt-5 mb-8'>{serviceDesc}</p>
      <div className='inline-block'>
        <Link
          to={serviceBtnUrl}
          className='bg-transparent border px-6 py-[8px] rounded-full flex items-center gap-1 font-Rajdhani font-semibold relative z-10 overflow-hidden transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:right-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:ease-linear before:-z-10 group-hover:before:w-full group-hover:before:left-0 uppercase'
        >
          {serviceBtnText}
          <span className='text-xl -rotate-45'> {serviceBtnIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
