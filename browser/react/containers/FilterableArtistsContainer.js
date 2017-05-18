import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';
import AUDIO from '../audio';

import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Artists from "../components/Artists";
import Artist from "../components/Artist";
import FilterInput from "../components/FilterInput";
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

export default class FilterableArtistsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event){
    const value = event.target.value;
    console.log(value);
    this.setState({
      inputValue: value
    })
  }

  render(){
    const inputValue = this.state.inputValue;
    const filterArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));
    return (
      <div>
        <FilterInput handleChange={this.handleChange}/>
        <Artists artists={filterArtists} />
      </div>
    )
  }

}
