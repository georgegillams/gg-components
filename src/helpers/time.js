import moment from 'moment';

const getTimeDifference = timeStamp => {
  if (timeStamp > 9000000000000000) {
    return '5 years';
  }
  const currentTime = moment();
  return moment(timeStamp).fromNow();
};

const getTimeDifferenceFromMillis = millis => {
  if (Math.abs(millis) > 10000) {
    if (millis < 0) {
      return 'a long time ago';
    }
    return 'a long time';
  }
  const currentTime = moment();
  return moment(timeStamp).fromNow();
};

export { getTimeDifference };
export default {
  getTimeDifference,
};
