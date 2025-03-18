/* eslint-disable react/prop-types */

const HistoryCard = ({
  historyTitle,
  historyDesc,
}) => {
  return (
    <div className='group bg-white rounded-[10px] px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-8 lg:pt-4 xl:pt-7 2xl:pt-11 pt-5 sm:pt-10 lg:pb-4 xl:pb-6 2xl:pb-8 pb-5 sm:pb-8'>
      <h4 className='font-Rajdhani font-semibold text-xl sm:text-2xl md:text-[22px] lg:text-xl xl:text-2xl 2xl:text-[28px] text-HeadingColor-0 transition-all duration-500  mt-9 mb-6 max-w-[220px] w-full'>
        {historyTitle}
      </h4>
      <p className='font-Nunito text-TextColor2-0 transition-all duration-500 max-w-[318px] w-full'>
        {historyDesc}
      </p>
    </div>
  );
};

export default HistoryCard;
