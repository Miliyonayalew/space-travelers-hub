const FETCH_MISSIONS = 'FETCH_DATA_MISSIONS';
const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = [];

const fetchMissions = () => ({ type: FETCH_MISSIONS });

const fetchMissionsSuccess = (payload) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload,
});

const fetchMissionsFailure = (payload) => ({
  type: FETCH_MISSIONS_FAILURE,
  payload,
});

const reserveMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const cancelMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const fetchMissionsThunk = () => async (dispatch) => {
  dispatch(fetchMissions());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const missions = [];
    data.forEach((mission) => {
      missions.push({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        status: false,
      });
    });
    dispatch(fetchMissionsSuccess(missions));
  } catch (error) {
    dispatch(fetchMissionsFailure(error.message));
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, loading: true };
    case FETCH_MISSIONS_SUCCESS:
      return { ...state, loading: false, missions: action.payload };
    case FETCH_MISSIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: true };
          }
          return mission;
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: false };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};

export const allMissions = (state) => state.missionsReducer.missions;

export { fetchMissionsThunk, reserveMission, cancelMission };

export default missionsReducer;
