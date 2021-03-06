import classNames from 'classnames';
import React from 'react';

import { bsClass, getClassSet } from './utils/bootstrapUtils';

class HelpBlock extends React.Component {
  render() {
    const { className, ...props } = this.props;
    delete props.bsClass;

    const classes = getClassSet(this.props);

    return (
      <span {...props} className={classNames(className, classes)} />
    );
  }
}

export default bsClass('help-block', HelpBlock);
