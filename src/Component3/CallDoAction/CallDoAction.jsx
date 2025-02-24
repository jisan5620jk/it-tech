import { Link } from "react-router-dom";
import shape from '/images/call-do-shape2.webp';
import shape2 from '/images/call-do-shape3.webp';
import shape3 from '/images/call-do-shape1.webp';

const CallDoAction = () => {
  return (
    <section className="mx-2 sm:mx-3 md:mx-5 2xl:mx-[50px] rounded-t-lg lg:rounded-t-2xl bg-[url('/images/call-do-bg.webp')] bg-cover bg-center bg-no-repeat py-16 relative">
      <img
        src={shape}
        draggable={false}
        alt='Shape'
        className='absolute top-[70px]] left-24 animate-rotateX'
      />
      <div className='Container'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-2'>
              {`Need any project? we're hare`}
            </h1>
            <p className='font-Nunito text-white'>
              Feel free to contact with us. Our team ready to help
            </p>
          </div>
          <div>
            <Link
              to={'/about'}
              className='inline-block'
            >
              <button className='primary-btn'>
                Contact With Us
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
      <img
        src={shape2}
        draggable={false}
        alt='Shape'
        className='absolute top-[70px] right-36 animate-movebtn'
      />
      <img
        src={shape3}
        draggable={false}
        alt='Shape'
        className='absolute -bottom-36 left-1/2 -translate-x-1/2 animate-wiggle'
      />
    </section>
  );
};

export default CallDoAction;