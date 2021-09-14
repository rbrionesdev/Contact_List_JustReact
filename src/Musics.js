import React from 'react';
import { Table } from "semantic-ui-react";
import Music from './Music';

const Musics = ({ musics, updateMusic, deleteMusic } ) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Music</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {musics.map((music) => (
        <Music 
          deleteMusic={deleteMusic}
          updateMusic={updateMusic}
          {...music} 
        />
      ))}
    </Table.Body>
  </Table>
);

export default Musics;