import cx from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import { PanelContext } from './panel-context';

export const PanelFooter = (props) => {
  const color = React.useContext(PanelContext);

  return (
    <div
      {...props}
      className={cx(
        'px-3 py-1 text-sm',
        color && colorClasses[color],
        props.className
      )}
    />
  );
};

const colorClasses = {
  default: 'bg-gray-700 text-gray-100',
  primary: 'bg-blue-500 text-gray-100',
  success: 'bg-green-500 text-gray-100',
  info: 'bg-teal-500 text-gray-100',
  warning: 'bg-orange-500 text-gray-100',
  danger: 'bg-red-500 text-gray-100',
};

PanelFooter.propTypes = {
  className: PropTypes.string,
};
