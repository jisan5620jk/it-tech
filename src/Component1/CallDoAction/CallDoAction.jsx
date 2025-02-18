import callDoAction from '/images/call-do-img.png';
import callDoActionIcon from '/images/call-do-icon.png';
import callDoActionShape from '/images/hand.png';

const CallDoAction = () => {
  return (
    <section className='bg-[url(/images/call-to-bg.png)] bg-cover bg-center relative'>
      <div className='Container'>
        <div className='flex items-center justify-between'>
          <div className='flex pl-[272px] relative py-12'>
            <div className='absolute left-0 bottom-0'>
              <img
                src={callDoAction}
                draggable={false}
                alt='Image'
              />
            </div>
            <div>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[34px] xl:leading-[40px] text-white mt-[14px] mb-4'>
                Need SEO Service for growing your <br /> Business? Just Call Us.
              </h1>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div>
              <img
                src={callDoActionIcon}
                draggable={false}
                alt='Icon'
              />
            </div>
            <div>
              <h6 className='font-Rajdhani text-white'>Call Us Anytime</h6>
              <a
                href='tel:+001234567890'
                className='font-Rajdhani text-white text-[26px] leading-10 font-medium'
              >
                +00 123 (4567) 890
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute right-20 bottom-0 animate-dance3'>
        <img
          src={callDoActionShape}
          draggable={false}
          alt='Image'
        />
      </div>
    </section>
  );
};

export default CallDoAction;
