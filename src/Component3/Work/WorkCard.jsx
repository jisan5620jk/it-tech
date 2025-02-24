import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const WorkCard = ({
  workImg,
  workBoxLink,
  workSubTitle,
  workTitle,
}) => {
  return (
    <div className='overflow-hidden'>
      <div className='relative group rounded-[10px] overflow-hidden before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-full before:bg-gradient-to-b before:from-transparent before:to-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:opacity-0'>
        <img
          src={workImg}
          draggable={false}
          alt='Image'
          className='w-full'
        />
        <div className='absolute z-10 w-full max-w-[372px] left-[60px] -bottom-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100'>
          <div className='bg-white rounded-t-[10px] pt-8 pb-[26px] px-10 relative'>
            <h5 className='font-Rajdhani font-semibold text-lg uppercase text-PrimaryColor-0 inline-block border border-SecondaryColor-0 border-opacity-20 rounded-full px-[22px] py-[2px] mb-[10px]'>{workSubTitle}</h5>
            <Link
              to={workBoxLink}
              className='font-Rajdhani block font-semibold text-2xl md:text-[26px] xl:text-2xl 2xl:text-[26px] leading-8 text-HeadingColor-0'
            >
              {workTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
