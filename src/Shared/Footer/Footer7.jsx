import { Link } from 'react-router-dom';
import logo from '/images/logo2.png';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCircleCheck,
  FaXTwitter,
} from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { PiArrowCircleRight } from 'react-icons/pi';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Footer7 = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.png')] bg-no-repeat bg-center bg-cover relative pt-16 md:pt-20 lg:pt-28 overflow-hidden">
      <div className='Container'>
        <div className='grid gap-y-7 grid-cols-12 lg:mt-2'>
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <div className='mb-[33px]'>
              <Link to={'/home3'}>
                <img
                  src={logo}
                  draggable={false}
                  alt='Brand Logo'
                  title='IT-Tech'
                />
              </Link>
            </div>
            <p className='font-Nunito text-TextColor-0 mt-7 lg:mt-0 mb-5 w-full max-w-[340px]'>
              Globally expedite enterprise-wide action items rather than
              distinctive architectures. Globally engage market positioning.
            </p>
            <div className='flex items-center gap-2 border-y border-white border-opacity-10 py-[18px] mr-8 mb-4'>
              <div className='size-[22px] rounded-full flex items-center justify-center border border-PrimaryColor-0 text-PrimaryColor-0'>
                <BiSolidPhoneCall size={'15'} />
              </div>
              <a
                href='tel:+001234567890'
                title='+00 123 (4567) 890'
              >
                <button className='font-Rajdhani text-lg text-white font-medium'>
                  +00 123 (4567) 890
                </button>
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-PrimaryColor-0'>
                <FaEnvelope size={'18'} />
              </div>
              <a
                href='mailto:example@gmail.com'
                title='example@gmail.com'
              >
                <button className='font-Rajdhani text-lg text-white font-medium'>
                  example@gmail.com
                </button>
              </a>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-Rajdhani text-[28px] text-white font-semibold mb-[33px]'>
              Company
            </h4>
            <ul>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-Rajdhani text-[28px] text-white font-semibold mb-[33px]'>
              Our Services
            </h4>
            <ul>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    IT Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Cyber Security
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    Brand Identity
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <PiArrowCircleRight className='text-xl text-PrimaryColor-0 relative -top-[1px]' />
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-Rajdhani text-[28px] text-white font-semibold mb-[30px]'>
              Newsletter
            </h4>
            <form
              action='#'
              method='post'
            >
              <label
                htmlFor='email'
                className='relative'
              >
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your E-Mail*'
                  required
                  className='w-full h-[56px] font-Nunito rounded-full outline-none focus:outline-none border-none bg-white bg-opacity-10 px-8 py-2 text-white placeholder:text-white mb-3'
                />
                <HiOutlineMail className='absolute top-1/2 -translate-y-1/2 right-6 text-white text-xl' />
              </label>

              <div>
                <button
                  type='submit'
                  className='primary-btn !w-full !py-[17px]'
                >
                  {`Discover More`}
                  <GoArrowRight size={'22'} />
                </button>
              </div>
            </form>
            <p className='font-Nunito flex gap-2 text-TextColor-0 font-medium mt-5'>
              <span className='relative top-[3px] text-green-600'>
                <FaRegCircleCheck />
              </span>
              Protecting Your Service
            </p>
          </div>
        </div>
      </div>
      <div className='Container'>
        <div className='bg-white bg-opacity-5 mb-10 mt-12 md:mt-[112px] rounded-lg md:rounded-full flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-5 pl-8 pr-6'>
          <div>
            <p className='font-Nunito text-white'>
              &copy; {new Date().getFullYear()} IT-Tech. Designed By Dream IT
              Solution
            </p>
          </div>
          <div>
            <ul className='flex gap-3'>
              <li>
                <button className='size-9 rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className='size-9 rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className='size-9 rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className='size-9 rounded-full text-sm bg-white bg-opacity-10 flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-PrimaryColor2-0 before:rotate-180 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;
