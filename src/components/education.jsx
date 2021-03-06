import React, { Component } from "react";
import { Trash, PencilSquare } from "react-bootstrap-icons";

class Education extends Component {
  state = {
    isEditing: this.props.education.isEditing,
  };

  handleClick = (event) => {
    const isEditing = true;
    this.setState({ isEditing });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isEditing = false;
    this.setState({ isEditing });
  };

  render() {
    const form = (
      <div className="col-md-12 m-4">
        <form onSubmit={this.handleSubmit}>
          <div className="row w-100">
            <div className="form-group col-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={this.props.education.title}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="school">School</label>
              <input
                type="text"
                className="form-control"
                name="school"
                id="school"
                value={this.props.education.school}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="dateFrom">Date From</label>
              <input
                type="date"
                className="form-control"
                name="dateFrom"
                id="dateFrom"
                value={this.props.education.dateFrom}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="dateTo">Date To</label>
              <input
                type="date"
                className="form-control"
                name="dateTo"
                id="dateTo"
                value={this.props.education.dateTo}
                onChange={(event) => this.props.onChange(this.props.id, event)}
                required
              />
            </div>
          </div>
          <div className="row w-100">
            <div className="form-group col-12">
              <label htmlFor="description">description</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                cols="30"
                rows="10"
                value={this.props.education.description}
                onChange={(event) => this.props.onChange(this.props.id, event)}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary btn-sm m-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    );

    const page = (
      <div className="col-md-12">
        <h4>{this.props.education.title}</h4>
        <div className="text-left">
          <strong>
            {`${this.props.education.school} (${this.props.education.dateFrom} - ${this.props.education.dateTo})`}
          </strong>
        </div>
        <p>{this.props.education.description}</p>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleClick}
        >
          <PencilSquare />
        </button>
        {this.props.isDeleteButton && (
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            <Trash />
          </button>
        )}
      </div>
    );

    return (this.state.isEditing && form) || page;
  }
}

export default Education;
