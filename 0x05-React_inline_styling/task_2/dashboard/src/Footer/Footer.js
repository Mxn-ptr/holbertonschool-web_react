import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <footer>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
  )
}
