import historyIcon2 from '/images/icon1_About-Us.webp';
import historyIcon3 from '/images/icon2_About-Us.webp';
import historyIcon4 from '/images/icon3_About-Us.webp';
import titleShape from '/images/sub-title-shape.png';
import HistoryCard from './HistoryCard';
import { GoArrowRight } from 'react-icons/go';

const historyData = [
  {
    id: 1,
    historyIcon: historyIcon2,
    historyTitle: 'Our Technology Solutions',
    historyDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical history timely human capital',
    historyUrl: '/history',
    historyBtnText: 'View Our All historys',
    historyBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    historyIcon: historyIcon3,
    historyTitle: 'Why should choose Our historys',
    historyDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical history timely human capital',
    historyUrl: '/history',
    historyBtnText: 'Why Choose Us',
    historyBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    historyIcon: historyIcon4,
    historyTitle: 'IT-Tech Mission and vission',
    historyDesc:
      'Authoritatively disintermediate business to optimal web-readiness task vertical history timely human capital',
    historyUrl: '/history',
    historyBtnText: 'Mission & Vission',
    historyBtnIcon: <GoArrowRight />,
  },
];

const history = () => {
  return (
    <section className='bg-[url("/images/About-Us-history-bg.webp")] bg-no-repeat bg-cover bg-center py-16 md:py-20 lg:py-28 relative z-10'>
      <div className='Container '>
        <div className=''>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='brightness-0 invert-[1]'
            />{' '}
            More About
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[36px] md:leading-[46px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
            Trusted by Industry Leaders
            <br /> Successful Softwares
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-12'>
          {historyData.map(
            ({
              id,
              historyIcon,
              historyTitle,
              historyDesc,
              historyUrl,
              historyBtnText,
              historyBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <HistoryCard
                    historyIcon={historyIcon}
                    historyTitle={historyTitle}
                    historyDesc={historyDesc}
                    historyUrl={historyUrl}
                    historyBtnText={historyBtnText}
                    historyBtnIcon={historyBtnIcon}
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

export default history;
