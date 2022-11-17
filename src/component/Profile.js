import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelMission } from '../redux/mission/mission';
import { cancelRocket } from '../redux/rocket/rocket';

const Profile = () => {
  const reservedRockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedMissions = useSelector((state) => state.missionsReducer.missions);

  const dispatch = useDispatch();

  const handleReservation = (id, type) => {
    if (type === 'mission') {
      dispatch(cancelMission(id));
    } else {
      dispatch(cancelRocket(id));
    }
  };

  return (
    <div className="container d-grid">
      <div>
        <h1 className="profile-title-mission">My Missions</h1>
        <ul className="reserved-list-mission d-flex">
          {reservedMissions?.filter((mission) => mission.status === true).map((mission) => (
            <li key={mission.mission_id} className="reserved-item d-flex">
              {mission.mission_name}
              <button
                type="button"
                onClick={() => handleReservation(mission.mission_id, 'mission')}
                className="leave-mission"
              >
                {mission.status ? 'Leave Mission' : ''}
              </button>
            </li>
          ))}
          {
            reservedMissions?.filter((mission) => mission.status === true).length === 0
            && <li className="reserved-item d-flex">No Missions Joined</li>
          }
        </ul>
      </div>
      <div>
        <h1 className="profile-title-rocket">My Rockets</h1>
        <ul className="reserved-list-rocket d-flex">
          {reservedRockets?.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <li key={rocket.id} className="reserved-item d-flex">
              {rocket.name}
              <button
                type="button"
                onClick={() => handleReservation(rocket.id, 'rocket')}
                className="leave-mission"
              >
                {rocket.reserved ? 'Cancel Reservation' : ''}
              </button>
            </li>
          ))}
          {
            reservedRockets?.filter((rocket) => rocket.reserved === true).length === 0
            && <li className="reserved-item d-flex">No reserved rockets</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
