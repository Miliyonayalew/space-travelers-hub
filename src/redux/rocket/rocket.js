const FETCH_ROCKETS = 'FETCH_ROCKETS';
const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

const initialState = [];

const fetchRockets = () => ({ type: FETCH_ROCKETS });

const fetchRocketsSuccess = (payload) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload,
});

const fetchRocketsFailure = (payload) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload,
});

const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

const fetchRocketsThunk = () => async (dispatch) => {
  dispatch(fetchRockets());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const rockets = [];
    data.forEach((rocket) => {
      rockets.push({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
      });
    });
    dispatch(fetchRocketsSuccess(rockets));
  } catch (error) {
    dispatch(fetchRocketsFailure(error.message));
  }
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, loading: true };
    case FETCH_ROCKETS_SUCCESS:
      return { ...state, loading: false, rockets: action.payload };
    case FETCH_ROCKETS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    case CANCEL_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export { fetchRocketsThunk, reserveRocket, cancelRocket };

export default rocketsReducer;
