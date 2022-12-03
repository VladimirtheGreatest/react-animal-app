import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const [isDescending, setIsDescending] = useState(false);

  const executeHeart = () => {
    if(isAscending){
      setClicks(clicks + 1);
    }

    if(isDescending){
      setClicks(clicks - 1);
    }

    if(clicks == 20){
      setIsDescending(true);
      setIsAscending(false);
    }

    if(clicks == 0){
      setIsDescending(false);
      setIsAscending(true);
    }
  }

  const handleClick = () => {
   setInterval(executeHeart, 1000);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
