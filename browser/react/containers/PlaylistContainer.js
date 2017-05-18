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
      inputValue: '',
      show: false,
      tooLong: false,
      tooShort: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount{
  axios.post('/api/playlists', this.state.inputValue)
    .then(res => res.data)
    .then(result => {
      console.log(result) // response json from the server!
    });
  }

  handleChange (event){
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
    if(this.state.inputValue === ''){
      this.setState({
        show: true,
        tooShort: true,
        tooLong: false
      })
    }else if(this.state.inputValue.length > 16){
      this.setState({
        show: true,
        tooShort: false,
        tooLong: true
      })
    } else{
      this.setState({
        show:false
      })
    }
  }

  handleSubmit(event){
    console.log("NEW PLAYLIST?" + this.state.inputValue);
    this.setState({
      inputValue: ""
    })
    event.preventDefault();
  }

  render(){
    return (
      <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValue={this.state.inputValue} show={this.state.show} tooShort={this.state.tooShort} tooLong={this.state.tooLong}/>
    );
  }

}
