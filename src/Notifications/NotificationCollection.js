import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import NotificationComp from './NotificationComp';
import STYLES from './notification-collection.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const NotificationCollection = props => {
  const { newDataAvailable, notifications, load, className, ...rest } = props;

  const reloadNotificationsIfNecessary = () => {
    if (newDataAvailable) {
      load();
    }
  };

  useEffect(() => {
    const interval = setInterval(reloadNotificationsIfNecessary, 500);

    const cleanUp = () => {
      clearInterval(interval);
    };
    return cleanUp;
  }, []);

  const notificationsFiltered = (notifications || []).filter(
    notification => !notification.deleted,
  );

  if (!notificationsFiltered || notificationsFiltered.length < 1) {
    return null;
  }

  const outerClassNameFinal = [
    getClassName('notification-collection__container'),
  ];

  if (className) {
    outerClassNameFinal.push(className);
  }
  return (
    <div className={outerClassNameFinal.join(' ')} {...rest}>
      {notificationsFiltered.map(notification => (
        <NotificationComp
          className={getClassName('notification-collection__notification')}
          type={notification.type}
          deleted={notification.deleted}
        >
          {notification.message}
        </NotificationComp>
      ))}
    </div>
  );
};

NotificationCollection.propTypes = {
  newDataAvailable: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  notifications: PropTypes.arrayOf(PropTypes.object),
  load: PropTypes.func.isRequired,
  className: PropTypes.string,
};

NotificationCollection.defaultProps = {
  className: null,
};

export default NotificationCollection;
