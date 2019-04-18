import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Intent } from '@blueprintjs/core';

const Loading = ({ className, intent, value }) => (
  <div className="loading">
    <Spinner className={className} intent={intent} value={value} />
  </div>
);

Loading.propTypes = {
  className: PropTypes.string,
  intent: PropTypes.number,
  value: PropTypes.number
};

Loading.defaultProps = {
  className: '',
  intent: Intent.SUCCESS
};

export default Loading;
