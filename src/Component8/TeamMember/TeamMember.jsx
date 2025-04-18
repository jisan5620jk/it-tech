import teamThumb from '/images/team3-1.jpg';
import teamThumb2 from '/images/team2.jpeg';
import teamThumb3 from '/images/team1.jpg';
import TeamCard from './TeamCard';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import titleShape from '/images/sub-title-shape.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Anjelina Jholi',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'CEO & Founder',
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: 'Jone D. Alexon',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'Excutive Officer',
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: 'Alaina Melvis',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'IT Expert',
  },
];

const TeamMember = () => {
  const settings = {
    loop: true,
    spaceBetween: 32,
    modules: [Autoplay],
    speed: 1500,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className='bg-BodyBg7-0 pt-16 pb-0 md:pt-20 lg:pt-28 relative z-10'>
      <div className='Container'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              MEET OUR TEAM
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              High Professional Team Ready
              <br /> To Develope Your Business
            </h1>
          </div>
          <div className='lg:mr-6 xl:mr-0'>
            <Link
              to={'/team_inner2'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All Member`}
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
        <div className='mt-[36px]'>
          <Swiper {...settings}>
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                socialIcon4,
                teamDesc,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div>
                      <TeamCard
                        teamThumb={teamThumb}
                        teamTitle={teamTitle}
                        socialIcon={socialIcon}
                        socialIcon2={socialIcon2}
                        socialIcon3={socialIcon3}
                        socialIcon4={socialIcon4}
                        teamDesc={teamDesc}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
      <div className='h-[120px] w-full bg-BodyBg8-0 absolute bottom-0 left-0 -z-10 inline-block'></div>
    </section>
  );
};

export default TeamMember;
