import React from "react";

class TaskForceList extends React.Component {
  render() {
    var taskForces = this.props.taskForces.map((taskForce, index) => {
      return (
        <li className="list-group-item" key={index}>
          <h3>{taskForce.name}</h3>
          <p>{taskForce.description}</p>
          <p>{taskForce.notes}</p>
        </li>
      );
    });

    return (
      <ul className="list-group">
        {taskForces}
      </ul>
    );
  }
};

TaskForceList.propTypes = { taskForces: React.PropTypes.array.isRequired };

export default TaskForceList;
