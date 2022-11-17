import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  return (
    <div>
      <ul className="mission-container">
        <li className="missions d-grid">
          <span className="mission-titles">Mission</span>
          <span className="mission-titles">Description</span>
          <span className="mission-titles">Status</span>
        </li>
        {missions?.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </ul>
    </div>

  );
};

export default Missions;
