import titleShape from '/images/sub-title-shape.png';
import './pricing-box.css';
import OnScrollCounter from './OnScrollCounter';
import { Link } from 'react-router-dom';

const Pricing = () => {
  let isMonthly = true;

  function togglePlans() {
    isMonthly = !isMonthly;

    // Toggle the content
    document.getElementById('monthly').classList.toggle('active', isMonthly);
    document.getElementById('yearly').classList.toggle('active', !isMonthly);

    // Move the toggle circle
    const toggleCircle = document.getElementById('toggleCircle');
    toggleCircle.style.transform = isMonthly
      ? 'translateX(0)'
      : 'translateX(30px)';
  }

  // useEffect(() => {
  //   const handleMouseEnter = (event) => {
  //     event.target.classList.add('active');

  //     // Remove 'active' class from siblings
  //     const parent = event.target.parentElement;
  //     if (parent) {
  //       const siblings = parent.querySelectorAll('.pricing-box');
  //       siblings.forEach((sibling) => {
  //         if (sibling !== event.target) {
  //           sibling.classList.remove('active');
  //         }
  //       });
  //     }
  //   };

  //   const elements = document.querySelectorAll('.pricing-box');
  //   elements.forEach((element) => {
  //     element.addEventListener('mouseenter', handleMouseEnter);
  //   });

  //   // Clean up event listeners when component unmounts
  //   return () => {
  //     elements.forEach((element) => {
  //       element.removeEventListener('mouseenter', handleMouseEnter);
  //     });
  //   };
  // }, []);

  return (
    <section className="relative overflow-hidden py-28 bg-[url('/images/pricing-bg2.png')] bg-cover bg-no-repeat bg-center">
      <div className='Container'>
        <div className='flex justify-between items-center'>
          <div className='w-full mx-auto'>
            <h5 className='flex items-center gap-2 font-Rajdhani text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              About Us
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Transform Your Website into a<br />
              Revenue-Generating Machine
              <br />
              Achieve Online Success
            </h1>
          </div>
          <div
            className='toggle-container'
            onClick={togglePlans}
          >
            <div>Monthly</div>
            <div className={`toggle ${isMonthly ? 'active' : ''}`}>
              <div
                id='toggleCircle'
                className='toggle-circle'
                style={{
                  transform: isMonthly ? 'translateX(0)' : 'translateX(30px)',
                }}
              ></div>
            </div>
            <div>Yearly</div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-7'>
          <div>
            <div
              id='monthly'
              className={`tab-content ${isMonthly ? 'active' : ''}`}
            >
              <div className='group bg-HeadingColor-0 bg-opacity-5 px-10 py-10'>
                <h5 className='font-Rajdhani font-semibold text-2xl text-HeadingColor-0'>
                  Basic Plan
                </h5>
                <div className='flex items-center gap-1'>
                  <h6 className='font-Rajdhani font-semibold text-3xl text-HeadingColor-0 relative -top-2'>
                    $
                  </h6>
                  <div className='font-Rajdhani text-[60px] text-HeadingColor-0 font-semibold'>
                    <OnScrollCounter
                      start={0}
                      end={30}
                      duration={1000}
                    />
                  </div>
                  <p className='font-Nunito text-TextColor2-0 ml-3'>
                    Competently leverage <br /> maximize done
                  </p>
                </div>
                <Link
                  to={'/'}
                  className='bg-HeadingColor-0 pricing-btn text-white font-Rajdhani flex items-center gap-2 justify-center font-semibold text-center w-full uppercase py-3 px-7 rounded-full overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-r before:ease-linear before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 hover:before:w-full hover:before:left-0'
                >
                  Get StartTed Now
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
                </Link>
                <Link
                  to={'/'}
                  className='mt-3 bg-HeadingColor-0 bg-opacity-5 text-HeadingColor-0 transition-all duration-500 hover:text-white pricing-btn font-Rajdhani flex items-center gap-2 justify-center font-semibold text-center w-full uppercase py-3 px-7 rounded-full overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-r before:ease-linear before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 hover:before:w-full hover:before:left-0'
                >
                  Get StartTed Now
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
                </Link>
              </div>
            </div>

            <div
              id='yearly'
              className={`tab-content ${isMonthly ? '' : 'active'}`}
            >
              <div className='group bg-HeadingColor-0 bg-opacity-5'>
                <h2>Yearly Plan</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
