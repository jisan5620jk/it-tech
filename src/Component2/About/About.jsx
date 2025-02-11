import aboutThumb from '/images/AI-11.png';
import { Link } from 'react-router-dom';
import titleShape from '/images/sub-title-shape.png';
import { GoCheckCircleFill } from 'react-icons/go';

const About = () => {
  return (
    <section className='py-[120px] relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center'>
          <div className='relative z-10'>
            <img
              src={aboutThumb}
              draggable='false'
              className='md:w-full lg:w 2xl:-ml-[38px] 2xl:max-w-[inherit]'
            />
            <div className='absolute bottom-32 right-0 px-5 py-6 sm:flex gap-2 items-center animate-wiggle hidden bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border-2 rounded-lg border-white'>
              <div className='text-PrimaryColor-0'>
                <GoCheckCircleFill size={24} />
              </div>
              <div>
                <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl'>
                  High Performances
                </h5>
              </div>
            </div>
          </div>
          <div className='relative'>
            <h5 className='flex items-center gap-2 font-Rajdhani text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              WHAT WE PROVIDE
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Building Tomorrow’s Technology
              <br />
              A Commitment to Excellence in
              <br />
              Robotics Industry
            </h1>
            <p className='font-Nunito text-TextColor2-0 pb-7'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply chains. Enthusiastically maximize cost
              effective technologies dynamically negotiate multimedia based
              e-commerce competitive
            </p>
            <div className='flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center'>
              <ul>
                <li className='font-Rajdhani font-semibold text-HeadingColor-0 flex items-center gap-2 mb-3'>
                  <div className='text-PrimaryColor-0'>
                    <GoCheckCircleFill size={20} />
                  </div>
                  <h5 className='font-Rajdhani font-semibold text-HeadingColor-0 text-xl'>
                    Autonomous Navigation
                  </h5>
                </li>
              </ul>
            </div>

            <Link
              to={'/about'}
              className='inline-block mt-7'
            >
              <button className='primary-btn'>
                {`Discover More`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
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
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
