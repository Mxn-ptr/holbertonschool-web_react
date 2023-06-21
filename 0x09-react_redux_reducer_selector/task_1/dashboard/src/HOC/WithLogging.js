import React from 'react';

function WithLogging(WrappedComponent) {
  const component = getDisplayName(WrappedComponent);
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${component} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${component} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  HOC.displayName = `WithLogging(${component})`;
  return HOC;
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
}

export default WithLogging;
