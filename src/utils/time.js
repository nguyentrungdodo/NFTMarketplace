import moment from 'moment';
const timeUtils = {
  formatTime: (time, option) => {
    return moment(time)
      .utcOffset(+process.env.VUE_APP_TIME_ZONE)
      .format(option);
  },
};

export default timeUtils;
