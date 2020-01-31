import moment from 'moment';
const MILLIS_PER_FIVE_YEARS = 5 * 365.25 * 24 * 60 * 60 * 1000;

const getTimeDifference = timeStamp => {
  if (timeStamp > 9000000000000000) {
    return '5 years';
  }
  return moment(timeStamp).fromNow();
};

const getTimeDifferenceFromMillis = millis => {
  if (Math.abs(millis) > MILLIS_PER_FIVE_YEARS) {
    if (millis < 0) {
      return 'a long time ago';
    }
    return 'a long time';
  }
  const currentTime = new Date().getTime();
  const futureTime = currentTime + millis;
  return moment(futureTime).fromNow();
};

export { getTimeDifference, getTimeDifferenceFromMillis };
export default { getTimeDifference, getTimeDifferenceFromMillis };
