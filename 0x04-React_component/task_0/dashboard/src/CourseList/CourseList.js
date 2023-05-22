import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes, { arrayOf } from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({listCourses}) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses'/>
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit'/>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
          ) : 
          listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>))
        }
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
