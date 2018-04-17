import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };
  // component will mount will be deprecated
  // change to component did mount
  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map((album, i) => <AlbumDetail key={i} album={album} />);
  }

  render() {
    return <AlbumListContainer>{this.renderAlbums()}</AlbumListContainer>;
  }
}

const AlbumListContainer = styled.View``;

export default AlbumList;
