/* eslint-disable react/prop-types */

const ServiceCard = ({ serviceIcon, serviceTitle, serviceDesc }) => {
  return (
    <div className='flex gap-7 px-[34px] lg:px-7 2xl:px-[34px] pt-7 pb-8 '>
      <div className=''>
        <img
          src={serviceIcon}
          draggable='false'
          className='group-hover:animate-wobble_vertical'
        />
      </div>
      <div className='flex-1'>
        <h5 className='font-Rajdhani font-semibold text-[22px] sm:text-2xl pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white'>
          {serviceTitle}
        </h5>
        <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white -mt-[6px]'>
          {serviceDesc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
