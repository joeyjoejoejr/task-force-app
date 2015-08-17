import React from "react";
import { RouteHandler } from "react-router";
import Firebase from "firebase";

export default class TaskForceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskForces: [] };
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://boiling-torch-7343.firebaseio.com/taskForces/");

    this.firebaseRef.on("value", (dataSnapshot) => {
      let data = dataSnapshot.val();
      let taskForces = Object.keys(data).map((k) => data[k])
      this.setState({ taskForces });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  addTaskForce(taskForce) {
    this.firebaseRef.push(taskForce);
  }

  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a href="/" className="navbar-brand">Task Force App</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/#/task-force/new">Suggest a Task Force</a></li>
            </ul>
          </div>
        </nav>
        <RouteHandler
          taskForces={this.state.taskForces}
          addTaskForce={this.addTaskForce.bind(this)}
          {...this.props} />
      </div>
    );
  }
}
