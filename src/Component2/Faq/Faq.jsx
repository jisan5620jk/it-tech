import { FaChevronDown, FaRegUser } from 'react-icons/fa6';
import faqIcon from '/images/AI-2-2.png';
import faqIcon2 from '/images/AI-2-1-1.png';
import faqIcon3 from '/images/AI-2-2-1.png';
import { useState, useRef, useEffect } from 'react';
import titleShape from '/images/sub-title-shape.png';

const faqs = [
  {
    id: 1,
    question: 'How does your robot working?',
    answer:
      'Competently leverage existing top line client centric supply enthusiastically maximi effective technologies',
    icon: faqIcon,
  },
  {
    id: 2,
    question: 'How are Robot’s Power?',
    answer:
      'Competently leverage existing top line client centric supply enthusiastically maximi effective technologies',
    icon: faqIcon2,
  },
  {
    id: 3,
    question: 'Can Robot works safely?',
    answer:
      'Competently leverage existing top line client centric supply enthusiastically maximi effective technologies',
    icon: faqIcon3,
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item as default active
  const contentRefs = useRef([]);

  useEffect(() => {
    if (activeIndex !== null) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (index !== activeIndex) {
        ref.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='pt-28'>
      <div className='Container'>
        <div className='grid grid-cols-2 items-center'>
          <div className='bg-[url("/images/AI-2-13.png")] bg-cover bg-center rounded-[10px] overflow-hidden px-[50px] pt-[50px] pb-[64px] max-w-[520px] w-full text-center'>
            <h3 className='font-Rajdhani font-bold text-[40px] text-white'>
              Send A Message
            </h3>
            <p className='font-Nunito text-TextColor-0 mb-9 -mt-[2px]'>
              Write Us Something sending a message
            </p>
            <form
              action='#'
              className='space-y-5'
            >
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  required
                  className='h-[60px] w-full rounded-md pl-[80px] text-white font-Nunito bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                />
                <span className='absolute top-0 left-0 size-[60px] flex items-center justify-center text-white text-opacity-40 border-r border-white border-opacity-10'>
                  <FaRegUser />
                </span>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  required
                  className='h-[60px] w-full rounded-md pl-[80px] text-white font-Nunito bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                />
                <span className='absolute top-0 left-0 size-[60px] flex items-center justify-center text-white text-opacity-40 border-r border-white border-opacity-10'>
                  <FaRegUser />
                </span>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  required
                  className='h-[60px] w-full rounded-md pl-[80px] text-white font-Nunito bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                />
                <span className='absolute top-0 left-0 size-[60px] flex items-center justify-center text-white text-opacity-40 border-r border-white border-opacity-10'>
                  <FaRegUser />
                </span>
              </div>
              <div className='relative'>
                <textarea
                  name='message'
                  id='message'
                  className='min-h-[150px] w-full rounded-md pl-[80px] resize-none text-white font-Nunito bg-white bg-opacity-5 outline-none border-2 border-transparent transition-all duration-500 ease-linear hover:border-PrimaryColor-0 focus:border-PrimaryColor-0'
                ></textarea>
              </div>
              <button
                type='submit'
                className='h-[60px] w-full rounded-md text-white font-Nunito bg-PrimaryColor-0 outline-none border-2 border-transparent transition-all duration-500 ease-linear '
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              ASKED QUESTION
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Frequently Asked Question for
              <br />
              Robotics Industry
            </h1>
            <ul className='space-y-[26px]'>
              {faqs.map((faq, index) => (
                <li key={index}>
                  <div className='flex gap-7 group px-8 py-7 bg-white bg-opacity-45 border-2 border-white rounded-[10px] shadow-cases'>
                    <div>
                      <img
                        src={faq.icon}
                        draggable={false}
                        alt='Icon'
                        className='transition-all duration-500 group-hover:animate-wobble_vertical'
                      />
                    </div>
                    <div className='flex-1'>
                      <div
                        className={`faq-expand-btn cursor-pointer flex items-center justify-between  ${
                          activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <h5 className='font-Rajdhani font-semibold text-2xl text-HeadingColor-0'>
                          {faq.question}
                        </h5>
                        <span>
                          <FaChevronDown />
                        </span>
                      </div>
                      <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        className='max-h-0 overflow-hidden transition-all duration-500'
                      >
                        <p className='font-Nunito text-TextColor2-0 w-[90%]'>
                          {faq.answer}
                        </p>
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

export default Faq;
