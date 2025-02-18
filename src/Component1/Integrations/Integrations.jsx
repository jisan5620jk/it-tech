import { Link } from 'react-router-dom';
import titleShape from '/images/sub-title-shape.png';
import { BsArrowRight } from 'react-icons/bs';
import OnScrollCounter from '../Pricing/OnScrollCounter';
import integrationImg from '/images/integration-thumb.png';
import integrationShape from '/images/integration-hand.png';
import integrationShape2 from '/images/integration-star.png';
import integrationShape3 from '/images/integration-dot.png';
import arrowShape from '/images/arrow-shape.png';

const Integrations = () => {
  return (
    <section className='bg-[url(/images/integration-bg2.png)] bg-cover bg-center bg-no-repeat relative py-28 z-10'>
      <div className='Container'>
        <div className='grid grid-cols-2 items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Integrations
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Transform Your Website into a<br /> Revenue-Generating Machine
              <br /> Achieve Online Success
            </h1>
            <div className='grid grid-cols-2 border-t border-HeadingColor-0 border-opacity-10 pt-8 mt-7 mr-4 xl:mr-8'>
              <div>
                <div className='flex items-start gap-2 -ml-[6px]'>
                  <div className='text-PrimaryColor-0 inline-block'>
                    <BsArrowRight
                      size={38}
                      className='-rotate-90 inline-block'
                    />
                  </div>
                  <div className='flex items-center -mt-3'>
                    <div className='font-Rajdhani font-semibold text-HeadingColor-0 text-[60px] leading-10'>
                      <OnScrollCounter
                        start={0}
                        end={86}
                        duration={1000}
                      />
                    </div>
                    <h6 className='font-Rajdhani font-semibold text-HeadingColor-0 text-[60px] leading-10'>
                      %
                    </h6>
                  </div>
                </div>
                <p className='font-Nunito text-TextColor2-0 text-[15px]'>
                  Sales Growth and top Organic
                  <br /> Traffice Generate
                </p>
              </div>
              <div>
                <div className='flex items-start gap-2 -ml-[6px]'>
                  <div className='text-PrimaryColor-0 inline-block'>
                    <BsArrowRight
                      size={38}
                      className='-rotate-90 inline-block'
                    />
                  </div>
                  <div className='flex items-center -mt-3'>
                    <div className='font-Rajdhani font-semibold text-HeadingColor-0 text-[60px] leading-10'>
                      <OnScrollCounter
                        start={0}
                        end={98}
                        duration={1000}
                      />
                    </div>
                    <h6 className='font-Rajdhani font-semibold text-HeadingColor-0 text-[60px] leading-10'>
                      %
                    </h6>
                  </div>
                </div>
                <p className='font-Nunito text-TextColor2-0 text-[15px]'>
                  Revenue Generating for Local
                  <br /> and Global Business
                </p>
              </div>
            </div>
            <div className='flex items-center gap-16 mt-11'>
              <Link
                to={'/about'}
                className='inline-block'
              >
                <button className='primary-btn'>
                  {`More About`}
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
              <div>
                <img
                  src={arrowShape}
                  draggable={false}
                  alt='Shape'
                  className='animate-dance3'
                />
              </div>
            </div>
          </div>
          <div className='inline-block relative'>
            <div className='flex justify-end'>
              <img
                src={integrationImg}
                draggable={false}
                alt='Image'
                className='relative z-10'
              />
            </div>
            <img
              src={integrationShape2}
              draggable={false}
              alt='Image'
              className='absolute -z-10 top-0 left-0 animate-rotational'
            />
            <img
              src={integrationShape3}
              draggable={false}
              alt='Image'
              className='absolute -z-10 top-0 right-0 animate-wiggle'
            />
          </div>
        </div>
      </div>
      <img
        src={integrationShape}
        draggable={false}
        alt='Image'
        className='absolute -z-10 bottom-0 right-[120px]'
      />
    </section>
  );
};

export default Integrations;
