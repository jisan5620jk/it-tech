/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const PortfolioCard = ({
  portfolioThumb,
  portfolioIcon,
  portfolioTitle,
  portfolioUrl,
  portfolioBtn,
}) => {
  return (
    <div>
      <div className='relative z-10 overflow-hidden group'>
        <div className='rounded-lg relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:h-full group-hover:before:top-0 before:z-10 group-hover:before:opacity-20'>
          <img
            src={portfolioThumb}
            draggable={false}
            className='w-full'
          />
        </div>
        <div className='relative z-10 ml-[60px] py-3 xl:-mt-[70px] bg-white rounded-b-[10px] rounded-l-[10px] pl-8 border-PrimaryColor-0 transition-all duration-500 group-hover:pb-16 group-hover:-mt-[134px]'>
          <div>
            <img
              src={portfolioIcon}
              draggable={false}
              alt='Icon'
            />
          </div>
          <Link to={portfolioUrl}>
            <button className='font-Rajdhani font-semibold text-xl lg:text-lg xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 text-left transition-all duration-500 group-hover:text-PrimaryColor-0'>
              {portfolioTitle}
            </button>
          </Link>
          <Link
            to={portfolioUrl}
            className='-rotate-90 xl:rotate-0 transition-all duration-500 absolute -bottom-7 opacity-0 left-8 group-hover:bottom-[20px] group-hover:opacity-100'
          >
            <button className='size-[42px] rounded-full text-xl flex items-center justify-center text-white bg-gradient-to-b to-PrimaryColor2-0 from-PrimaryColor3-0'>
              {portfolioBtn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
