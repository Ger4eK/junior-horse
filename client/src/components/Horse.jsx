import clsx from 'clsx';
import player from '../assets/images/nonee.png';
import win from '../assets/images/smile.png';

const Horse = ({ horse }) => {
  return (
    <div className={clsx('horse ', { winner: horse.distance === 1000 })}>
      <img
        className='horse__image'
        src={horse.distance === 1000 ? win : player}
        alt='horseIcon'
      />
      <div className='horse__name'>{horse.name}:</div>
      <div className='horse__distance'>{horse.distance}</div>
    </div>
  );
};

export default Horse;
