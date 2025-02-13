import OnScrollCounter from "../../Shared/Counter/OnScrollCounter";

const Counter = () => {
    return (
      <div className='Container'>
        <div className='grid grid-cols-12 items-center bg-white bg-opacity-20 border-2 border-white backdrop-filter backdrop-blur-md rounded-[10px] px-[60px] py-[52px] mt-[60px]'>
          <div className='col-span-4'>
            <h3 className='font-Rajdhani font-bold text-HeadingColor-0 text-3xl'>
              Top Robotic Agency
              <br /> Based on USA
            </h3>
          </div>
          <div className='col-span-8 flex items-center justify-between w-full relative z-10 before:absolute before:top-1/2 before:left-[28%] before:-translate-y-1/2 before:h-16 before:bg-opacity-50 before:w-[1px] before:bg-TextColor-0 after:absolute after:top-1/2 after:left-[66%] after:-translate-y-1/2 after:h-16 after:bg-opacity-50 after:w-[1px] after:bg-TextColor-0'>
            <div className='flex items-center gap-5'>
              <div className='font-Rajdhani font-bold text-HeadingColor-0 text-[60px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={6}
                  duration={3000}
                />
                <h1>K</h1>
              </div>
              <p className='font-Nunito text-TextColor2-0'>
                Completed
                <br /> Works
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='font-Rajdhani font-bold text-HeadingColor-0 text-[60px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={76}
                  duration={3000}
                />
                <h1>+</h1>
              </div>
              <p className='font-Nunito text-TextColor2-0'>
                Our Expert
                <br /> Engineers
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='font-Rajdhani font-bold text-HeadingColor-0 text-[60px] flex items-center'>
                <OnScrollCounter
                  start={0}
                  end={97}
                  duration={3000}
                />
                <h1>%</h1>
              </div>
              <p className='font-Nunito text-TextColor2-0'>
                Satisfaction
                <br /> Rates
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Counter;