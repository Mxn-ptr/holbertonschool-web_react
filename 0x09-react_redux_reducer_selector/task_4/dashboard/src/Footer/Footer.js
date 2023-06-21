import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  return (
    <footer>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      { AppContext._currentValue.user.isLoggedIn ? (
        <a>Contact us</a>
      ) : <></>}
    </footer>
  )
}
