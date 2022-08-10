import { useEffect, useState } from 'react';
import Horse from './Horse';
import Skeleton from './Skeleton';

const Horses = ({ socket }) => {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', function (response) {
      const res = Array.isArray(response) ? response : [response];
      setHorses(res);
    });
  }, [socket]);

  const winner = horses.filter((horse) => horse.distance === 1000);

  if (winner.length > 0) {
    socket.disconnect();
  }

  const horseData = horses.map((horse) => <Horse horse={horse} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return <>{horses.length > 0 ? horseData : skeletons}</>;
};

export default Horses;
