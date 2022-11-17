import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, cancelMission } from '../redux/mission/mission';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handleReservation = () => {
    if (mission.status) {
      dispatch(cancelMission(mission.mission_id));
    } else {
      dispatch(reserveMission(mission.mission_id));
    }
  };
  return (

    <div className="missions d-grid">
      <h3 className="mission-name">{mission.mission_name}</h3>
      <p className="mission-description">{mission.description}</p>
      <div className="mission-status d-flex">
        <button
          type="button"
          className={mission.status ? 'active-member' : 'not-member'}
        >
          {mission.status ? 'Active Member' : 'Not a Member'}
        </button>
        <button
          type="button"
          onClick={handleReservation}
          className={mission.status ? 'leave-button' : 'join-button'}
        >
          {mission.status ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
