import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function Footer(props) {
  const { user } = props;
  return (
    <footer>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      { user.email ? (
        <a>Contact us</a>
      ) : <></>}
    </footer>
  )
}

Footer.propTypes = {
  user: PropTypes.object,
}

Footer.defaultProps = {
  user: null,
}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user')
  };
}

export default connect(mapStateToProps)(Footer);
