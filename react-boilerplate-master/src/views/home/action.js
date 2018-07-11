import createAsyncAction from 'utils/createAsyncAction';

function getMessage() {
  return createAsyncAction('HOME_GET_MESSAGE', () => (
    Promise.resolve({
      data: 'React is awesome!',
    })
  ));
}
function getTemp() {
  return createAsyncAction('HOME_GET_TEMP', () => (
    Promise.resolve({
      data: '自定义temp',
    })
  ));
}

export default {
  getMessage,
  getTemp,
};
