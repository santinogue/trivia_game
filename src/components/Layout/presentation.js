import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LayoutContainer, Content, Header, Container, QuizIcon } from './style';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <LayoutContainer>
        <Content>
          <Header>
            <QuizIcon />
          </Header>

          <Container>{children}</Container>
        </Content>
      </LayoutContainer>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
