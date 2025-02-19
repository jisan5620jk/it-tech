/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const LatestWorkCard = ({
  latestWorkCardImg,
  latestWorkSubTitle,
  latestWorkCardURL,
  latestWorkTitle,
  latestWorkBtnText,
}) => {
  return (
    <div className='sm:pl-[30px] sm:pt-[30px]'>
      <div className='bg-BodyBg3-0 rounded-lg relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-br before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 before:rounded-lg hover:before:w-full hover:before:left-0'>
        <div className='sm:-ml-[30px] relative sm:-top-[30px]'>
          <img
            src={latestWorkCardImg}
            draggable={false}
            alt='Image'
            className='w-full sm:pr-[30px]'
          />
        </div>
        <div className='px-4 sm:px-[38px] md:px-8 xl:px-[38px] pb-7 pt-5 sm:pt-2'>
          <h6 className='text-white bg-white bg-opacity-5 font-Rajdhani font-medium uppercase text-sm rounded-full px-[26px] py-[7px] inline-block'>
            {latestWorkSubTitle}
          </h6>
          <div className='inline-block mt-4'>
            <Link
              to={latestWorkCardURL}
              className='text-white text-xl sm:text-2xl md:text-xl lg:text-2xl font-Rajdhani font-medium'
            >
              {latestWorkTitle}
            </Link>
          </div>
          <div className='inline-block mt-5'>
            <Link
              to={latestWorkCardURL}
              className='latest-work-btn flex items-center gap-2 text-white font-Rajdhani font-medium text-lg uppercase'
            >
              {latestWorkBtnText}
              <span className='icon-style'>
                <svg
                  className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-3 w-auto transition-all duration-500'
                  xmlns='http://www.w3.org/2000/svg'
                  stroke='CurrentColor'
                  width='14.2'
                  height='14.2'
                  viewBox='0 0 14.2 14.2'
                >
                  <g>
                    <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                  </g>
                  <g>
                    <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorkCard;
