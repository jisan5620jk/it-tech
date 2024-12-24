/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureUrl,
  featureBtnIcon
}) => {
  return (
    <div className="text-center flex items-center justify-between group px-10 py-14 rounded-lg bg-gradient-to-b to-PrimaryColor-0 from-PrimaryColor2-0 overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-HeadingColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
      <div className='flex items-center gap-5'>
        <div className='relative text-center z-10'>
          <img
            src={featureIcon}
            draggable='false'
            className='m-auto'
          />
        </div>
        <h4 className='font-Rajdhani font-bold text-2xl sm:text-[26px] lg:text-[28px]] xl:text-3xl text-white transition-all duration-500 group-hover:text-white'>
          {featureTitle}
        </h4>
      </div>
      <Link
        to={featureUrl}
        className='inline-block relative'>
        <img
          src={featureBtnIcon}
          alt='Icon'
        />
      </Link>
    </div>
  );
};

export default FeatureCard;
