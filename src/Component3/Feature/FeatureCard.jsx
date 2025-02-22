/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureUrl,
  featureBtnText,
  featureBtnIcon,
}) => {
  return (
    <div className='group px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-8 lg:py-4 xl:py-7 2xl:py-10 py-5 sm:py-10 bg-white bg-opacity-20 transition-all duration-500 hover:border-opacity-0 rounded-[10px] border-white border-2 overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:opacity-0 before:h-full before:bg-gradient-to-b before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0 hover:before:opacity-100'>
      <div className=''>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] group-hover:animate-wobble_vertical'
        />
      </div>
      <h4 className='font-Rajdhani font-semibold text-2xl sm:text-[26px] lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-7 mb-3'>
        {featureTitle}
      </h4>
      <p className='font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white group-hover:text-opacity-70'>
        {featureDesc}
      </p>
      <div className='inline-block mt-[30px]'>
        <Link
          to={featureUrl}
          className='flex items-center gap-2 rounded-3xl text-HeadingColor-0 font-Rajdhani overflow-hidden transition-all duration-500 group-hover:text-white font-semibold text-lg relative z-10'
        >
          {featureBtnText}
          <span className='transition-all duration-500 hover:-rotate-45'>
            {featureBtnIcon}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
