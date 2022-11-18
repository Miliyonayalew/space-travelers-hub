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
    <li key={rocket.id} className="rocket d-flex">
      <img src={rocket.image} alt={rocket.name} />
      <div className="rocket-info d-flex">
        <span className="rocket-name">{rocket.name}</span>
        <div className="rocket-description">
          {rocket.reserved ? (
            <span className={rocket.reserved ? 'reserved' : ''}>
              Reserved
            </span>
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
