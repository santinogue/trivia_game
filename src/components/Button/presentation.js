import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, LargeButtonContainer } from './style';

class Button extends PureComponent {
  render() {
    const { children, onClick, secondary, large } = this.props;
    const ButtonType = large ? LargeButtonContainer : ButtonContainer;

    return (
      <ButtonType secondary={secondary} onClick={onClick}>
        {children}
      </ButtonType>
    );
  }
}

Button.defaultProps = {
  secondary: false,
  large: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  large: PropTypes.bool,
};

export default Button;
