import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';
import AUDIO from '../audio';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import NewPlaylist from '../components/NewPlaylist';

import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

export default class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event){
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
  }
  handleSubmit(event){
    console.log("NEW PLAYLIST?" + this.state.value);
    event.preventDefault();
  }

  render(){
    <NewPlaylist />
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Playlist Name:
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
