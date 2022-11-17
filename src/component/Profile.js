import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const reservedRockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedMissions = useSelector((state) => state.missionsReducer.missions);

  return (
    <div className="container d-grid">
      <div>
        <h1 className="profile-title-mission">My Missions</h1>
        <ul className="reserved-list-mission d-flex">
          {reservedMissions
            ?.filter((mission) => mission.status)
            .map((mission) => (
              <li key={mission.mission_id} className="reserved-item d-flex">
                {mission.mission_name}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h1 className="profile-title-rocket">My Rockets</h1>
        <ul className="reserved-list-rocket d-flex">
          {reservedRockets
            ?.filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <li key={rocket.id} className="reserved-item d-flex">
                {rocket.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
