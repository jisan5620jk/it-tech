/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testQuote,
  testiTitle,
  testiRatingIcon,
  testiName,
  testiProfile,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative px-9 pt-8 pb-10 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border-white border-2 rounded-[10px] ease-linear transition-all duration-500 hover:border-PrimaryColor-0'>
      <div className='flex gap-1 items-center'>
        <div className='text-[40px] text-PrimaryColor-0'>{testQuote}</div>
        <h5 className='font-Rajdhani text-2xl text-HeadingColor-0 font-semibold'>
          {testiTitle}
        </h5>
      </div>
      <ul className='flex items-center mb-5'>
        <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
        <li className='text-orange-400 text-[22px]'>{testiRatingIcon}</li>
      </ul>
      <p className='font-Nunito text-TextColor2-0'>{testiDesc}</p>
      <div className='flex items-center gap-4 mt-[26px]'>
        <div>
          <img
            src={testiProfile}
            draggable={false}
            alt='User Image'
          />
        </div>
        <div>
          <h5 className='font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-xl relative'>
            {testiName}
          </h5>
          <p className='font-Nunito text-TextColor2-0'>{testiDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
