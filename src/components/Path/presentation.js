import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { PathContainer, PathItem } from './style';

class Path extends PureComponent {
  render() {
    const { activeIndex } = this.props;

    return (
      <PathContainer>
        {[...Array(10).keys()].map(e => (
          <PathItem active={e === activeIndex}>{e + 1}</PathItem>
        ))}
      </PathContainer>
    );
  }
}

Path.propTypes = {
  activeIndex: PropTypes.number.isRequired,
};

export default Path;
