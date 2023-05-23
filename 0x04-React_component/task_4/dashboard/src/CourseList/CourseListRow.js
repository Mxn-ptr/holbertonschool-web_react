import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  let tr;

  if (!props.isHeader) {
    tr = (
      <>
        <td>{props.textFirstCell}</td>
        <td>{props.textSecondCell}</td>
      </>
    )
  } else {
    if (!props.textSecondCell) {
      tr = (
        <th colSpan='2'>{props.textFirstCell}</th>
      )
    } else {
      tr = (
        <>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </>
      )
    }
  }
  return (
    <tr>{tr}</tr>
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

export default CourseListRow;
