import React, { Component} from 'react';
import { Container } from "semantic-ui-react";
import './App.css';
import MusicForm from './MusicForm';
import Musics from './Musics';
class App extends Component {
  state = {
    musics: [
      { id: 1, name: "I'm not the only one", artist: "Sam Smith" },
      { id: 2, name: "Chunks", artist: "Phlake" },
      { id: 3, name: "Bang!", artist: "AJR" },
    ],
  };

  async componentDidMount() {
    console.log("mounted");
  };

  // Eight step - Create Log
  componentDidUpdate() {
    console.log("updated");
  }

  // Four step - add and pass props
  addMusic = (music) => {
    console.log("music");
    this.setState({
      musics: [music, ...this.state.musics]
    });
  };

  // Six steps - update and pass props
  updateMusic = (music) => {
    let updateMusics = this.state.musics.map((m) => m.id === music.id ? music : m);
    this.setState({
      musics: updateMusics,
    });
  };

  deleteMusic = (id) => {
    let filteredMusics = this.state.musics.filter((m) => m.id !== id);
    this.setState({
      musics: filteredMusics,
    })
  };



  render() {
    return (
      <Container>
        <MusicForm addMusic={this.addMusic} />
        
        <Musics 
        deleteMusic={this.deleteMusic}
        updateMusic={this.updateMusic}
        musics={this.state.musics} />
        
      </Container>
    );
  };

};

export default App;

