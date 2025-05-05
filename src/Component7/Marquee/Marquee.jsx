import star from '/images/star-1.png';

const Marquee = () => {
  const marqueeItems = [
    'Artificial Intelligence',
    'Website Development',
    'UI/UX Design',
    'Data Science',
    'Start-Up Agency',
  ];

  return (
    <div className='w-full overflow-hidden whitespace-nowrap bg-PrimaryColor-0 pt-[47px] pb-[36px]'>
      <div className='inline-flex will-change-transform overflow-hidden animate-marquee'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-3xl md:text-4xl text-white uppercase font-Rajdhani font-semibold mx-5'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[30px] pt-2 md:pt-0'
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
      <div className='inline-flex will-change-transform overflow-hidden animate-marquee'>
        {marqueeItems.concat(marqueeItems).map((text, index) => (
          <>
            <span
              key={`text-${index}`}
              className='inline-block text-3xl md:text-4xl text-white uppercase font-Rajdhani font-semibold mx-5'
            >
              {text}
            </span>
            <span
              key={`star-${index}`}
              className='inline-block w-5 md:w-[30px]  pt-2 md:pt-'
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
