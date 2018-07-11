import createReducer from 'utils/createReducer';

const defaultState = () => ({
  message: '',
  temp: '',
});

const getMessageSuccess = (state, action) => ({
  ...state,
  message: action.payload.data,
});
const getTempSuccess = (state, action) => ({
  ...state,
  temp: action.payload.data,
});

export default createReducer(defaultState, {
  HOME_GET_MESSAGE_SUCCESS: getMessageSuccess,
  HOME_GET_TEMP_SUCCESS: getTempSuccess,
});
