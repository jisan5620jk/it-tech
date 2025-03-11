/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ProjectCard = ({
  projectImg,
  projectBoxLink,
  projectSubTitle,
  projectTitle,
  projectBtn,
}) => {
  return (
    <div className='overflow-hidden rounded-[10px]'>
      <div className='relative group before:absolute before:top-0 before:left-0 before:w-2/4 before:h-full before:bg-gradient-to-l before:from-transparent before:to-SecondaryColor-0 before:opacity-90'>
        <img
          src={projectImg}
          draggable={false}
          alt='Image'
          className='w-full'
        />
        <div className='absolute z-10 bottom-[110px] left-[50px] transition-all duration-500 group-hover:bottom-[184px] delay-100'>
          <h6 className='bg-white bg-opacity-10 px-6 py-1 rounded-full uppercase font-Rajdhani font-medium text-white inline-block border-white border border-opacity-20'>
            {projectSubTitle}
          </h6>
        </div>
        <div className='absolute z-10 bottom-[55px] left-[50px] transition-all duration-500 group-hover:bottom-[130px] delay-200'>
          <Link
            to={projectBoxLink}
            className='font-Rajdhani font-bold text-2xl md:text-[26px] xl:text-2xl 2xl:text-[40px] leading-8 text-white'
          >
            {projectTitle}
          </Link>
        </div>
        <div className='absolute z-10 left-[50px] bottom-0 opacity-0 transition-all duration-500 group-hover:bottom-[70px] group-hover:opacity-100 delay-300'>
          <Link
            to={projectBoxLink}
            className='font-Rajdhani text-white font-medium bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 px-[30px] py-[10px] rounded-full uppercase'
          >
            {projectBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
