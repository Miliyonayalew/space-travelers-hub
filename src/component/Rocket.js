import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rocket/rocket';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    if (rocket.reserved) {
      dispatch(cancelRocket(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };

  return (
    <li key={rocket.id} className="rocket">
      <img src={rocket.image} alt={rocket.name} />
      <div className="rocket-info">
        <h3 className="rocket-name">{rocket.name}</h3>
        <div className="rocket-description d-flex">
          {rocket.reserved ? (
            <h2 className={rocket.reserved ? 'reserved' : ''}>
              Reserved
            </h2>
          ) : (
            ''
          )}
          &nbsp;
          {rocket.description}
        </div>
        <button
          type="button"
          onClick={handleReservation}
          className={rocket.reserved ? 'cancel' : 'reserve'}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
