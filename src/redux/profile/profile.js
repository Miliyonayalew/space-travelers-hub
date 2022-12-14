const FETCH_RESERVED_ROCKETS = 'FETCH_RESERVED_ROCKETS';

const initialState = [];

const fetchReservedRockets = (payload) => ({
  type: FETCH_RESERVED_ROCKETS,
  payload,
});

const fetchReservedRocketsThunk = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const reserverRockets = data.filter((rocket) => rocket.reserved);
  dispatch(fetchReservedRockets(reserverRockets));
};

const reservedRocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVED_ROCKETS:
      return { ...state, reservedRockets: action.payload };
    default:
      return state;
  }
};

export { fetchReservedRocketsThunk };

export default reservedRocketsReducer;
