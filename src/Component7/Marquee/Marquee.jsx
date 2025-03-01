import star from '/images/star-1.webp';
import './marquee.css';

const Marquee = () => {
  return (
    <div>
      <div className='marquee-text-section2'>
        <div className='marquee-animation'>
          <span className='marquee-text-item'>WEBSITE DEVELOPMENT</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>UI/UX DESIGNING</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>ARTIFICIAL INTELLIGENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>WEBSITE DEVELOPMENT</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>UI/UX DESIGNING</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
        </div>
        <div className='marquee-animation'>
          <span className='marquee-text-item'>WEBSITE DEVELOPMENT</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>UI/UX DESIGNING</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>ARTIFICIAL INTELLIGENCE</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>WEBSITE DEVELOPMENT</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
          <span className='marquee-text-item'>UI/UX DESIGNING</span>
          <span className='marquee-text-item animate-rotational'>
            <img
              src={star}
              draggable={false}
              alt='Star'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
