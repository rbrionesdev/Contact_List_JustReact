import React from "react";
import { Button, Form } from "semantic-ui-react";

class MusicForm extends React.Component {
  // Third step
  state = {
    name: this.props.name ? this.props.name : "",
    artist: this.props.artist ? this.props.artist : "",
  }
  // Second step
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value,
    });
  };
  // Five step addMusic // Seven step updateMusic
  handleSubmit = (e) => {
    if (this.props.id) {
      this.props.updateMusic({ id: this.props.id, ...this.state });
      this.props.toogleForm();
    } else {
    this.props.addMusic({ id: Math.random(), ...this.state });
    }
    this.setState({
      name: "",
      artist: "",
    });
  };

  // Firts step
  render() {
    return (
      <div>
        <h1> Music Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              name={"name"}
              onChange={this.handleChange}
              value={this.state.name}
              label="Name:"
            />
            <Form.Input 
              name={"artist"}
              onChange={this.handleChange}
              value={this.state.artist}
              label="Artist:"
            />
          </Form.Group>
          <Button color="black">{this.props.id ? "Update" : "Add"}</Button>
        </Form>
      </div>
    );
  };


};

export default MusicForm;