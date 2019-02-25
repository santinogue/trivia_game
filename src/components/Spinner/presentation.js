import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

import { SpinnerContainer } from './style';

class Spinner extends PureComponent {
  render() {
    const { loading } = this.props;

    if (!loading) return null;

    return (
      <SpinnerContainer>
        <RingLoader
          sizeUnit="px"
          size={150}
          color="#138af1"
          loading={loading}
        />
      </SpinnerContainer>
    );
  }
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
