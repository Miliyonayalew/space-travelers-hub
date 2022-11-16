import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <li key={rocket.id} className="rocket">
    <img src={rocket.image} alt={rocket.name} />
    <div className="rocket-info">
      <h3 className="rocket-name">{rocket.name}</h3>
      <div className="rocket-description">
        <p>{rocket.description}</p>
      </div>
      <button type="button">Reserve Rocket</button>
    </div>
  </li>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
