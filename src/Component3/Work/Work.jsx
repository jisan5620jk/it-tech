import WorkCard from './WorkCard';
import workImg from '/images/port-1-1.png';
import workImg2 from '/images/port-2-1.png';
import workImg3 from '/images/port-3-1.png';
import workImg4 from '/images/port-4.png';
import workImg5 from '/images/port-5.png';
import workImg6 from '/images/port-6.png';
import titleShape from '/images/sub-title-shape.png';
import { Link } from 'react-router-dom';

const workCard = [
  {
    id: 1,
    workImg: workImg4,
    workBoxLink: '/project_details',
    workTitle: 'High Efficiency Robotics Automotion',
    workSubTitle: 'Design',
  },
  {
    id: 2,
    workImg: workImg3,
    workBoxLink: '/project_details',
    workTitle: 'Modern 3d Art for Business',
    workSubTitle: '3d Art',
  },
  {
    id: 3,
    workImg: workImg2,
    workBoxLink: '/project_details',
    workTitle: 'Business Card Design',
    workSubTitle: 'Design',
  },
  {
    id: 4,
    workImg: workImg,
    workBoxLink: '/project_details',
    workTitle: 'Mobile App Development',
    workSubTitle: 'Development',
  },
  {
    id: 5,
    workImg: workImg5,
    workBoxLink: '/project_details',
    workTitle: 'Website Design & Development',
    workSubTitle: 'Design',
  },
  {
    id: 6,
    workImg: workImg6,
    workBoxLink: '/project_details',
    workTitle: 'Mock-Up Design',
    workSubTitle: 'Design',
  },
];

const Work = () => {
  return (
    <section className='work-section mx-2 sm:mx-3 md:mx-5 lg:mx-2 xl:mx-5 2xl:mx-8 3xl:mx-[50px] py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              WAHT WE PROVIDE
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Provide High Quality Software’s
              <br />
              Service for All Industry
            </h1>
          </div>
          <div className=''>
            <Link
              to={'/service'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All Service`}
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
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-9'>
        {workCard.map(
          ({ id, workImg, workBoxLink, workTitle, workSubTitle }) => {
            return (
              <div key={id}>
                <WorkCard
                  workImg={workImg}
                  workBoxLink={workBoxLink}
                  workTitle={workTitle}
                  workSubTitle={workSubTitle}
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Work;
