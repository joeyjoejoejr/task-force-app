import React from "react";
import TaskForceList from "./TaskForce/List";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">
          Task Forces
        </h2>

        <TaskForceList taskForces={this.props.taskForces} />
      </div>
    );
  }
};

Home.propTypes = { taskForces: React.PropTypes.array.isRequired };

export default Home;
