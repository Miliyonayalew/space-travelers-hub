import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <ul data-testid="rocket">
      {rockets?.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default Rockets;
