import React from "react";

class TaskForceNew extends React.Component {
  handleSubmit() {
    var name = this.refs.taskForceName.getDOMNode(),
        description = this.refs.taskForceDescription.getDOMNode(),
        notes = this.refs.taskForceNotes.getDOMNode();

    var newTaskForce = {
      name: name.value,
      description: description.value,
      notes: notes.value
    };

    name.value = "";
    description.value = "";
    notes.value = "";

    this.props.addTaskForce(newTaskForce);
    this.context.router.transitionTo("/");
  }

  render() {
    return (
      <div className="container">
        <div className="form-horizontal">
          <h2 className="text-center">Add A Task Force</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref="taskForceName"
              placeholder="Taskforce Name" />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              ref="taskForceDescription"
              placeholder="Description, Specific Goals, and Work Products" />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              ref="taskForceNotes"
              placeholder="Notes" />
          </div>

          <div className="form-group">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.handleSubmit.bind(this)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TaskForceNew.propTypes = {
  addTaskForce: React.PropTypes.func.isRequired
};

TaskForceNew.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default TaskForceNew;
