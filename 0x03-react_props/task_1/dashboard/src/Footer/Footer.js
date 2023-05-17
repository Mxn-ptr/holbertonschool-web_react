import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <footer className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
  )
}
