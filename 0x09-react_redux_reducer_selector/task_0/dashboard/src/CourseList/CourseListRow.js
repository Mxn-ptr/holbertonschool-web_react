import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
  let tr;
  const style = {
    headerStyle: { backgroundColor: '#f5f5f5ab' },
    bodyStyle: { backgroundColor: '#deb5b545'}, 
  };
  const [checked, setChecked] = useState(0);

  const handleCheck = () => {
    setChecked(!checked);
  }

  if (!props.isHeader) {
    tr = (
      <>
        <td className={checked ? css(styles.rowChecked): ''}><input type="checkbox" onClick={handleCheck} />{props.textFirstCell}</td>
        <td className={checked ? css(styles.rowChecked): ''}>{props.textSecondCell}</td>
      </>
    )
  } else {
    if (!props.textSecondCell) {
      tr = (
        <th colSpan='2' className={css(styles.ths)}>{props.textFirstCell}</th>
      )
    } else {
      tr = (
        <>
          <th className={css(styles.ths, styles.alignText)}>{props.textFirstCell}</th>
          <th className={css(styles.ths, styles.alignText)}>{props.textSecondCell}</th>
        </>
      )
    }
  }
  return (
    <tr style={ props.isHeader ? style.headerStyle : style.bodyStyle }>{tr}</tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  ths: {
    borderBottom: '2px solid lightgrey',
  },
  alignText: {
    textAlign: 'left',
  },
  rowChecked : {
    backgroundColor: '#e6e4e4'
  }
})

export default CourseListRow;
