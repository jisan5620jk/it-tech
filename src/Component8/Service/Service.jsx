import servicethumb from '/images/faqs-thumb.webp';
import titleShape from '/images/sub-title-shape.png';
import { useEffect, useRef, useState } from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const serviceData = [
  {
    id: 1,
    itemTitle: 'Security Consulting',
    itemBoxTitle: 'Key Features',
    thumb: servicethumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    itemTitle: 'Watchful Eyes CCTV',
    itemBoxTitle: 'Key Features',
    thumb: servicethumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    itemTitle: 'IntelliView Surveillance',
    itemBoxTitle: 'Key Features',
    thumb: servicethumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
  {
    id: 4,
    itemTitle: 'SecureScope Solutions',
    itemBoxTitle: 'Key Features',
    thumb: servicethumb,
    btnTitle: 'Details',
    btnIcon: <GoArrowRight />,
  },
];

const serviceListData = [
  {
    id: 1,
    listIcon: <FaCheck />,
    listTitle: 'Clear and Detailed Footage',
  },
  {
    id: 2,
    listIcon: <FaCheck />,
    listTitle: 'Maintaining Security around Clock',
  },
  {
    id: 3,
    listIcon: <FaCheck />,
    listTitle: 'Install and Setup Softwares',
  },
];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item as default active
  const contentRefs = useRef([]);

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (index !== activeIndex && ref) {
        ref.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='bg-HeadingColor-0 py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 relative z-10'>
          <div>
            <div>
              <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                />{' '}
                WHAT WE PROVIDE
              </h5>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
                Services we Provide
              </h1>
            </div>
            <ul className='mt-7'>
              {serviceData.map((serviceItem, index) => (
                <li
                  key={index}
                  className={`border-white border-opacity-10 ${index === 0 ? 'border-t-none' : 'border-t'}`}
                >
                  <div className=''>
                    <div
                      className={`cursor-pointer flex items-center justify-between py-5 ${
                        activeIndex === index ? 'active' : ''
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h5 className='font-Rajdhani font-semibold text-xl sm:text-2xl md:text-3xl text-white'>
                        {serviceItem.itemTitle}
                      </h5>
                      <div className='relative flex items-center'>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index
                              ? 'translate-x-[10px] text-PrimaryColor2-0 translate-y-[2px]'
                              : 'rotate-90 translate-x-[11px] text-white text-opacity-50'
                          }`}
                        >
                          <FaMinus />
                        </span>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index
                              ? '-translate-x-[4px] text-PrimaryColor2-0 translate-y-[2px]'
                              : '-translate-x-[5px] -translate-y-0 text-white text-opacity-50'
                          }`}
                        >
                          <FaMinus />
                        </span>
                      </div>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className='max-h-0 overflow-hidden transition-all duration-500 gap-8'
                    >
                      <div className='flex items-center gap-8 border-t border-white border-opacity-10 py-7'>
                        <div>
                          <img
                            src={serviceItem.thumb}
                            draggable={false}
                            alt='thumb'
                            className='transition-all duration-500'
                          />
                        </div>
                        <div>
                          <h4 className='font-Rajdhani font-semibold text-[28px] text-white'>
                            {serviceItem.itemBoxTitle}
                          </h4>
                          <ul className='space-y-3 mt-[14px] mb-7'>
                            {serviceListData.map((serviceList, index) => (
                              <li
                                key={index}
                                className='font-Nunito text-white text-opacity-60 flex items-center gap-2'
                              >
                                <span className='text-PrimaryColor2-0'>
                                  {serviceList.listIcon}
                                </span>
                                {serviceList.listTitle}
                              </li>
                            ))}
                          </ul>
                          <div className='inline-block'>
                            <Link
                              to={'/service_details'}
                              className='flex justify-start items-center gap-1 text-sm bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 text-white pl-6 pr-5 py-[6px] uppercase font-Rajdhani font-medium rounded-full'
                            >
                              {serviceItem.btnTitle}
                              {serviceItem.btnIcon}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
