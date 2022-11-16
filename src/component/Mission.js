import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <div className="mission">
    <h3 className="mission-name">{mission.mission_name}</h3>
    <p className="mission-description">{mission.description}</p>
  </div>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
