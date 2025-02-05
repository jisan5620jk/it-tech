import './feature.css';
import SnakeifyBox from './SnakeifyBox';

const Feature = () => {

  return (
    <div className='snakeify-container'>
        <div>
            <SnakeifyBox className="portfolio-single-box" />
            <SnakeifyBox className="gallery-single-box" />
        </div>


    </div>
  );
};

export default Feature;
