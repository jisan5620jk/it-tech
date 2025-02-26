import featureIcon from '/images/service-icon4.webp';
import featureIcon2 from '/images/service-icon1.webp';
import featureIcon3 from '/images/service-icon2.webp';
import featureIcon4 from '/images/service-icon3.webp';
import featureIcon5 from '/images/icon.webp';
import featureIcon6 from '/images/service-icon5.webp';
import titleShape from '/images/sub-title-shape.png';
import FeatureCard from './FeatureCard';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'Robotic Automation',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Machine Learning',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'AI System Design',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: 'AI Integrations',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 5,
    featureIcon: featureIcon5,
    featureTitle: 'AI Integrations',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
  {
    id: 6,
    featureIcon: featureIcon6,
    featureTitle: 'AI Integrations',
    featureDesc:
      'Competently leverage existing top-line maximize cost effective done',
    featureUrl: '/service',
    featureBtnText: 'Learn More',
    featureBtnIcon: <GoArrowRight />,
  },
];

const Feature = () => {
  return (
    <section className='bg-BodyBgDark3-0 pb-16 md:pb-20 lg:pb-28 pt-16 md:pt-20 lg:pt-[138px] relative z-10 overflow-hidden -mt-[26px]'>
      <div className='absolute -z-10 -top-[100%] left-1/2 -translate-x-1/2 size-[1245px] rounded-full blur-[150px] bg-PrimaryColor2-0 bg-opacity-50'></div>
      <div className='Container'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
                className='brightness-0 invert-[1]'
              />{' '}
              WAHT WE PROVIDE
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-11'>
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtnText,
              featureBtnIcon,
            }) => {
              return (
                <div
                  key={id}
                >
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtnText={featureBtnText}
                    featureBtnIcon={featureBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
