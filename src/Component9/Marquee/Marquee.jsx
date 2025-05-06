const Marquee = () => {
  const items = [
    'New Technology',
    'High Security',
    'Best Safety',
    'New Technology',
    'High Security',
    'Best Safety',
    'New Technology',
    'High Security',
  ];

  return (
    <div>
      <div className='w-full overflow-hidden whitespace-nowrap bg-transparent mt-10 md:mt-0'>
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className='inline-block will-change-transform overflow-hidden animate-marquee'
          >
            {items.map((text, index) => (
              <span
                key={index}
                className={`inline-block uppercase font-Rajdhani font-bold leading-[74px] text-4xl md:text-[100px] text-white mx-[25px] ${
                  index % 2 !== 0 ? 'stroke' : ''
                }`}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
