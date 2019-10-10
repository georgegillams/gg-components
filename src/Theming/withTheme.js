import React from 'react';
import { ThemeContext } from './themeContext';

const withTheme = Component => {
  class ThemedComponent extends React.Component {
    render() {
      let { theme } = this.context;
      return <Component theme={theme} {...this.props} />;
    }
  }

  ThemedComponent.contextType = ThemeContext;

  return ThemedComponent;
};

export default { withTheme };
export { withTheme };
