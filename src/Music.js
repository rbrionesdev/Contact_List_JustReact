import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import MusicForm from './MusicForm';

class Music extends React.Component {
  state = { showForm: false };
  toogleForm = () => {
    this.setState({ 
      showForm: !this.state.showForm,
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <>
          <MusicForm
            toogleForm={this.toogleForm}
            updateMusic={this.props.updateMusic}
            {...this.props}
          />
          <Button onClick={this.toogleForm} color="blue">
            Cancel
          </Button>
        </>
      );
    }
    return (
      <Table.Row key={this.props.id}>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => this.props.deleteMusic(this.props.id)} color="red"
          >
            Delete
          </Button>
          <Button
            onClick={this.toogleForm} color="blue"
          >
            Update
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  };
};

export default Music;