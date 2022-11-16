import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  return (
    <div>
      <ul className="missions">
        <li className="mission-title">
          <span className="table-header">Mission</span>
          <span className="table-header">Description</span>
          <span className="table-header">Status</span>
        </li>
        {missions?.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </ul>
    </div>

  );
};

export default Missions;
