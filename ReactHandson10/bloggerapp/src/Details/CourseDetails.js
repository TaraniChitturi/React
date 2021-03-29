import React from 'react';

class CourseDetails extends React.Component {
  state={
     courses : [
      {name: "Angular", date: "01/05/1999" },
      {name: "React", date: "01/04/1998" }
    ]
  }
    render(){
      return (
        <div>
          <h1>Course Details</h1>
          <Course courses={this.state.courses} />
        </div>
      );
    }
  }

  function Course(props) {
    return props.courses.map((course) => {
      return (
        <div>
          <h2>{course.name}</h2>
          <p>{course.date}</p>
        </div>
      );
    });
  }
export default CourseDetails;