const FETCH_MISSIONS = 'FETCH_DATA_MISSIONS';
const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';

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
    default:
      return state;
  }
};

export { fetchMissionsThunk };

export default missionsReducer;
