import star from '/images/star.png';

const Marquee = () => {
  const marqueeItems = [
    'Artificial Intelligence',
    'Data Science',
    'Industrial Robotics',
  ];

  return (
    <div className='w-full overflow-hidden whitespace-nowrap bg-gradient-to-l from-PrimaryColor2-0 to-PrimaryColor3-0 pt-7 pb-7 md:pt-[33px] md:pb-[29px]'>
      <div className='inline-flex items-center will-change-transform overflow-hidden animate-marquee'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-3xl md:text-[40px] text-white uppercase font-Rajdhani font-semibold mx-4 md:mx-8'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[35px] pb-1'
            >
              <img
                src={star}
                draggable={false}
                alt='Star'
                className='w-full animate-rotational brightness-0 invert opacity-50'
              />
            </span>
          </>
        ))}
      </div>
      <div className='inline-flex items-center will-change-transform overflow-hidden animate-marquee'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-3xl md:text-[40px] text-white uppercase font-Rajdhani font-semibold mx-4 md:mx-8'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[35px] pb-1'
            >
              <img
                src={star}
                draggable={false}
                alt='Star'
                className='w-full animate-rotational brightness-0 invert opacity-50'
              />
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
