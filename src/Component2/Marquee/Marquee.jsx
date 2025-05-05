import star from '/images/star.png';

const Marquee = () => {
  const marqueeItems = [
    'ARTIFICIAL INTELLIGENCE',
    'DATA SCIENCE',
    'Industrial Robotics',
  ];

  return (
    <div className='w-full overflow-hidden whitespace-nowrap bg-transparent mt-[100px]'>
      <div className='inline-flex will-change-transform overflow-hidden animate-marquee transition-all hover:animate-paused'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-6xl text-HeadingColor-0 uppercase font-Rajdhani font-bold mx-10'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[48px]'
            >
              <img
                src={star}
                draggable={false}
                alt='Star'
                className='w-full animate-rotational'
              />
            </span>
          </>
        ))}
      </div>
      <div className='inline-flex will-change-transform overflow-hidden animate-marquee transition-all hover:animate-paused'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-6xl text-HeadingColor-0 uppercase font-Rajdhani font-bold mx-10'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[48px]'
            >
              <img
                src={star}
                draggable={false}
                alt='Star'
                className='w-full animate-rotational'
              />
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
